import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'TrangChu',
    component: () => import('../views/Client/TrangChu.vue')
  },
  {
    path: '/CartView',
    name: 'CartView',
    component: () => import('../views/Client/CartView.vue')
  },
  {
    path: '/DonHang',
    name: 'DonHang',
    component: () => import('../views/Client/DonHang.vue')
  },
  {
    path: '/ListProductSearch/:id',
    name: 'ListProductSearch',
    component: () => import('../views/Client/ListProductSearch.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
