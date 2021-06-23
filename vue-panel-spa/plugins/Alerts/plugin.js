export default {
    install (Vue, options) {
        Vue.mixin({
            methods: {
                alert: function(message, title) {
                    Swal.fire(title || 'Info', message);
                },

                confirm: function($question) {
                    return Swal.fire({
                        title: $question || 'Are you sure?',
                        text: "After button pressing will resend registration mail for this Applicant",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, do this!'
                    });
                }
            }
        });
    }
}