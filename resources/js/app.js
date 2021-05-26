require('./bootstrap');
import Vue from 'vue';

import Vuex from 'vuex'
Vue.use(Vuex)

import Vuetify from 'vuetify'
Vue.use(Vuetify);
//Main pages
import Welcome from './Views/Welcome.vue';
import EnConstruccion from './Views/EnConstruccion.vue';


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
    components: { Welcome,EnConstruccion },
    vuetify: new Vuetify({
        theme: { dark: false }
    })
});
