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
        return key =>
            state.products.filter(element => {
                return element.key == key;
            });
    }
};

const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    }
};

const actions = {
    initApp({ commit }) {
        Vue.http
            .get(
                "https://udemy-vuejs-proje-urun-yonetim-default-rtdb.firebaseio.com/products.json"
            )
            .then(response => {
                let data = response.data;
                for (let key in data) {
                    data[key].key = key;
                    commit("updateProductList", data[key]);
                }
            });
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
    sellProduct({ state, commit, dispatch }, payload) {
        //pass by reference
        //pass by value...

        let product = state.products.filter(element => {
            return element.key == payload.key;
        });

        if (product) {
            let last_count = product[0].quantity - payload.count;
            Vue.http
                .patch(
                    "https://udemy-vuejs-proje-urun-yonetim-default-rtdb.firebaseio.com/products/" +
                    payload.key +
                    ".json", { quantity: last_count }
                )
                .then(response => {
                    product[0].quantity = last_count;
                    let tradeResult = {
                        purchase: 0.0,
                        sale: product[0].price,
                        quantity: payload.count
                    };
                    dispatch("setTradeResult", tradeResult);
                    router.replace("/");
                });
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};