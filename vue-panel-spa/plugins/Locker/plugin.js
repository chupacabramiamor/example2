var UILockerComponent = require('./UILockerComponent.vue').default;

export default {
    install (Vue, options) {
        Vue.component('uilocker', UILockerComponent);

        Vue.mixin({
            data: function() {
                return {
                    lockElements: {}
                }
            },

            methods: {
                lockElement: function(name) {
                    this.$set(this.lockElements, name, true);
                },

                unlockElement: function(name) {
                    this.$set(this.lockElements, name, false);
                },

                isLocked: function(name) {
                    return this.lockElements[name];
                }
            }
        });
    }
};