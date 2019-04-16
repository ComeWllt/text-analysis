import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './plugins/vuetify';
import './plugins/vue-axios';
import './plugins/vue-word-cloud';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
