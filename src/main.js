import Vue from 'vue'
import Router from 'vue-router';

import home from '@/components/home'
import Example1 from '@/components/lesson1.vue'

Vue.config.productionTip = false
Vue.use(Router)


export default new Router({
  routes:[
    {path: '/',   name: 'home',  component: home   },
    {path:'/Example1', name:'Lesson1', component:Example1}
  ]
})


new Vue({
  render: h => h(home),
}).$mount('#app')
