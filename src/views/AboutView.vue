<template>
  <div class="about-view">
    <h1>About Global Chronicle</h1>
    <div class="about-content">
      <p>Global Chronicle is a modern news platform delivering trusted news and insightful analysis to millions of readers worldwide since 2005.</p>
      
      <section class="mission-section">
        <h2>Our Mission</h2>
        <p>To provide accurate, unbiased news coverage with a focus on in-depth analysis and global perspectives.</p>
      </section>
      
      <section class="team-section">
        <h2>Our Team</h2>
        <p>Our team consists of award-winning journalists and industry experts from around the world.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-view {
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 2rem;
}

.about-content {
  margin-top: 2rem;
  line-height: 1.6;
}

.mission-section,
.team-section {
  margin-top: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
}
</style>