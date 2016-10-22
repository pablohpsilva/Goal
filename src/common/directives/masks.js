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
  bind() {
    new Cleave(this.el, date);
  },
};

export const vPhone = {
  bind() {
    new Cleave(this.el, phone);
  },
};

export const vMoney = {
  bind() {
    new Cleave(this.el, money);
  },
};
