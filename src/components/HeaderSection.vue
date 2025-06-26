<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isSearchExpanded = ref(false)
const searchQuery = ref('')

// Update navLinks to use route names
const navLinks = [
  { name: 'Home', path: { name: 'home' } },
  { name: 'World', path: { name: 'world' } },
  { name: 'Politics', path: { name: 'politics' } },
  { name: 'Business', path: { name: 'business' } },
  { name: 'Technology', path: { name: 'technology' } },
  { name: 'Culture', path: { name: 'culture' } },
  { name: 'Science', path: { name: 'science' } }
]

const toggleSearch = () => {
  isSearchExpanded.value = !isSearchExpanded.value
}

const performSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ 
      name: 'search', 
      query: { q: searchQuery.value } 
    })
    searchQuery.value = ''
    isSearchExpanded.value = false
  }
}

const toggleBookmarks = () => {
  // Placeholder for bookmark functionality
  console.log('Bookmarks clicked')
}

const toggleNotifications = () => {
  // Placeholder for notification functionality
  console.log('Notifications clicked')
}

const toggleUserMenu = () => {
  // Placeholder for user menu functionality
  console.log('User menu clicked')
}
</script>

<template>
  <header class="header" v-motion :initial="{ opacity: 0, y: -20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
    <div class="header-content">
      <router-link to="/" class="logo">
        <i class="fas fa-globe-americas"></i>
        GLOBAL<span>CHRONICLE</span>
      </router-link>
      
      <div class="nav-links">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path.name" 
          :to="link.path" 
          class="nav-link"
          active-class="active"
        >
          {{ link.name }}
        </router-link>
      </div>
      
      <div class="header-actions">
        <div class="search-bar" @click="toggleSearch">
          <i class="fas fa-search"></i>
          <input 
            type="text" 
            placeholder="Search news..." 
            v-model="searchQuery"
            :class="{ expanded: isSearchExpanded }"
            @keyup.enter="performSearch"
          >
        </div>
        
        <div class="user-actions">
          <button class="action-btn" @click="toggleBookmarks">
            <i class="far fa-bookmark"></i>
          </button>
          <button class="action-btn" @click="toggleNotifications">
            <i class="far fa-bell"></i>
            <span class="notification-badge">3</span>
          </button>
          <button class="action-btn" @click="toggleUserMenu">
            <i class="far fa-user"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>


<style scoped>
.header {
  background: linear-gradient(135deg, var(--secondary), #1a3655);
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
}

.logo span {
  color: var(--accent);
}

.logo i {
  color: var(--primary);
}

.nav-links {
  display: flex;
  gap: 1.8rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: var(--transition);
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover, .nav-link.active {
  color: white;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: var(--transition);
}

.nav-link:hover::after, .nav-link.active::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.search-bar {
  position: relative;
  cursor: pointer;
}

.search-bar input {
  padding: 0.6rem 1rem 0.6rem 2.5rem;
  border-radius: 30px;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  width: 220px;
  transition: var(--transition);
}

.search-bar input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.25);
}

.search-bar input.expanded {
  width: 280px;
}

.search-bar i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
}

.user-actions {
  display: flex;
  gap: 1.2rem;
}

.action-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.2rem;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
}

.action-btn:hover {
  color: white;
  transform: translateY(-2px);
}

.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--primary);
  color: white;
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 992px) {
  .header-content {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .nav-links {
    order: 3;
    width: 100%;
    justify-content: center;
    gap: 1rem;
  }
  
  .header-actions {
    margin-left: auto;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    order: 2;
  }
  
  .header-actions {
    order: 3;
    width: 100%;
    justify-content: center;
  }
  
  .search-bar input {
    width: 100%;
  }
  
  .search-bar input.expanded {
    width: 100%;
  }
}
</style>