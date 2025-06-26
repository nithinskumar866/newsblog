import { ref, onMounted, onUnmounted } from 'vue'

export default function useScrollAnimation() {
  const scrollY = ref(0)
  const scrollDirection = ref('down')
  const lastScrollY = ref(0)
  
  const handleScroll = () => {
    scrollY.value = window.scrollY
    
    if (scrollY.value > lastScrollY.value) {
      scrollDirection.value = 'down'
    } else {
      scrollDirection.value = 'up'
    }
    
    lastScrollY.value = scrollY.value
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  return {
    scrollY,
    scrollDirection
  }
}