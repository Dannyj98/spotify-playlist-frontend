import { defineStore } from 'pinia'
import { computed } from 'vue'
import { getCookie } from '@/util/getCookie'

export const useAuthStore = defineStore('auth', () => {
  const clearCookie = (name: string) => {
    document.cookie = `${name}=; Max-Age=0; path=/`
  }

  const userHasSessionId = computed(() => {
    const session = getCookie('sessionId')
    return session !== null && session !== ''
  })

  const startUserSession = async () => {
    if (userHasSessionId.value) {
      console.log('User already has a session ID')
      const sessionExists = await checkIfSessionExists()
      if (sessionExists) {
        console.log('Session ID is valid')
        return
      } else {
        // Clear cookie if session does not exist
        clearCookie('sessionId')
      }
    }
    const response = await fetch('http://localhost:8080/api/spotify/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      console.error('Failed to start user session')
      return
    }

    const data = await response.json()
    const sessionId = data.sessionId
    document.cookie = `sessionId=${sessionId}; path=/;`
    console.log('User session started successfully,', response)
  }

  const checkIfSessionExists = async () => {
    const sessionId = getCookie('sessionId') as string

    const response = await fetch('http://localhost:8080/api/spotify/check-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Session-Id': sessionId,
      },
    })

    if (!response.ok) {
      console.error('Failed to check session existence')
      return false
    }

    const data = await response.json()
    console.log('Session exists check data:', data)
    return data as boolean
  }

  const sendUserToSpotifyLogin = async () => {
    const cookie = getCookie('sessionId')
    console.log('Current sessionId cookie:', cookie)
    const response = await fetch('http://localhost:8080/api/spotify/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Session-Id': getCookie('sessionId') ?? '',
      },
    })

    if (!response.ok) {
      console.error('Failed to get Spotify auth URL')
      return
    }

    const data = await response.json()
    const authUrl = data.url
    window.location.href = authUrl
  }

  const submitCode = async (code: string, state: string) => {
    const response = await fetch('http://localhost:8080/api/spotify/code', {
      method: 'POST',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Session-Id': getCookie('sessionId') ?? '',
      },
      body: JSON.stringify({ code, state }),
    })

    if (!response.ok) {
      console.error('Failed to submit Spotify code')
      return
    }

    console.log('Spotify code submitted successfully')
  }

  return { sendUserToSpotifyLogin, startUserSession, submitCode }
})
