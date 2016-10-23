import {
  GOAL_OBJECT,
  GOAL_COLLECTION,
} from '../mutation-types';

const mutations = {
  [GOAL_OBJECT](state, data) {
    if (data && typeof data === 'object') {
      state.goal = data;
    }
  },
  [GOAL_COLLECTION](state, data) {
    if (data && typeof data === 'object' && data.length) {
      state.goals = data;
    }
  },
};

const state = {
  goal: {
    dueDate: '',
    description: '',
    icon: '',
    name: '',
    value: 0,
    reservedBalance: 0,
  },
  goals: [],
};

export default {
  state,
  mutations,
};
