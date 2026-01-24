<template>
  <div class="artist-search">
    <h1>Artist search</h1>
    <div class="search-container">
      <input
        v-model="artistName"
        @input="onSearch"
        @focus="showDropdown = true"
        @blur="onBlur"
        type="text"
        placeholder="Search artist…"
        class="search-input"
      />

      <ul v-if="showDropdown && searchResults.length" class="dropdown">
        <ArtistSearchResultDropdownCard
          v-for="artist in searchResults"
          :key="artist.id"
          @mousedown.prevent="selectArtist(artist)"
          v-bind="artist"
        />
      </ul>
    </div>
  </div>
  <div class="selected-artists">
    <h2>Selected Artists</h2>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useArtistStore } from '@/stores/artist'
import type { ArtistItem } from '@/types/spotify'
import { storeToRefs } from 'pinia'
import ArtistSearchResultDropdownCard from './ArtistSearchResultDropdownCard.vue'

const artistStore = useArtistStore()
const { searchResults, isLoading, isSuccess, error } = storeToRefs(artistStore)

const showDropdown = computed(() => {
  return isSuccess.value && searchResults.value.length > 0
})
const artistName = ref<string>('')

let debounceTimer: number | undefined

const onSearch = () => {
  clearTimeout(debounceTimer)

  // if (!artistName.value.trim()) {
  //   results.value = []
  //   return
  // }

  debounceTimer = window.setTimeout(() => artistStore.searchByName(artistName.value), 300)
}

const selectArtist = (artist: ArtistItem) => {
  // artistName.value = artist.name
  console.log('Selected artist:', artist)
  showDropdown.value = false
}

const onBlur = () => {
  // small delay so click registers
  setTimeout(() => {
    showDropdown.value = false
  }, 150)
}
</script>
<style scoped>
.search-container {
  position: relative;
  width: 300px;
}

.search-input {
  width: 100%;
  padding: 8px;
}

.dropdown {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ddd;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
}

.dropdown-item {
  padding: 8px;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #f2f2f2;
}
</style>
