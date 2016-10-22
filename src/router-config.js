import Login from './spa/Login';
import Home from './spa/Home';
import Goal from './spa/Goal/Goal';

/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'dash',
        name: 'dash',
        component: Home,
      },
      {
        path: 'goal',
        name: 'goal',
        component: Goal,
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
