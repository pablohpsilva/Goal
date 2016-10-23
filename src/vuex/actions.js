import * as mutations from './mutation-types';
/* eslint-disable import/prefer-default-export */

/**
 * Category Actions
 */
export const setUser = ({ dispatch }, data) => dispatch(mutations.USER_OBJECT, data);

export const setGoal = ({ dispatch }, data) => dispatch(mutations.GOAL_OBJECT, data);
