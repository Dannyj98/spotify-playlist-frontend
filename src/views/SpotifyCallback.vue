<template>
  <h1>Spotify Callback</h1>
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
  stateParam.value = urlParams.get('state')
  console.log('Authorization Code:', authorizationCode)
  console.log('State:', state)
  authStore.submitCode(authCode.value, stateParam.value)
  router.push({ name: Routes.MAKER })
})
</script>
