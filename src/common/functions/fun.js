export const formatCurrency = (n, currency) => `${currency} ${n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
