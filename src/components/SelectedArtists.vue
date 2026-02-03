<template>
  <div class="space-y-4">
    <h2 class="text-lg font-semibold text-white">Selected Artists</h2>
    <div v-if="selectedArtists.length === 0" class="text-center py-8 text-neutral-500">
      No artists selected yet. Search and select artists to begin.
    </div>
    <div v-else class="flex flex-wrap gap-2">
      <selected-artist-pill
        v-for="artist in selectedArtists"
        :key="artist.id"
        v-bind="artist"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArtistStore } from '@/stores/artist'
import { storeToRefs } from 'pinia'
import SelectedArtistPill from './SelectedArtistPill.vue'

const artistStore = useArtistStore()

const { selectedArtists } = storeToRefs(artistStore)
</script>
