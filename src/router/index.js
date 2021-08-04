import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'auth',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Reg.vue')
  },
  {
    path: '/password_reset',
    name: 'password_reset',
    meta: { layout: 'main-layout' },
    component: () => import('../views/PasswordReset.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
