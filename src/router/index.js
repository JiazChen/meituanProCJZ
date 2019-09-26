import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/template/default.vue'
import indexPage from '@/page/index.vue'
import changeCity from '@/page/changecity.vue'
import goodsList from '@/page/goodslist.vue'
import loginPage from '@/page/login.vue'
import registerPage from '@/page/register.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: indexPage
        },
        {
          path: '/changecity',
          name: 'changecity',
          component: changeCity
        },
        {
          path: '/goodslist/:name',
          name: 'goodslist',
          component: goodsList
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/register',
      name: 'register',
      component: registerPage
    }
  ]
})
