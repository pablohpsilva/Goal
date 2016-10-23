import {
  USER_OBJECT,
} from '../mutation-types';

const mutations = {
  [USER_OBJECT](state, data) {
    if (data && typeof data === 'object') {
      state.user = data;
    }
  },
};

const state = {
  user: {
    userId: -1,
    userName: '',
    balance: 0,
    goals: [],
  },
};

export default {
  state,
  mutations,
};
