<template id="applicant-filter-tpl" src="./tpl.htm"></template>


<script>
    var FormSelect = require('../FormSelect/component.vue').default;

    export default {
        template: '#applicant-filter-tpl',

        components: { FormSelect },

        data: function() {
            return {
                formData: {
                    search: null,
                    age_group: null,
                    region: null
                },
                ageGroups: null,
                regions: null
            };
        },

        created: function() {
            /*this.$options.paymentStatusOptions = {
                1: 'Pending Payments',
                2: 'Completed Payments',
                3: 'Outdated Payments',
            }*/
        },

        mounted: function() {
            this.$axios.get('/panel/dirs/age-groups').then((response) => this.ageGroups = response.data);
            this.$axios.get('/panel/dirs/regions').then((response) => this.regions = response.data);
        },

        methods: {
            submit: function() {
                this.$store.commit('setApplicantsFiltration', this.params);
            }
        },

        computed: {
            ageGroupOptions: function() {
                var result = {};

                for (var index in this.ageGroups) {
                    result[this.ageGroups[index].index] = this.ageGroups[index].caption;
                }

                return result;
            },

            regionOptions: function() {
                var result = {};

                for (var index in this.regions) {
                    result[this.regions[index].id] = this.regions[index].name;
                }

                return result;
            },

            params() {
                return JSON.parse(JSON.stringify(this.formData));
            }
        }
    }
</script>
