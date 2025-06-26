<template>
  <div class="home-view">
    <!-- Loading state -->
    <div v-if="loading" class="loading-section">
      <div class="loading-spinner"></div>
      <p>Loading news...</p>
    </div>

    <!-- Content when loaded -->
    <template v-else>
      <FeaturedArticle />
      
      <section class="categories-section">
        <h2>Browse by Category</h2>
        <div class="categories-grid">
          <CategoryCard 
            v-for="(category, index) in categories" 
            :key="category.id" 
            :category="category" 
            :index="index" 
          />
        </div>
      </section>
      
      <section class="latest-articles">
        <h2>Latest News</h2>
        <div class="articles-grid">
          <ArticleCard 
            v-for="(article, index) in latestArticles" 
            :key="article.id" 
            :article="article" 
            :index="index" 
          />
        </div>
      </section>

      <section class="trending-section">
        <h2>Trending Now</h2>
        <div class="trending-list">
          <TrendingCard 
            v-for="(trending, index) in trendingArticles" 
            :key="trending.id" 
            :trending="trending" 
            :index="index" 
          />
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import FeaturedArticle from '@/components/FeaturedArticle.vue'
import CategoryCard from '@/components/CategoryCard.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import TrendingCard from '@/components/TrendingCard.vue'
import { useNewsStore } from '@/stores/newsStore'

const newsStore = useNewsStore()
const loading = ref(true)

// Computed properties
const categories = computed(() => newsStore.categories)
const latestArticles = computed(() => newsStore.latestArticles)
const trendingArticles = computed(() => newsStore.trendingArticles)

// Fetch news data when component mounts
onMounted(async () => {
  if (!newsStore.featuredArticle) {
    await newsStore.fetchNews()
  }
  loading.value = false
})
</script>

<style scoped>
/* Existing styles */

.loading-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 1rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid var(--light-gray);
  border-top: 5px solid var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>