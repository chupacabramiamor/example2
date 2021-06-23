import axios from 'axios';

export default {
    methods: {
        send: function() {
            this.lockElement('form');

            axios.post(this.url, this.params).then(function(response) {
                this.$set(this, 'errors', {});
                this.formSuccessHandle && this.formSuccessHandle(response);

                /** Forcing redirect if response have a redirectTo property */
                if (response.data.redirectTo) {
                    document.location.href = response.data.redirectTo;
                }
            }.bind(this), function(error) {
                if (error.response.data) {
                    this.errors = error.response.data.data;
                }

                this.formErrorHandle && this.formErrorHandle();
            }.bind(this)).finally(function() {
                this.unlockElement('form');
            }.bind(this));
        }
    }
}