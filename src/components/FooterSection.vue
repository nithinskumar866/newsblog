<template>
  <footer 
    class="footer"
    v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1, transition: { duration: 1000 } }"
  >
    <div class="footer-content">
      <div class="footer-column">
        <h3>Global Chronicle</h3>
        <p>Delivering trusted news and insightful analysis to millions of readers worldwide since 2005.</p>
        <div class="social-links">
          <a href="#" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" v-motion :initial="{ scale: 1 }" :hover="{ scale: 1.1 }">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      
      <div class="footer-column">
        <h3>Categories</h3>
        <ul class="footer-links">
          <li v-for="link in categoryLinks" :key="link.path">
            <router-link :to="link.path">
              <i class="fas fa-chevron-right"></i> {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h3>Company</h3>
        <ul class="footer-links">
          <li v-for="link in companyLinks" :key="link.path">
            <router-link :to="link.path">
              <i class="fas fa-chevron-right"></i> {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h3>Newsletter</h3>
        <p>Subscribe to our daily newsletter for the latest news and insights delivered to your inbox.</p>
        <NewsletterForm />
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2023 Global Chronicle. All rights reserved. | Designed with <i class="fas fa-heart" style="color: var(--primary);"></i> for informed citizens</p>
    </div>
  </footer>
</template>

<script setup>
import NewsletterForm from '@/components/NewsletterForm.vue'

const categoryLinks = [
  { name: 'World News', path: '/world' },
  { name: 'Politics', path: '/politics' },
  { name: 'Business & Finance', path: '/business' },
  { name: 'Technology', path: '/technology' },
  { name: 'Science & Environment', path: '/science' }
]

const companyLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
  { name: 'Advertise', path: '/advertise' },
  { name: 'Privacy Policy', path: '/privacy' }
]
</script>

<style scoped>
.footer {
  background: var(--secondary);
  color: white;
  padding: 3rem 2rem 1.5rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.footer-column h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.7rem;
}

.footer-column h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--primary);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-links a:hover {
  color: white;
  gap: 0.7rem;
}

.footer-links a i {
  font-size: 0.8rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
}

.social-links a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: var(--transition);
}

.social-links a:hover {
  background: var(--primary);
  transform: translateY(-3px);
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>