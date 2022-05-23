const state = {
    counter: 0
};

const getters = {
    getCounterCarpimBes(state) {
        return state.counter * 5;
    },
    getStringCounter(state) {
        return state.counter + " .kez tıklandı";
    }
};

const mutations = {
    incrementCounter(state) {
        state.counter++;
    },
    decrementCounter(state) {
        state.counter--;
    }
};

const actions = {
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
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};