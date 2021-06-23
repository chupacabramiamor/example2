<template id="team-filter-tpl" src="./tpl.htm"></template>

<script>
    import axios from 'axios';
    var FormSelect = require('../FormSelect/component.vue').default;

    export default {
        template: '#team-filter-tpl',

        components: { FormSelect },

        data: function() {
            return {
                formData: {
                    is_assembled: 0,
                    age_group: null,
                    region: null
                },
                ageGroups: null,
                regions: null
            };
        },

        mounted: function() {
            axios.get('/rest/panel/dirs/age-groups').then((response) => this.ageGroups = response.data);
            axios.get('/rest/panel/dirs/regions').then((response) => this.regions = response.data);
        },

        methods: {
            submit: function() {
                this.$root.$emit('filterChanged', this.formData);
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
            }
        }
    }
</script>