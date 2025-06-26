<template>
  <div class="article-view">
    <div class="hero-section">
      <img :src="article.image" :alt="article.title" />
      <div class="hero-content">
        <h1>{{ article.title }}</h1>
        <div class="meta">
          <span>{{ article.author }}</span> • 
          <span>{{ article.date }}</span> • 
          <span>{{ article.readTime }}</span>
        </div>
      </div>
    </div>
    
    <div class="article-content">
      <div class="container">
        <p>{{ article.content }}</p>
        
        <div class="article-actions">
          <button class="action-btn" @click="goBack">
            <i class="fas fa-arrow-left"></i> Back to News
          </button>
          <router-link 
            :to="{ name: 'home' }" 
            class="action-btn home-btn"
          >
            <i class="fas fa-home"></i> Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNewsStore } from '@/stores/newsStore'

const route = useRoute()
const router = useRouter()
const newsStore = useNewsStore()
const article = ref({})

onMounted(() => {
  if (!newsStore.featuredArticle) {
    newsStore.fetchNews().then(() => {
      article.value = newsStore.getArticleById(route.params.id) || newsStore.featuredArticle
    })
  } else {
    article.value = newsStore.getArticleById(route.params.id) || newsStore.featuredArticle
  }
})

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
.article-view {
  min-height: 100vh;
}

.hero-section {
  position: relative;
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
}

.hero-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.hero-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.meta {
  font-size: 1.1rem;
  opacity: 0.9;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.article-content {
  padding: 3rem 1rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.article-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.article-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.action-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: var(--transition);
}

.action-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.home-btn {
  background: var(--secondary);
}

.home-btn:hover {
  background: #1a3655;
}

@media (min-width: 768px) {
  .hero-content {
    padding: 3rem;
  }
  
  .hero-content h1 {
    font-size: 3rem;
  }
}
</style>