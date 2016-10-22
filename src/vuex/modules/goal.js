import {
  GOAL_OBJECT,
} from '../mutation-types';

const mutations = {
  [GOAL_OBJECT](state, data) {
    if (data && typeof data === 'object') {
      state.category = data;
    }
  },
};

const state = {
  category: {
    name: '',
    date: null,
    description: '',
    value: 0,
  },
};

export default {
  state,
  mutations,
};
