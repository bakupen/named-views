import Vue from 'vue'
import VueRouter from 'vue-router'

import SideMenu from '@/components/SideMenu.vue'
import Login from '@/views/Login.vue'
import Dog from '@/views/Dog.vue'
import Cat from '@/views/Cat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { title: 'ログイン', noSidebar: true } 
  },
  {
    path: '/dog',
    name: 'dog',
    components: {
      default: Dog,
      sidebar: SideMenu
    },
    meta: { title: '犬'}
  },
  {
    path: '/cat',
    name: 'cat',
    components: {
      default: Cat,
      sidebar: SideMenu
    },
    meta: { title: '猫'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
