<template>
  <section class="featured-section">
    <div 
      class="featured-article" 
      v-motion :initial="{ opacity: 0, y: 50 }" :visibleOnce="{ 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 1000,
          ease: [0.17, 0.67, 0.83, 0.67]
        } 
      }"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <div class="featured-image">
        <img 
          :src="featuredArticle.image" 
          :alt="featuredArticle.title"
          v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.03 }"
        />
      </div>
      <div class="featured-content">
        <span class="category-tag">{{ featuredArticle.category }}</span>
        <h2 class="featured-title">{{ featuredArticle.title }}</h2>
        <p class="featured-excerpt">{{ featuredArticle.excerpt }}</p>
        
        <div class="article-meta">
          <div class="author">
            <div class="author-img">{{ featuredArticle.authorInitials }}</div>
            <span class="author-name">{{ featuredArticle.author }}</span>
          </div>
          <span class="date">{{ featuredArticle.date }} · {{ featuredArticle.readTime }}</span>
        </div>
        
        <router-link 
          :to="{ name: 'article', params: { id: featuredArticle.id } }" 
          class="read-more"
        >
          Read Full Article
          <i class="fas fa-arrow-right" v-motion :initial="{ x: 0 }" :hover="{ x: 5 }"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// Add missing ref import
import { ref, computed } from 'vue'
import { useNewsStore } from '@/stores/newsStore'

const newsStore = useNewsStore()
const hover = ref(false)

const featuredArticle = computed(() => {
  return newsStore.featuredArticle || {
    id: 1,
    title: 'Quantum Computing Breakthrough Opens Door to Unprecedented Processing Power',
    excerpt: 'Scientists at Quantum Labs have achieved a major milestone in quantum computing stability...',
    category: 'Technology',
    author: 'James Donovan',
    authorInitials: 'JD',
    date: 'June 15, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80'
  }
})
</script>

<style scoped>
.featured-section {
  margin-bottom: 3rem;
}

.featured-article {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  margin-bottom: 3rem;
  transition: var(--transition);
  display: flex;
  height: 450px;
}

.featured-article:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.featured-image {
  flex: 1;
  background: linear-gradient(120deg, #2a9d8f, #264653);
  position: relative;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.featured-content {
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.category-tag {
  background: var(--primary);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1.2rem;
}

.featured-title {
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: var(--secondary);
}

.featured-excerpt {
  font-size: 1.1rem;
  color: var(--gray);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.author-img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-weight: 600;
}

.author-name {
  font-weight: 500;
  color: var(--dark);
}

.date {
  color: var(--gray);
  font-size: 0.9rem;
}

.read-more {
  align-self: flex-start;
  background: var(--primary);
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.8rem;
  border-radius: 6px;
  font-weight: 600;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.read-more:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(42, 157, 143, 0.3);
}

@media (max-width: 992px) {
  .featured-article {
    flex-direction: column;
    height: auto;
  }
  
  .featured-image {
    height: 300px;
  }
  
  .featured-title {
    font-size: 1.8rem;
  }
}
</style>