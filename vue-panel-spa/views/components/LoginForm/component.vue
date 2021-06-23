<template id="login-form-tpl" src="./tpl.htm"></template>

<script>
    var FormField = require('../FormField/component.vue').default;
    var FormInput = require('../FormInput/component.vue').default;
    var FormPassword = require('../FormPassword/component.vue').default;
    var FormsMixin = require('../../../mixins/forms.js').default;

    export default {
        template: '#login-form-tpl',

        props: {
            url: { type: String }
        },

        components: { FormField, FormInput, FormPassword },

        data: function() {
            return {
                errors: {},
                formData: {},
            }
        },

        mixins: [ FormsMixin ],

        computed: {
            params: function() {
                return {
                    login: this.formData.login,
                    password: this.formData.password
                }
            }
        }
    }
</script>