//Coded By Samed Buğra KARATAŞ

export const getTradeResult = state => {
    return {
        purchase: state.purchase,
        sale: state.sale,
        balance: state.balance
    };
};