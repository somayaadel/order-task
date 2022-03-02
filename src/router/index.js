import Vue from 'vue'
import VueRouter from 'vue-router'



import Home from '../views/Home/home.vue'
import preOrder from '../views/pre-orders.vue'




Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,

  }, {
    path: '/pre-orders',
    name: 'preOrder',
    component: preOrder,

  },


  // {
  //   path: "*",
  //   component: notFound
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
