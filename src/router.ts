import Vue from 'vue'
import Router from 'vue-router'

import CustomerList from '@/modules/customers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CustomerList',
      component: CustomerList
    }
  ]
})