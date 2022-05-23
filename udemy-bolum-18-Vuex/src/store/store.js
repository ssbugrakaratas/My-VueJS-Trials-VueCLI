import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        getCounterCarpimBes(state) {
            return state.counter * 5;
        },
        getStringCounter(state) {
            return state.counter + " .kez tıklandı";
        },
        getValue(state) {
            return state.value;
        }
    },
    mutations: {
        incrementCounter(state) {
            state.counter++;
        },
        decrementCounter(state) {
            state.counter--;
        },
        setValue(state, payload) {
            state.value = payload;
        }
    },
    actions: {
        increase({ commit }) {
            commit("incrementCounter");
        },
        decrease({ commit }) {
            commit("decrementCounter");
        },
        increaseAsync({ commit }) {
            setTimeout(() => {
                commit("incrementCounter");
            }, 2000);
        },
        decreaseAsync({ commit }) {
            setTimeout(() => {
                commit("decrementCounter");
            }, 2000);
        },
        setValueData({ commit }, payload) {
            commit("setValue", payload);
        }
    }
});