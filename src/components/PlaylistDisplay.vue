<template>
  <div class="space-y-3">
    <h2 class="text-lg font-semibold text-white">Your Playlist</h2>
    <div class="space-y-2 max-h-96 overflow-y-auto pr-1">
      <PlaylistTrackItem
        v-for="track in tracks"
        :key="track.id"
        :track="track"
        @remove="playlistStore.removeTrack(track.id)"
      />
    </div>
    <p v-if="tracks.length === 0" class="text-neutral-500 text-center py-4">
      No tracks in playlist
    </p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlaylistStore } from '@/stores/playlist'
import PlaylistTrackItem from './PlaylistTrackItem.vue'

const playlistStore = usePlaylistStore()
const { tracks } = storeToRefs(playlistStore)
</script>
