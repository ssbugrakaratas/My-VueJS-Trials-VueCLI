import Vue from "vue";

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
        Vue.http
            .post(
                "https://udemy-vuejs-proje-urun-yonetim-default-rtdb.firebaseio.com/products.json",
                payload
            )
            .then(response => {
                console.log(response);
            });
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