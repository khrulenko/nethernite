import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Paginate from 'vuejs-paginate';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.component('paginate', Paginate);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
