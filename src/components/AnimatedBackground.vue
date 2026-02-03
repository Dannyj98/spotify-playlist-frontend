<template>
  <div ref="containerRef" class="animated-background" @mousemove="handleMouseMove">
    <div class="wave wave-1"></div>
    <div class="wave wave-2"></div>
    <div class="wave wave-3"></div>
    <div class="wave wave-4"></div>
    <div class="wave wave-5"></div>
    <div class="wave wave-6"></div>
    <div class="wave wave-7"></div>
    <div class="wave wave-8"></div>
    <div class="wave wave-9"></div>
    <div class="wave wave-10"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const containerRef = ref<HTMLElement | null>(null)

function handleMouseMove(event: MouseEvent) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const y = (event.clientY - rect.top) / rect.height
  containerRef.value.style.setProperty('--mouse-y', `${y}`)
}
</script>

<style scoped>
.animated-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #1a0a00 0%, var(--color-neutral-900) 100%);
  --mouse-y: 0.5;
}

.wave {
  position: absolute;
  left: -50%;
  width: 200%;
  height: 120%;
  filter: blur(20px);
  opacity: 0.75;
  will-change: transform;
}

.wave-1 {
  background: linear-gradient(180deg, transparent 0%, var(--color-gradient-1) 8%, var(--color-gradient-1) 12%, transparent 20%);
  top: -70%;
  animation: wave-right 6s ease-in-out infinite;
  --skew: -12deg;
}

.wave-2 {
  background: linear-gradient(180deg, transparent 0%, var(--color-gradient-1) 8%, var(--color-gradient-2) 12%, transparent 20%);
  top: -55%;
  animation: wave-left 5s ease-in-out infinite;
  animation-delay: -1s;
  --skew: 8deg;
}

.wave-3 {
  background: linear-gradient(180deg, transparent 0%, var(--color-gradient-2) 8%, var(--color-gradient-2) 12%, transparent 20%);
  top: -40%;
  animation: wave-right 7s ease-in-out infinite;
  animation-delay: -2s;
  --skew: -6deg;
}

.wave-4 {
  background: linear-gradient(180deg, transparent 0%, var(--color-gradient-2) 8%, var(--color-gradient-3) 12%, transparent 20%);
  top: -25%;
  animation: wave-left 5.5s ease-in-out infinite;
  animation-delay: -0.5s;
  --skew: 10deg;
}

.wave-5 {
  background: linear-gradient(180deg, transparent 0%, var(--color-gradient-3) 8%, var(--color-gradient-3) 12%, transparent 20%);
  top: -10%;
  animation: wave-right 6.5s ease-in-out infinite;
  animation-delay: -3s;
  --skew: -4deg;
}

.wave-6 {
  background: linear-gradient(180deg, transparent 0%, var(--color-gradient-3) 8%, var(--color-gradient-4) 12%, transparent 20%);
  top: 5%;
  animation: wave-left 5s ease-in-out infinite;
  animation-delay: -1.5s;
  --skew: 7deg;
}

.wave-7 {
  background: linear-gradient(180deg, transparent 0%, var(--color-gradient-4) 8%, var(--color-gradient-4) 12%, transparent 20%);
  top: 20%;
  animation: wave-right 6s ease-in-out infinite;
  animation-delay: -2.5s;
  --skew: -9deg;
}

.wave-8 {
  background: linear-gradient(180deg, transparent 0%, var(--color-gradient-4) 8%, var(--color-gradient-1) 12%, transparent 20%);
  top: 35%;
  animation: wave-left 7s ease-in-out infinite;
  animation-delay: -0.8s;
  --skew: 5deg;
}

.wave-9 {
  background: linear-gradient(180deg, transparent 0%, var(--color-gradient-1) 8%, var(--color-gradient-2) 12%, transparent 20%);
  top: 50%;
  animation: wave-right 5.5s ease-in-out infinite;
  animation-delay: -3.5s;
  --skew: -7deg;
}

.wave-10 {
  background: linear-gradient(180deg, transparent 0%, var(--color-gradient-3) 8%, var(--color-gradient-4) 12%, transparent 20%);
  top: 65%;
  animation: wave-left 6s ease-in-out infinite;
  animation-delay: -2s;
  --skew: 11deg;
}

@keyframes wave-right {
  0%, 100% {
    transform: skewY(var(--skew)) translateX(-8%) translateY(0%);
  }
  50% {
    transform: skewY(var(--skew)) translateX(8%) translateY(4%);
  }
}

@keyframes wave-left {
  0%, 100% {
    transform: skewY(var(--skew)) translateX(8%) translateY(2%);
  }
  50% {
    transform: skewY(var(--skew)) translateX(-8%) translateY(-2%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .wave {
    animation: none;
  }
}
</style>
