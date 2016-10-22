import Hello from './shared-components/Hello';
/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    path: '/a',
    component: Hello,
  },
  {
    path: '/b',
    component: Hello,
  },
];
