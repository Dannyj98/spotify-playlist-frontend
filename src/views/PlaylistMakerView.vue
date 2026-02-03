<template>
  <div class="space-y-8">
    <div class="text-center space-y-2">
      <h1 class="text-4xl font-bold text-white">Create Your Playlist</h1>
      <p class="text-lg text-neutral-200">Search and select your favorite artists</p>
    </div>
    <div
      class="bg-white rounded-xl border border-neutral-200 shadow-soft p-6 transition-all duration-300"
      :class="isGenerated ? 'max-w-4xl mx-auto' : 'max-w-2xl mx-auto'"
    >
      <div
        class="transition-all duration-300"
        :class="isGenerated ? 'flex items-start gap-4' : ''"
      >
        <div :class="isGenerated ? 'flex-1' : ''">
          <artist-search />
        </div>
        <button
          v-if="isGenerated"
          @click="playlistStore.generatePlaylist()"
          :disabled="selectedArtists.length === 0"
          class="whitespace-nowrap px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 disabled:bg-neutral-300 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Generate Playlist
        </button>
      </div>

      <div v-if="!isGenerated" class="mt-6">
        <button
          @click="playlistStore.generatePlaylist()"
          :disabled="selectedArtists.length === 0"
          class="w-full px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 disabled:bg-neutral-300 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Generate Playlist
        </button>
      </div>

      <div
        v-if="isGenerated"
        class="mt-6 pt-6 border-t border-neutral-200"
      >
        <playlist-display />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArtistSearch from '@/components/ArtistSearch.vue'
import PlaylistDisplay from '@/components/PlaylistDisplay.vue'
import { useArtistStore } from '@/stores/artist'
import { usePlaylistStore } from '@/stores/playlist'
import { storeToRefs } from 'pinia'

const artistStore = useArtistStore()
const playlistStore = usePlaylistStore()

const { selectedArtists } = storeToRefs(artistStore)
const { isGenerated } = storeToRefs(playlistStore)
</script>
