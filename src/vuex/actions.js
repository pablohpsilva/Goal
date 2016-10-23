import * as mutations from './mutation-types';
/* eslint-disable import/prefer-default-export */

/**
 * Category Actions
 */
export const setUser = ({ commit }, data) => commit(mutations.USER_OBJECT, data);

export const setGoal = ({ commit }, data) => commit(mutations.GOAL_OBJECT, data);

export const setLoader = ({ commit }, data) => commit(mutations.LOAGING_STATE, data);
