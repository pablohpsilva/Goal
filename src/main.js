// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import { sync } from 'vuex-router-sync';

import App from './App';
import VuexStore from './vuex/store';
import { routes } from './router-config';

import {
    vDate,
    vMoney,
} from './common/directives/masks';

Vue.use(Vuex);
Vue.use(Router);
Vue.use(VueResource);

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.directive('date', vDate);
Vue.directive('money', vMoney);

const store = new Vuex.Store(VuexStore);

const router = new Router({
  routes,
  mode: 'history',
  saveScrollPosition: true,
});

sync(store, router);

/* eslint-disable no-unused-vars */
const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
