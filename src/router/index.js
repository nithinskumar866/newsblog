import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ArticleView from '@/views/ArticleView.vue'
import SearchView from '@/views/SearchView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/world',
    name: 'world',
    component: CategoryView,
    props: { category: 'World' }
  },
  {
    path: '/politics',
    name: 'politics',
    component: CategoryView,
    props: { category: 'Politics' }
  },
  {
    path: '/business',
    name: 'business',
    component: CategoryView,
    props: { category: 'Business' }
  },
  {
    path: '/technology',
    name: 'technology',
    component: CategoryView,
    props: { category: 'Technology' }
  },
  {
    path: '/culture',
    name: 'culture',
    component: CategoryView,
    props: { category: 'Culture' }
  },
  {
    path: '/science',
    name: 'science',
    component: CategoryView,
    props: { category: 'Science' }
  },
  {
    path: '/article/:id',
    name: 'article',
    component: ArticleView,
    props: true
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
    props: route => ({ query: route.query.q })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Add creative page transition effect
router.beforeEach((to, from, next) => {
  document.body.classList.add('page-transition')
  setTimeout(() => next(), 300)
})

router.afterEach(() => {
  setTimeout(() => {
    document.body.classList.remove('page-transition')
  }, 300)
})

export default router