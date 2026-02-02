<template>
  <button
    @click="signInWithSpotify"
    class="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl shadow-soft hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
  >
    Sign in with Spotify
  </button>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const signInWithSpotify = () => {
  authStore.sendUserToSpotifyLogin()
}
</script>
