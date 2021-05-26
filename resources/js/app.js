require('./bootstrap');
import Vue from 'vue';
require('./vueComponents')


import '@mdi/font/css/materialdesignicons.css'

import Vuex from 'vuex'
Vue.use(Vuex)

import Vuetify from 'vuetify'
Vue.use(Vuetify);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const app = new Vue({
    el: '#app',
    store: store,
    vuetify: new Vuetify({
        theme: { dark: false },
        icons: {
            iconfont: 'mdi', // default - only for display purposes
        },
    })
});
