import Login from './spa/Login';
import Home from './spa/Home';
import Landing from './spa/Landing/Landing';
import Dash from './spa/Dash/Dash';
import GeneralNotifications from './spa/GeneralNotifications';
import Goal from './spa/Goal/Goal';
import Notifications from './spa/Goal/Notifications';
import EditGoal from './spa/Goal/Edit';
import NewGoal from './spa/Goal/NewGoal';

import database from './vuex/database';

/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'landing',
        name: 'landing',
        component: Landing,
      },
      {
        path: 'dash',
        name: 'dash',
        component: Dash,
      },
      {
        path: 'new-goal',
        name: 'new-goal',
        component: NewGoal,
      },
      {
        path: 'goal/:id',
        name: 'goal',
        component: Goal,
      },
      {
        path: 'goal/:id/notifications',
        name: 'goal-notifications',
        component: Notifications,
      },
      {
        path: 'goal/:id/edit',
        name: 'goal-edit',
        component: EditGoal,
      },
      {
        path: '/notifications',
        component: GeneralNotifications,
      },
    ],
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const createDatabaseIfNotExists = () => {
  database.getDoc('goals')
    .catch(() => database.persist());
};

export const routesConfig = (to) => {
  if (to.path === '/logout') {
    database.destroyDatabase()
      .then(() => {
        to.path = '/login';
      });
  } else {
    createDatabaseIfNotExists();
  }
};
