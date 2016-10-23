export const formatCurrency = (n, currency = '$') => `${currency} ${n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;

export const animateCount = (number, target) => {
  const interval = setInterval(() => {
    if (number >= target) {
      clearInterval(interval);
      return;
    }
    number += 1;
  }, 1);
};
