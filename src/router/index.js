import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'
import TvView from '../views/TvView.vue'
import DetailMovie from '@/views/DetailMovie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      component: MovieView
    },
    {
      path: '/details/:id',
      name: 'detailMovie',
      component: DetailMovie
    },
    {
      path: '/tv',
      name: 'tv',
      component: TvView
    }
  ]
})

export default router
