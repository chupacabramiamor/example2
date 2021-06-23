import Vue from 'vue';
import Vuex from 'vuex';
import UserStore from './store/user.vuex.js';
import ApplicantStore from './store/applicants.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: UserStore,
        applicants: ApplicantStore
    }
});
