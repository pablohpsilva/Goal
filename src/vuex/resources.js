const basePath = 'http://tnkajgsyxadfyykqw.stoplight-proxy.io/api';

const loginActions = {
  login: { method: 'POST', url: `${basePath}/login` },
};
export const loginResource = resource => resource(`${basePath}/login`, {}, loginActions);

const goalsActions = {
  getGoals: { method: 'GET', url: `${basePath}/goals/user{/id}` },
  persistGoal: { method: 'POST', url: `${basePath}/goals/user{/id}` },
  updateGoal: { method: 'PUT', url: `${basePath}/goal/{goalid}/user/{userid}` },
  removeGoal: { method: 'DELETE', url: `${basePath}/goal/{goalid}/user/{userid}` },
  finishGoal: { method: 'PUT', url: `${basePath}/goal/{goalid}/user/{userid}/finish` },
};
export const goalsResource = resource => resource(`${basePath}/goals/user{/id}`, {}, goalsActions);

const subGoalsActions = {
  getSubGoals: { method: 'GET', url: `${basePath}/goals/{goalid}/subgoals` },
  persistSubGoals: { method: 'POST', url: `${basePath}/goals/{goalid}/subgoals` },
  updateSubGoals: { method: 'PUT', url: `${basePath}/goals/{goalid}/subgoals/{subgoalid} ` },
  removeSubGoals: { method: 'DELETE', url: `${basePath}/goals/{goalid}/subgoals/{subgoalid} ` },
};
export const subGoalsResource = resource => resource(`${basePath}/goals/{goalid}/subgoals`, {}, subGoalsActions);

const notificationsActions = {
  getGoalNotifications: { method: 'GET', url: `${basePath}/notification/user/{userId}/goal/{goalId}` },
  getGeneralNotifications: { method: 'GET', url: `${basePath}/notification/user/{userId}` },
};
export const notificationsResource = resource => resource(`${basePath}/notification/user/{userId}`, {}, notificationsActions);
