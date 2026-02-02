<template>
  <div class="space-y-8">
    <div class="text-center space-y-2">
      <h1 class="text-4xl font-bold text-neutral-900">Create Your Playlist</h1>
      <p class="text-lg text-neutral-600">Search and select your favorite artists</p>
    </div>
    <div class="bg-white rounded-xl border border-neutral-200 shadow-soft p-6">
      <artist-search />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArtistSearch from '@/components/ArtistSearch.vue'
</script>
