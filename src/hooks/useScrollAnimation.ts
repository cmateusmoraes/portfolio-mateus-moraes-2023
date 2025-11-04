import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export interface AnimationConfig {
  from?: gsap.TweenVars
  to: gsap.TweenVars
  trigger?: string
  start?: string
  scrub?: boolean
  delay?: number
}

export function useScrollAnimation<T extends HTMLElement>(
  config: AnimationConfig
) {
  const elementRef = useRef<T>(null)

  useLayoutEffect(() => {
    if (!elementRef.current) return

    const {
      from = { y: 20, autoAlpha: 0 },
      to,
      trigger,
      start = 'bottom bottom',
      scrub = false,
      delay = 0.3,
    } = config

    const animation = gsap.fromTo(elementRef.current, from, {
      ...to,
      overwrite: true,
      delay,
      scrollTrigger: {
        trigger: trigger || elementRef.current,
        start,
        scrub,
      },
    })

    return () => {
      animation.kill()
    }
  }, [config])

  return elementRef
}

export function useFadeIn<T extends HTMLElement>(delay = 0.3) {
  return useScrollAnimation<T>({
    from: { y: 20, autoAlpha: 0 },
    to: { y: 0, autoAlpha: 1, duration: 1 },
    delay,
  })
}

export function useSlideIn<T extends HTMLElement>(
  direction: 'left' | 'right' | 'top' | 'bottom' = 'bottom',
  delay = 0.3
) {
  const directionMap = {
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
    top: { y: -40, x: 0 },
    bottom: { y: 40, x: 0 },
  }

  return useScrollAnimation<T>({
    from: { ...directionMap[direction], autoAlpha: 0 },
    to: { x: 0, y: 0, autoAlpha: 1, duration: 1 },
    delay,
  })
}
