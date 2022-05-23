import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter.js";
import * as mutationsJS from "./mutations.js";
import * as getters from "./getters.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    //isimlendirmesi aynı olduğu için direkt kullanılabilir
    getters,
    //isimlendirmesi farklı olduğu için direkt kullanılamaz.
    mutations: mutationsJS,
    actions: {
        setValueData({ commit }, payload) {
            commit("setValue", payload);
        }
    },
    modules: {
        counter
    }
});