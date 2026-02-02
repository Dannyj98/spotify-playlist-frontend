import type { ArtistItem, ArtistSearchResultWrapper } from '@/types/spotify'
import { getCookie } from '@/util/getCookie'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useArtistStore = defineStore('artist', () => {
  const selectedArtists = ref<ArtistItem[]>([])
  const searchResults = ref<ArtistItem[]>([])
  const isLoading = ref<boolean>(false)
  const isSuccess = ref<boolean>(false)
  const error = ref<string | null>(null)

  const setSearchResults = (results: ArtistItem[]) => {
    searchResults.value = results
  }

  const clearSearchResults = () => {
    searchResults.value = []
  }

  const searchByName = async (name: string) => {
    clearSearchResults()
    isLoading.value = true
    isSuccess.value = false
    error.value = null

    const params = new URLSearchParams({
      q: name,
    })

    const response = await fetch(`http://localhost:8080/api/artist/search?${params.toString()}`, {
      headers: {
        'Session-Id': getCookie('sessionId') ?? '',
      },
    })

    if (!response.ok) {
      isLoading.value = true
      isSuccess.value = false
      console.error('Artist search failed')
      error.value = 'Artist search failed'
      return
    }

    const data: ArtistSearchResultWrapper = await response.json()
    setSearchResults(data.artists.items)
    console.log('Artist search successful,', searchResults.value)
    isLoading.value = false
    isSuccess.value = true
  }

  const addSelectedArtist = (artist: ArtistItem) => {
    // Implementation for adding selected artist to a list
    selectedArtists.value.push(artist)
  }
  const removeSelectedArtist = (artistId: string) => {
    selectedArtists.value = selectedArtists.value.filter((artist) => artist.id !== artistId)
  }

  return {
    addSelectedArtist,
    selectedArtists,
    searchResults,
    isLoading,
    isSuccess,
    error,
    searchByName,
    clearSearchResults,
    removeSelectedArtist,
  }
})
