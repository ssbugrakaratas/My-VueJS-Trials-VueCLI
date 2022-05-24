//Coded By Samed Buğra KARATAŞ

export const updateTradeResult = (state, payload) => {
    if (payload.quantity) {
        state.purchase += parseFloat(payload.purchase) * parseInt(payload.quantity);
        state.sale += parseFloat(payload.sale) * parseInt(payload.quantity);
    } else {
        state.purchase += parseFloat(payload.purchase);
        state.sale += parseFloat(payload.sale);
    }
    state.balance = parseFloat(state.sale) - parseFloat(state.purchase);
};