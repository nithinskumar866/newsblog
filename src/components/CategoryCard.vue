<template>
  <div 
    class="category-card" 
    v-motion :initial="{ 
      opacity: 0, 
      scale: 0.9 
    }" :visibleOnce="{ 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 800,
        delay: 100 * index
      } 
    }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    @click="$router.push(`/category/${category.id}`)"
  >
    <i 
      :class="category.icon + ' category-icon'"
      v-motion :initial="{ color: 'var(--primary)' }" :hover="{ color: 'white' }"
    ></i>
    <h3 class="category-name">{{ category.name }}</h3>
    <span class="article-count">{{ category.count }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  category: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      name: 'World',
      count: '1,245 Articles',
      icon: 'fas fa-globe-europe'
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
.category-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  background: var(--primary);
}

.category-card:hover .category-name,
.category-card:hover .article-count {
  color: white;
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  transition: var(--transition);
}

.category-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 0.5rem;
  transition: var(--transition);
}

.article-count {
  color: var(--gray);
  font-size: 0.9rem;
  transition: var(--transition);
}
</style>