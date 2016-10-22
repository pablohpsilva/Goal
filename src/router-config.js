import Login from './spa/Login';
import Home from './spa/Home';

import database from './vuex/database';

/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/goal',
    children: [
      {
        path: 'dash',
        name: 'dash',
        component: Home,
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
