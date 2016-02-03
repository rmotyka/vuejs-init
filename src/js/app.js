import Vue from '../lib/vue/vue.js';
import ebiinput from 'js/basic/ebiinput.js';
import ebidatepicker from 'js/basic/ebidatepicker.js';
import ebigrid from 'js/basic/ebigrid.js';
import { configRouter } from './routes.js'

Vue.use(VueRouter);

Vue.component('ebiinput', ebiinput);
Vue.component('ebidatepicker', ebidatepicker);
Vue.component('ebigrid', ebigrid);

var App = new Vue({}); //Vue.extend({});

var router = new VueRouter();
configRouter(router);

router.start(App, '#app');