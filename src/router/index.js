import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SandBoxView from '../views/sandBox/SandBox.vue'
import HeaderView from '../layout/Header.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sandBox',
      component: SandBoxView
    },
    {
      path: '/setup',
      name: 'HeaderView',
      component: HeaderView,
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

export default router
