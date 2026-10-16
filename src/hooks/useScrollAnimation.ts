import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface UseScrollAnimationOptions {
  trigger?: string
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
}

export function useScrollAnimation<T extends HTMLElement>(
  animationFn: (element: T) => gsap.core.Tween | gsap.core.Timeline,
  options: UseScrollAnimationOptions = {}
) {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const animation = animationFn(elementRef.current)

    if (options.trigger || options.start) {
      ScrollTrigger.create({
        trigger: options.trigger || elementRef.current,
        start: options.start || 'top bottom',
        end: options.end,
        scrub: options.scrub,
        markers: options.markers,
        animation,
      })
    }

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [animationFn, options])

  return elementRef
}
