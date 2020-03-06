import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'aboutMe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/Skill.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('../views/Work.vue')
  }
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
