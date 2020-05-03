import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap';

axios.defaults.withCredentials = true;
router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth){
      console.log('這裡需要驗證');
  }else{
    next();
  }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
