<template>
  <div class="inline-flex items-center gap-2 pl-4 pr-2 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors duration-150">
    <span class="text-sm font-medium text-neutral-900">{{ props.name }}</span>
    <button
      @click="removeArtist"
      aria-label="Remove artist"
      class="w-6 h-6 rounded-full bg-neutral-300 hover:bg-neutral-400 flex items-center justify-center transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
      <span class="text-neutral-700 text-sm font-bold">&times;</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ArtistItem } from '@/types/spotify'
import { useArtistStore } from '@/stores/artist'

const props = defineProps<ArtistItem>()

const artistStore = useArtistStore()

const removeArtist = () => {
  console.log('Removing artist:', props)
  artistStore.removeSelectedArtist(props.id)
}
</script>
