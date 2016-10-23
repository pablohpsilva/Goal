import {
  NOTIFICATIONS_OBJECT,
  NOTIFICATIONS_COLLECTION,
} from '../mutation-types';

const mutations = {
  [NOTIFICATIONS_OBJECT](state, data) {
    if (data && typeof data === 'object') {
      state.goal = data;
    }
  },
  [NOTIFICATIONS_COLLECTION](state, data) {
    if (data && typeof data === 'object' && data.length) {
      state.goal = data;
    }
  },
};

const state = {
  notification: {
    date: '',
    message: '',
  },
  notifications: [],
};

export default {
  state,
  mutations,
};
