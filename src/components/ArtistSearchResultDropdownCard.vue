<template>
  <div class="flex items-center gap-3 px-4 py-3 border-b border-neutral-200 last:border-b-0 cursor-pointer hover:bg-neutral-50 transition-colors duration-150">
    <div v-if="props.images && props.images.length > 0 && props.images[0]" class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
      <img :src="props.images[0].url" :alt="props.name" class="w-full h-full object-cover" />
    </div>
    <div v-else class="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
      <span class="text-neutral-600 font-semibold text-lg">{{ getInitials(props.name) }}</span>
    </div>
    <span class="text-neutral-900 font-medium">{{ props.name }}</span>
  </div>
</template>

<script setup lang="ts">
import type { ArtistItem } from '@/types/spotify'

const props = defineProps<ArtistItem>()

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
</script>
