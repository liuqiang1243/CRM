// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Message} from 'element-ui'
import ElementUI, { Form } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';
// axios.defaults.headers.common['Authorization'] = {
//   token: 'TWFX_TOKEN'
// };
Vue.prototype.$message = Message
Vue.prototype.$http=axios;
Vue.use(ElementUI);

Vue.config.productionTip = false
router.beforeEach((to, from, next)=>{
  let token = window.sessionStorage.getItem('token')
    if (to.path === "/home") {
               if(token){
                console.log('登录了');
                next();
               }else{
                 console.log('还没登录');
                 next('/login');
               }
          }else{
            next()
          }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
