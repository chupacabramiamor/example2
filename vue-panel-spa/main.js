import Vue from 'vue';
import router from './router.js';
import store from './store.js';
import App from './views/app.vue';

Vue.use(require('./plugins/Locker/plugin.js').default);
Vue.use(require('./plugins/Alerts/plugin.js').default);
Vue.use(require('./plugins/Axios/plugin.js').default);

var vueapp = new Vue({
    el: '#app',

    router: router,

    store: store,

    components: { App }
});

Vue.prototype.$axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status == 401) {
            $router.push({ path: '/login' });
        }

        vueapp.$emit('response.error', error);
        return Promise.reject(error);
    }
);
