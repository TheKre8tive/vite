import { nextTick, onMounted } from 'vue'
import { gsap } from 'gsap'

export function useSlideIn(el: HTMLElement | string) {
  onMounted(async () => {
    await nextTick(() => {
      gsap.to(el, {
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 100%',
          once: true,
        },
      })
    })
  })
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=useSlideIn.ts
