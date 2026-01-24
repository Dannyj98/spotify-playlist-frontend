<template>
  <button @click="signInWithSpotify">Sign in with Spotify</button>
</template>
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const signInWithSpotify = () => {
  authStore.sendUserToSpotifyLogin()
}
</script>
