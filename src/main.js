import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import "mint-ui/lib/style.css";

import './config/jquery.min'
import instance from 'src/fetch/api.js';
import App from './App.vue';
import Mint from "mint-ui"; //固定路径，类似vuerouter引入ui框架


Vue.use(VueRouter)
Vue.use(Mint)

Vue.prototype.$axios = instance.instance;

const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});