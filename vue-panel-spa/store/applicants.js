import Vue from 'vue';
import { find, findIndex } from 'lodash';

export default {
    state: {
        current: null,

        cache: [],

        filterParams: {}
    },

    getters: {
        getCurrentApplicant(state) {
            if (!state.current) {
                return null;
            }

            return find(state.cache, (item) => {
                return item.id == state.current;
            });
        }
    },

    mutations: {
        setCurrentApplicant(state, id) {
            state.current = id;
        },

        clearCurrentApplicant(state) {
            state.current = null;
        },

        setApplicantsFiltration(state, params) {
            Vue.set(state, 'filterParams', params);
        }
    },

    actions: {
        fetchApplicantDetails({ state }, id) {

            var applicant = find(state.cache, (item) => {
                return item.id == state.current;
            });

            if (applicant) {
                return Promise.resolve(applicant);
            }

            return this._vm.$axios.get(`panel/applicants/${id}`).then((response) => {
                state.cache.push(response.data);
                return response.data;
            });
        }
    }
}
