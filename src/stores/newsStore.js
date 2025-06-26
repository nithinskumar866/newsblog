import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
  state: () => ({
    featuredArticle: null,
    latestArticles: [],
    trendingArticles: [],
    categories: [],
    allArticles: []
  }),
  actions: {
    async fetchNews() {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      this.featuredArticle = {
        id: 1,
        title: 'Quantum Computing Breakthrough Opens Door to Unprecedented Processing Power',
        excerpt: 'Scientists at Quantum Labs have achieved a major milestone in quantum computing stability, paving the way for commercial applications that could revolutionize industries from pharmaceuticals to finance.',
        content: 'Full content of the quantum computing breakthrough article...',
        category: 'Technology',
        author: 'James Donovan',
        authorInitials: 'JD',
        date: 'June 15, 2023',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80'
      }
      
      this.latestArticles = [
        {
          id: 2,
          title: 'Global Markets Surge as Economic Recovery Exceeds Expectations',
          excerpt: 'Stock markets worldwide reached record highs as economic indicators show stronger than anticipated recovery across major economies.',
          content: 'Full content about global markets surge...',
          category: 'Business',
          date: 'June 14, 2023',
          readTime: '4 min',
          image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80'
        },
        {
          id: 3,
          title: 'New Climate Agreement Reached by 40 Nations at Global Summit',
          excerpt: 'World leaders commit to ambitious carbon reduction targets in landmark agreement that aims to limit global warming to 1.5°C.',
          content: 'Full content about climate agreement...',
          category: 'Environment',
          date: 'June 13, 2023',
          readTime: '6 min',
          image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80'
        },
        {
          id: 4,
          title: 'Next-Generation Electric Vehicles Set to Transform Auto Industry',
          excerpt: 'Major automakers unveil revolutionary EV models with extended range and faster charging capabilities at International Auto Expo.',
          content: 'Full content about electric vehicles...',
          category: 'Technology',
          date: 'June 12, 2023',
          readTime: '5 min',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80'
        }
      ]
      
      this.trendingArticles = [
        {
          id: 5,
          title: 'Revolutionary AI Assistant Passes Medical Licensing Exam',
          category: 'Technology',
          views: '15K views'
        },
        {
          id: 6,
          title: 'Historic Peace Deal Signed After Decades of Conflict',
          category: 'Politics',
          views: '12K views'
        },
        {
          id: 7,
          title: 'Breakthrough in Renewable Energy Storage Technology',
          category: 'Science',
          views: '10K views'
        },
        {
          id: 8,
          title: 'Virtual Reality Art Exhibition Breaks Attendance Records',
          category: 'Culture',
          views: '8K views'
        }
      ]
      
      this.categories = [
        {
          id: 1,
          name: 'World',
          count: '1,245 Articles',
          icon: 'fas fa-globe-europe'
        },
        {
          id: 2,
          name: 'Politics',
          count: '896 Articles',
          icon: 'fas fa-landmark'
        },
        {
          id: 3,
          name: 'Business',
          count: '1,102 Articles',
          icon: 'fas fa-chart-line'
        },
        {
          id: 4,
          name: 'Technology',
          count: '1,543 Articles',
          icon: 'fas fa-microchip'
        },
        {
          id: 5,
          name: 'Health',
          count: '782 Articles',
          icon: 'fas fa-heartbeat'
        },
        {
          id: 6,
          name: 'Culture',
          count: '654 Articles',
          icon: 'fas fa-paint-brush'
        }
      ]
      
      // Combine all articles for search and navigation
      this.allArticles = [
        this.featuredArticle,
        ...this.latestArticles,
        ...this.trendingArticles.map(trending => ({
          ...trending,
          excerpt: '',
          content: `Content for ${trending.title}`,
          date: 'June 2023',
          readTime: '5 min',
          image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80'
        }))
      ]
    },
    
    // Helper methods
    getArticlesByCategory(category) {
      return this.allArticles.filter(article => 
        article.category.toLowerCase() === category.toLowerCase()
      )
    },
    
    getArticleById(id) {
      return this.allArticles.find(article => article.id === parseInt(id))
    },
    
    searchArticles(query) {
      if (!query) return []
      const q = query.toLowerCase()
      return this.allArticles.filter(article => 
        article.title.toLowerCase().includes(q) || 
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q)
      )
    }
  }
})