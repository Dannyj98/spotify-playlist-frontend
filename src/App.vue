<template>
  <AnimatedBackground />
  <div class="relative z-10 min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-2xl">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import AnimatedBackground from '@/components/AnimatedBackground.vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
onMounted(() => {
  console.log('App mounted - starting user session')
  authStore.startUserSession()
})
</script>
