import Vue from 'vue'
import home from '@/components/home'
import Router from 'vue-router';

Vue.config.productionTip = false
Vue.use(Router)


export default new Router({
  routes:[
    {      path: '/',   name: 'home',  component: home   }
  ]
})


new Vue({
  render: h => h(home),
}).$mount('#app')
