import {
  SUBGOAL_OBJECT,
  SUBGOAL_COLLECTION,
} from '../mutation-types';

const mutations = {
  [SUBGOAL_OBJECT](state, data) {
    if (data && typeof data === 'object') {
      state.goal = data;
    }
  },
  [SUBGOAL_COLLECTION](state, data) {
    if (data && typeof data === 'object' && data.length) {
      state.goal = data;
    }
  },
};

const state = {
  subgoal: {
    id: -1,
    name: '',
    value: 0,
    reservedBalance: 0,
  },
  subgoals: [],
};

export default {
  state,
  mutations,
};
