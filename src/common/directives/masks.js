import Cleave from 'cleave.js';

const hour = {
  date: true,
  datePattern: ['h', 'mm'],
  delimiter: ':',
};

const date = {
  date: true,
  datePattern: ['m', 'd', 'Y'],
};

const phone = {
  phone: true,
  phoneRegionCode: 'BR',
};

const money = {
// numeral: true,
  delimiters: [',', ',', '.'],
  blocks: [3, 3, 2],
};

/* eslint-disable no-new */
export const vHour = {
  bind() {
    new Cleave(this.el, hour);
  },
};

export const vDate = {
  bind(el) {
    new Cleave(el, date);
  },
};

export const vPhone = {
  bind(el) {
    new Cleave(el, phone);
  },
};

export const vMoney = {
  bind(el) {
    new Cleave(el, money);
  },
};
