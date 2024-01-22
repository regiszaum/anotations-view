import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnotationsView from '../views/AnotationsView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/anotations',
      name: 'AnotationsView',
      component: AnotationsView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    }
  ]
})

export default router
