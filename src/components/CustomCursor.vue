<template>
  <div v-if="isMounted" class="custom-cursor" ref="cursor">
    <div class="cursor-inner" ref="inner"></div>
    <div class="cursor-outer" ref="outer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const cursor = ref(null)
const inner = ref(null)
const outer = ref(null)
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
  
  // Wait for next tick to ensure DOM is ready
  setTimeout(() => {
    if (!inner.value || !outer.value) return
    
    const links = document.querySelectorAll('a, button, .interactive')
    
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e
      gsap.to(inner.value, {
        x: x - 4,
        y: y - 4,
        duration: 0.1
      })
      gsap.to(outer.value, {
        x: x - 12,
        y: y - 12,
        duration: 0.3
      })
    }
    
    document.addEventListener('mousemove', moveCursor)
    
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(inner.value, { scale: 1.5, duration: 0.3 })
        gsap.to(outer.value, { scale: 0.5, duration: 0.3 })
      })
      link.addEventListener('mouseleave', () => {
        gsap.to(inner.value, { scale: 1, duration: 0.3 })
        gsap.to(outer.value, { scale: 1, duration: 0.3 })
      })
    })
    
    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', moveCursor)
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => {})
        link.removeEventListener('mouseleave', () => {})
      })
    }
  }, 100)
})
</script>

<style scoped>
/* Existing styles remain the same */
</style>