<template>
  <div class="space-y-6">
    <div class="relative">
      <input
        v-model="artistName"
        @input="onSearch"
        @focus="showDropdown = true"
        @blur="onBlur"
        type="text"
        placeholder="Search for an artist..."
        class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-colors duration-200"
      />

      <div v-if="isLoading" class="absolute right-3 top-1/2 -translate-y-1/2">
        <div class="animate-spin rounded-full h-5 w-5 border-2 border-neutral-300 border-t-primary-500"></div>
      </div>

      <ul v-if="shouldShowDropdown" class="absolute z-10 w-full mt-2 bg-white rounded-lg border border-neutral-200 shadow-medium max-h-80 overflow-y-auto">
        <ArtistSearchResultDropdownCard
          v-for="artist in searchResults"
          :key="artist.id"
          @mousedown.prevent="selectArtist(artist)"
          v-bind="artist"
        />
      </ul>
    </div>
    <selected-artists />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useArtistStore } from '@/stores/artist'
import type { ArtistItem } from '@/types/spotify'
import { storeToRefs } from 'pinia'
import ArtistSearchResultDropdownCard from './ArtistSearchResultDropdownCard.vue'
import SelectedArtists from './SelectedArtists.vue'

const artistStore = useArtistStore()
const { searchResults, isLoading, isSuccess } = storeToRefs(artistStore)

const showDropdown = ref<boolean>(false)
const artistName = ref<string>('')

const shouldShowDropdown = computed(() => {
  return showDropdown.value && isSuccess.value && searchResults.value.length > 0
})

let debounceTimer: number | undefined

const onSearch = () => {
  clearTimeout(debounceTimer)

  debounceTimer = window.setTimeout(() => artistStore.searchByName(artistName.value), 300)
}

const selectArtist = (artist: ArtistItem) => {
  // artistName.value = artist.name
  console.log('Selected artist:', artist)
  showDropdown.value = false
  artistStore.addSelectedArtist(artist)
}

const onBlur = () => {
  // small delay so click registers
  setTimeout(() => {
    showDropdown.value = false
  }, 150)
}
</script>
