<template>
  <form @submit.prevent="subscribe" class="newsletter-form">
    <div class="search-bar">
      <input 
        type="email" 
        v-model="email" 
        placeholder="Your email address" 
        required
      >
    </div>
    <button 
      type="submit" 
      class="subscribe-btn"
      v-motion :initial="{ backgroundColor: 'var(--primary)' }" :hover="{ backgroundColor: 'var(--primary-dark)' }"
    >
      Subscribe
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const subscribe = () => {
  // Handle subscription logic here
  alert(`Thank you for subscribing with ${email.value}!`)
  email.value = ''
}
</script>

<style scoped>
.newsletter-form {
  margin-top: 1rem;
}

.search-bar {
  position: relative;
}

.search-bar input {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  font-size: 0.95rem;
  transition: var(--transition);
}

.search-bar input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(42, 157, 143, 0.2);
}

.subscribe-btn {
  width: 100%;
  margin-top: 1rem;
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.subscribe-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(42, 157, 143, 0.3);
}
</style>