/* eslint-disable import/prefer-default-export */
export const getGoalObject = state => state.goal.goal;
export const getGoalCollection = state => state.goal.goals;

export const getUserObject = state => state.user.user;

export const getLoader = state => state.loader.loading;

export const getNotificationsBarStatus = state =>
  state.notifications.notificationsBarStatus;
