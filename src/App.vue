<template>
  <RouterView />
</template>
<script setup lang="ts">
import { onMounted } from 'vue'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
onMounted(() => {
  console.log('App mounted - starting user session')
  authStore.startUserSession()
})
</script>

<style scoped></style>
