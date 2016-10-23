import {
  LOAGING_STATE,
} from '../mutation-types';

const mutations = {
  [LOAGING_STATE](state, data) {
    if (typeof data === 'boolean') {
      state.loading = data;
    }
  },
};

const state = {
  loading: false,
};

export default {
  state,
  mutations,
};
