import Vue from 'vue'

import store    from './state/store'
import {router} from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@/assets/css/font-face.css';
import '@/assets/css/all.min.css';


import '@/assets/vendor/font-awesome-4.7/css/font-awesome.min.css';
import '@/assets/vendor/font-awesome-5/css/fontawesome-all.min.css';

import '@/assets/vendor/mdi-font/css/material-design-iconic-font.min.css';

import '@/assets/css/theme.css';


import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
