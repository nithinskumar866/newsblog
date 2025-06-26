<template>
  <router-link 
    :to="{ name: 'article', params: { id: article.id } }" 
    class="article-card" 
    v-motion :initial="{ 
      opacity: 0, 
      y: 50, 
      scale: 0.95 
    }" :visibleOnce="{ 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 800,
        delay: 100 * index
      } 
    }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card-image">
      <img 
        :src="article.image" 
        :alt="article.title"
        v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.05 }"
      />
    </div>
    <div class="card-content">
      <span class="card-category">{{ article.category }}</span>
      <h3 class="card-title">{{ article.title }}</h3>
      <p class="card-excerpt">{{ article.excerpt }}</p>
      <div class="card-footer">
        <span class="card-date">{{ article.date }}</span>
        <span class="card-read-time">
          <i class="far fa-clock"></i> {{ article.readTime }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  article: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const hover = ref(false)
</script>

<style scoped>
.article-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.article-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 200px;
  background: linear-gradient(120deg, #e9c46a, #f4a261);
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-category {
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: inline-block;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 0.8rem;
  color: var(--secondary);
  flex: 1;
}

.card-excerpt {
  color: var(--gray);
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
  line-height: 1.6;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.card-date {
  color: var(--gray);
  font-size: 0.85rem;
}

.card-read-time {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--gray);
  font-size: 0.85rem;
}
</style>