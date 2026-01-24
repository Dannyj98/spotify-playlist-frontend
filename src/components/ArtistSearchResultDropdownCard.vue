<template>
  <div class="dropdown-card">
    <img class="artist-image" :src="props.images[0].url" width="50" height="50" />
    <span class="artist-name">{{ props.name }}</span>
    <!-- Add more artist details here if needed -->
  </div>
</template>

<script setup lang="ts">
import type { ArtistItem } from '@/types/spotify'

const props = defineProps<ArtistItem>()
</script>
<style scoped>
.dropdown-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.artist-image {
  border-radius: 50%;
  margin-right: 12px;
}
</style>
