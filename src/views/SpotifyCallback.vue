<template>
  <div class="flex flex-col items-center justify-center space-y-6">
    <div class="animate-spin rounded-full h-16 w-16 border-4 border-neutral-200 border-t-primary-500"></div>
    <div class="text-center space-y-2">
      <h1 class="text-2xl font-semibold text-white">Connecting to Spotify</h1>
      <p class="text-neutral-200">Please wait while we authenticate your account...</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

import router from '@/router'
import Routes from '@/router/routes'

const authCode = ref<string | null>(null)
const stateParam = ref<string | null>(null)

const authStore = useAuthStore()

onMounted(() => {
  // extract the authorization code from the URL
  const urlParams = new URLSearchParams(window.location.search)
  const authorizationCode = urlParams.get('code')
  authCode.value = authorizationCode

  const state = urlParams.get('state')
  stateParam.value = state
  console.log('Authorization Code:', authorizationCode)
  console.log('State:', state)

  if (authorizationCode && state) {
    authStore.submitCode(authorizationCode, state)
    router.push({ name: Routes.MAKER })
  }
})
</script>
