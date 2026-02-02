<template>
  <div class="text-center space-y-8">
    <div class="space-y-4">
      <h1 class="text-5xl font-bold text-neutral-900">
        Spotify Playlist Maker
      </h1>
      <p class="text-xl text-neutral-600">
        Create personalized playlists by selecting your favorite artists
      </p>
    </div>
    <SpotifySignInButton />
  </div>
</template>

<script setup lang="ts">
import SpotifySignInButton from '@/components/SpotifySignInButton.vue'
</script>
