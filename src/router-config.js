import Login from './spa/Login';
import Home from './spa/Home';
import Dash from './spa/Dash/Dash';

import database from './vuex/database';

/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'dash',
        name: 'dash',
        component: Dash,
      },
      {
        path: 'goal',
        name: 'goal',
        component: Home,
        children: [
          {
            path: ':id',
            component: Home,
          },
        ],
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
