import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Home2 from '@/views/Home2'
import Home3 from '@/views/Home3'
import ProductDetails from '@/views/productDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/2',
      name: 'Home2',
      component: Home2
    },
    {
      path: '/3',
      name: 'Home3',
      component: Home3
    },
    {
      path: '/product',
      name: 'productDetails',
      component: ProductDetails
    },
  ]
})