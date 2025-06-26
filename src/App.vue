<template>
  <div class="app-container">
    <HeaderSection />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterSection />
    <ScrollToTop />
    <ScrollProgress />
    <CustomCursor />
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import ScrollProgress from '@/components/ScrollProgress.vue'
import CustomCursor from '@/components/CustomCursor.vue'

export default {
  components: {
    HeaderSection,
    FooterSection,
    ScrollToTop,
    ScrollProgress,
    CustomCursor
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>