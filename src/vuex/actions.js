import * as mutations from './mutation-types';
/* eslint-disable import/prefer-default-export */

/**
 * Category Actions
 */
export const setGoal = ({ dispatch }, data) => dispatch(mutations.GOAL_OBJECT, data);
export const setLoader = ({ commit }, data) => commit(mutations.LOADER_OBJECT, data);
