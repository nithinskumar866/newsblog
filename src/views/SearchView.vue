<template>
  <div class="search-view">
    <div class="container">
      <h1>Search Results for "{{ query }}"</h1>
      <div v-if="results.length > 0" class="search-results">
        <ArticleCard 
          v-for="(article, index) in results" 
          :key="article.id" 
          :article="article" 
          :index="index" 
        />
      </div>
      <div v-else class="no-results">
        <p>No articles found matching your search.</p>
        <router-link to="/" class="back-home">
          <i class="fas fa-arrow-left"></i> Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ArticleCard from '@/components/ArticleCard.vue'
import { useNewsStore } from '@/stores/newsStore'

const route = useRoute()
const newsStore = useNewsStore()
const query = ref(route.query.query || '')

const results = computed(() => {
  return newsStore.searchArticles(query.value) || []
})
</script>

<style scoped>
.search-view {
  padding: 3rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--secondary);
  text-align: center;
}

.search-results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.no-results {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: var(--gray);
}

.back-home {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
}

.back-home:hover {
  text-decoration: underline;
}
</style>