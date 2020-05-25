import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Home.vue')
  },
  {
    path:'/category',
    name:'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path:'/profile',
    name:'Profile',
    component: () => import('../views/About.vue')
  }, 
  {
    path:'/cart',
    name:'Cart',
    component: () => import('../views/Cart.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
