import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: import('@/layouts/AppLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: import('@/views/HomeView.vue'),
        },
        {
          path: '/login',
          name: 'login',
          component: import('@/views/auth/LoginView.vue'),
        },
        {
          path: '/transactions',
          name: 'transactions',
          component: import('@/views/auth/LoginView.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: import('@/views/NotFoundView.vue'),
        },
      ],
    },
  ],
})

export default router
