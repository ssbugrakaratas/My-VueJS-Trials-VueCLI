const state = {
    products: []
};

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        return state.products[0];
    }
};

const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    }
};

const actions = {
    initApp({ commit }) {
        //vue resource islemleri
        state.commit("updateProductList");
    },
    saveProduct({ commit }, payload) {
        //vue resource islemleri
    },
    sellProduct({ commit }, payload) {
        //vue resource islemleri
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};