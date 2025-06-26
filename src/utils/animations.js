import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const initScrollAnimations = () => {
  // Animate article cards on scroll
  gsap.utils.toArray('.article-card').forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    })
  })

  // Parallax effect for featured article
  gsap.to('.featured-image', {
    scrollTrigger: {
      trigger: '.featured-article',
      start: 'top bottom',
      scrub: true
    },
    yPercent: 20,
    ease: 'none'
  })
}

export const hoverEffects = {
  // Card lift effect
  cardHover: {
    onEnter: (el) => gsap.to(el, { 
      y: -10, 
      boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
      duration: 0.3 
    }),
    onLeave: (el) => gsap.to(el, { 
      y: 0, 
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      duration: 0.3 
    })
  },
  // Button pulse effect
  buttonHover: {
    onEnter: (el) => gsap.to(el, {
      scale: 1.05,
      duration: 0.2
    }),
    onLeave: (el) => gsap.to(el, {
      scale: 1,
      duration: 0.2
    })
  }
}