import type { TrackItem } from '@/types/spotify'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlaylistStore = defineStore('playlist', () => {
  const tracks = ref<TrackItem[]>([])
  const isGenerated = ref<boolean>(false)

  const generatePlaylist = () => {
    const mockTracks: TrackItem[] = [
      { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' },
      { id: '2', name: 'Hotel California', artist: 'Eagles', album: 'Hotel California' },
      { id: '3', name: 'Stairway to Heaven', artist: 'Led Zeppelin', album: 'Led Zeppelin IV' },
      { id: '4', name: 'Imagine', artist: 'John Lennon', album: 'Imagine' },
      { id: '5', name: 'Smells Like Teen Spirit', artist: 'Nirvana', album: 'Nevermind' },
      { id: '6', name: 'Billie Jean', artist: 'Michael Jackson', album: 'Thriller' },
      { id: '7', name: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', album: 'Appetite for Destruction' },
      { id: '8', name: 'Like a Rolling Stone', artist: 'Bob Dylan', album: 'Highway 61 Revisited' },
      { id: '9', name: 'Purple Rain', artist: 'Prince', album: 'Purple Rain' },
      { id: '10', name: 'Wonderwall', artist: 'Oasis', album: '(What\'s the Story) Morning Glory?' },
    ]

    tracks.value = mockTracks
    isGenerated.value = true
  }

  const removeTrack = (trackId: string) => {
    tracks.value = tracks.value.filter((track) => track.id !== trackId)
  }

  return {
    tracks,
    isGenerated,
    generatePlaylist,
    removeTrack,
  }
})
