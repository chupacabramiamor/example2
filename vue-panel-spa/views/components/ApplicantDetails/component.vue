<template id="applicant-detais-tpl" src="./tpl.htm"></template>

<script>
    var ModalSimple = require('../ModalSimple/component.vue').default;
    var DateMixin = require('../../../mixins/dates.js').default;

    export default {
        template: '#applicant-detais-tpl',

        components: { ModalSimple },

        mixins: [ DateMixin ],

        methods: {
            fetch() {
                this.$refs.modal.lockElement('footer');

                this.$store.dispatch('fetchApplicantDetails', this.currentApplicantId).then((data) => {
                    this.$refs.modal.unlockElement('footer');
                });
            },

            refresh: function() {
                this.fetch(this.applicant.id);
            },

            sendRegistrationMail: function () {
                this.confirm('Are you sure to resend?').then(function(result) {
                    if (result.isConfirmed) {
                        this.$refs.modal.lockElement('footer');
                        this.$axios.post('/panel/applicants/' + this.applicant.id + '/resend').then(function(response) {
                            this.$refs.modal.unlockElement('footer');
                            this.alert('Email has been sent');
                        }.bind(this)).finnaly(function() {  this.$refs.modal.unlockElement('modal'); }.bind(this));
                    }
                }.bind(this));
            }
        },

        computed: {
            currentApplicantId() {
                return this.$store.state.applicants.current;
            },

            applicant() {
                return this.$store.getters.getCurrentApplicant;
            },

            fullname: function() {
                return this.applicant ? this.applicant.firstname + ' ' + this.applicant.lastname : null;
            }
        },

        watch: {
            currentApplicantId(value) {
                if (value === null) {
                    return;
                }

                this.$refs.modal.show();
                this.fetch();
            },
        }
    }
</script>
