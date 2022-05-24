import Vue from "vue";
import { router } from "../../router";

const state = {
    products: []
};

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        //return state.products[0];
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
        //state.commit("updateProductList");
    },
    saveProduct({ commit, state, dispatch }, payload) {
        Vue.http
            .post(
                "https://udemy-vuejs-proje-urun-yonetim-default-rtdb.firebaseio.com/products.json",
                payload
            )
            .then(response => {
                //listenin güncellenmesi
                payload.key = response.data.name;
                commit("updateProductList", payload);
                //alış satış bakiye güncellenmesi
                let tradeResult = {
                    purchase: payload.price,
                    sale: 0.0,
                    quantity: payload.quantity
                };
                dispatch("setTradeResult", tradeResult);
                router.replace("/");
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