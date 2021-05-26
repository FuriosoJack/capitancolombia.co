import Vue from 'vue';
Vue.component(
  'app',
  require('./components/App.vue').default
);
Vue.component(
  'app-full',
  require('./components/AppFull.vue').default
);
Vue.component(
  'en-construccion',
  require('./Views/EnConstruccion.vue').default
);

Vue.component(
  'login',
  require('./Views/Auth/Login.vue').default
);

Vue.component(
  'register',
  require('./Views/Auth/Register.vue').default
);
