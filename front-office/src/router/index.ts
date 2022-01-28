import Code from '@/views/code/code.view.vue'
import Home from '@/views/home/home.view.vue'
import Mail from '@/views/mail/mail.view.vue'
import Project from '@/views/project/project.view.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/email',
    name: 'Email',
    component: Mail
  },
  {
    path: '/code/:index',
    name: 'Code',
    component: Code
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router