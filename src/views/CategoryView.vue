<template>
  <div class="category-view">
    <div class="container">
      <h1 class="category-title">{{ category }} News</h1>
      <div v-if="articles.length > 0" class="articles-grid">
        <ArticleCard 
          v-for="(article, index) in articles" 
          :key="article.id" 
          :article="article" 
          :index="index" 
        />
      </div>
      <div v-else class="no-articles">
        <p>No articles found in this category.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ArticleCard from '@/components/ArticleCard.vue'
import { useNewsStore } from '@/stores/newsStore'

const route = useRoute()
const newsStore = useNewsStore()
const category = ref(route.params.category || route.meta.category)

const articles = computed(() => {
  return newsStore.getArticlesByCategory(category.value) || []
})

onMounted(() => {
  if (!newsStore.featuredArticle) {
    newsStore.fetchNews()
  }
})
</script>

<style scoped>
.category-view {
  padding: 3rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.category-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--secondary);
  position: relative;
  padding-bottom: 1rem;
}

.category-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: var(--primary);
  border-radius: 2px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.no-articles {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: var(--gray);
}

@media (min-width: 768px) {
  .category-view {
    padding: 4rem 2rem;
  }
}
</style>