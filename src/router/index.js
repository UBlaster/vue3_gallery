import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'
import FavoritesView from '@/views/FavoritesView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView 
  },
  {
    path: '/picture',
    name: 'picture',
    component: FavoritesView
  },
]

const router = createRouter({
  routes, history: createWebHistory(process.env.BASE_URL)
})

export default router
