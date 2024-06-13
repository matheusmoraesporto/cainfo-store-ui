import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: () => import('@views/ProductView.vue')
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: () => import('@views/PurchaseView.vue')
    }
  ]
})

export default router
