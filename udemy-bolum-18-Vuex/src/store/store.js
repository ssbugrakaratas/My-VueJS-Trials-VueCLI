import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        getCounterCarpimBes(state) {
            return state.counter * 5;
        },
        getStringCounter(state) {
            return state.counter + " .kez tıklandı";
        }
    },
    mutations: {
        counterArttir(state, value) {
            state.counter += value;
        }
    }
});