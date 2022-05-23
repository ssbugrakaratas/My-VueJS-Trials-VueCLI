import Vue from "vue";

export const setTradeResult = ({ state, commit }, tradeResult) => {
    commit("updateTradeResult", tradeResult);
    let tradeData = {
        purchase: state.purchase,
        sale: state.sale
    };
    Vue.http
        .put(
            "https://udemy-vuejs-proje-urun-yonetim-default-rtdb.firebaseio.com/trade-result.json",
            tradeData
        )
        .then(response => {
            console.log(response);
            console.log(state);
        });
};

export const getTradeResult = ({ commit }) => {
    //firebase bağlan data al state güncelle
};