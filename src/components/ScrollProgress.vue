<template>
  <div v-if="isMounted" class="scroll-progress" ref="progress"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const progress = ref(null)
const isMounted = ref(false)
let animation = null

onMounted(() => {
  isMounted.value = true
  gsap.registerPlugin(ScrollTrigger)
  
  // Wait for next tick to ensure DOM is ready
  setTimeout(() => {
    if (progress.value) {
      animation = gsap.to(progress.value, {
        scaleX: 1,
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5
        },
        transformOrigin: 'left center'
      })
    }
  }, 100)
})

onBeforeUnmount(() => {
  if (animation) {
    animation.scrollTrigger.kill()
    animation.kill()
  }
})
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--primary);
  transform-origin: left center;
  z-index: 1000;
  transform: scaleX(0);
}
</style>