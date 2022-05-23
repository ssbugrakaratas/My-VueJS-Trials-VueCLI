export const updateTradeResult = (state, payload) => {
    state.purchase += parseFloat(payload.purchase) * parseInt(payload.quantity);
    state.sale += parseFloat(payload.sale) * parseInt(payload.quantity);
    state.balance = parseFloat(state.sale) - parseFloat(state.purchase);
};