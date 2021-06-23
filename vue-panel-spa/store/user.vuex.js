import axios from 'axios';

export default {
    state: {
        authUser: {},
    },

    getters: {
    },

    mutations: {
        setUser(state, payload) {
            state.authUser = payload;
        },
    },

    actions: {
        fetchAuthUser() {
            return axios.get(`/rest/panel/user`).then(response => response.data);
        },

        syncAuthUser({dispatch, commit}) {
            dispatch('fetchAuthUser').then((data) => {
                commit('setUser', data);
            });
        }
    }
};