import Vue from 'vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

import router from './router.js'

import App from './App.vue'

const vuetify = new Vuetify({
  theme: {
      themes: {
          light: {
              primary: '#3f51b5',
              secondary: '#696969',
              accent: '#8c9eff',
              error: '#b71c1c',
          },
      },
  },
})

Vue.use(VueAxios, axios, vuetify, VueRouter);

new Vue({
  App,
}).$mount('#app')