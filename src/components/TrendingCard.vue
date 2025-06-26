<template>
  <div 
    class="trending-card" 
    v-motion :initial="{ 
      opacity: 0, 
      x: -20 
    }" :visibleOnce="{ 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 800,
        delay: 100 * index
      } 
    }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div 
      class="trending-number"
      v-motion :initial="{ color: 'var(--light-gray)' }" :hover="{ color: 'var(--primary)' }"
    >
      {{ index + 1 }}
    </div>
    <div class="trending-content">
      <h3 class="trending-title">{{ trending.title }}</h3>
      <div class="trending-meta">
        <span>{{ trending.category }}</span>
        <span>{{ trending.views }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  trending: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      title: 'Revolutionary AI Assistant Passes Medical Licensing Exam',
      category: 'Technology',
      views: '15K views'
    })
  },
  index: {
    type: Number,
    default: 0
  }
})

const hover = ref(false)
</script>

<style scoped>
.trending-card {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  cursor: pointer;
}

.trending-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.trending-number {
  font-size: 1.8rem;
  font-weight: 700;
  min-width: 40px;
  transition: var(--transition);
}

.trending-content {
  flex: 1;
}

.trending-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark);
}

.trending-meta {
  display: flex;
  gap: 0.8rem;
  color: var(--gray);
  font-size: 0.85rem;
}
</style>