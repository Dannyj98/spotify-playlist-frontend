import { createRouter, createWebHistory } from 'vue-router'
import SpotifyCallback from '@/views/SpotifyCallback.vue'
import Routes from './routes'
import HomeView from '@/views/HomeView.vue'
import PlaylistMakerView from '@/views/PlaylistMakerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/callback',
      name: Routes.SPOTIFY_CALLBACK,
      component: SpotifyCallback,
    },
    {
      path: '/maker',
      name: Routes.MAKER,
      component: PlaylistMakerView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: Routes.HOME,
      component: HomeView,
    },
  ],
})

export default router
