import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import Vuex from 'vuex';
import store from '../imports/store';
import VueRouter from 'vue-router'


import App from '../imports/ui/App.vue';


Vue.use(Vuex);
Vue.use(VueRouter);

Meteor.startup(() => {
  new Vue({
    el: '#app',
    store,
    ...App,
  });
});