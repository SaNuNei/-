// import { Navbar, TabItem } from 'mint-ui';
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false;
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,

})
