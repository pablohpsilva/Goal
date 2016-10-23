import goal from './modules/goal';
import loader from './modules/loader';

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).

export default {
  modules: {
    goal,
    loader,
  },
  strict: true,
};
