<template id="applicant-list-tpl" src="./tpl.htm"></template>

<script>
    import Pagination from '../Pagination/component.vue';

    var DateMixin = require('../../../mixins/dates.js').default;

    export default {
        template: '#applicant-list-tpl',

        components: { Pagination },

        props: {
            url: { type: String, default: null }
        },

        mixins: [ DateMixin ],

        data: function() {
            return {
                items: [],
                meta: {
                    current_page: 1,
                    per_page: null,
                    total: 0,
                }
            }
        },

        mounted: function() {
            this.$root.currentNavItem = 'applicants';
            this.fetch();
        },

        methods: {
            fetch: function(params) {
                if (!this.url) {
                    return;
                }

                this.lockElement('table');

                return this.$axios(this.url, { params: params }).then(function(response) {
                    this.items = response.data.data;
                    this.meta = {
                        current_page: response.data.current_page,
                        per_page: response.data.per_page,
                        total: response.data.total,
                    };
                }.bind(this)).finally(function() {
                        this.unlockElement('table');
                }.bind(this));
            },

            getDetails: function(id) {
                this.$store.commit('setCurrentApplicant', id);
            }
        },

        computed: {
            filterParams() {
                return this.$store.state.applicants.filterParams;
            }
        },

        watch: {
            filterParams: {
                handler(value) {
                    this.fetch(value);
                },

                deep: true
            }
        }
    }
</script>
