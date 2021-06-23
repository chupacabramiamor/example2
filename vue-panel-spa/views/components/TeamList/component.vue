<template id="team-list-tpl" src="./tpl.htm"></template>

<script>
    import axios from 'axios';

    var DateMixin = require('../../../mixins/dates.js').default;

    export default {
        template: '#team-list-tpl',

        props: {
            url: { type: String, default: null }
        },

        mixins: [ DateMixin ],

        data: function() {
            return {
                items: []
            }
        },

        mounted: function() {
            this.$root.currentNavItem = 'teams';
            this.fetch();

            this.$root.$on('filterChanged', function (payload) {
                this.fetch(payload);
            }.bind(this));
        },

        methods: {
            fetch: function(params) {
                if (!this.url) {
                    return;
                }

                this.lockElement('table');

                return axios(this.url, { params: params }).then(function(response) {
                    this.items = response.data;
                }.bind(this)).finally(function() {
                        this.unlockElement('table');
                }.bind(this));
            },

            getInfo: function(team) {
                this.$router.push(`/teams/${team.id}`);
            }
        }
    }
</script>