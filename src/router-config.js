import Login from './spa/Login';
import Home from './spa/Home';
import Dash from './spa/Dash/Dash';
import Goal from './spa/Goal/Goal';
import Notifications from './spa/Goal/Notifications';
import EditGoal from './spa/Goal/Edit';

import database from './vuex/database';

/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/dash',
    children: [
      {
        path: 'dash',
        name: 'dash',
        component: Dash,
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
