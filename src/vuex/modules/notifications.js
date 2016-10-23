import {
  NOTIFICATIONS_OBJECT,
  NOTIFICATIONS_COLLECTION,
  SET_NOTIFICATIONS_BAR_STATUS,
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
  [SET_NOTIFICATIONS_BAR_STATUS](state, status) {
    state.notificationsBarStatus = status;
  },
};

const state = {
  notification: {
    date: '',
    message: '',
  },
  notifications: [],
  notificationsBarStatus: false,
};

export default {
  state,
  mutations,
};
