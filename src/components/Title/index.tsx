'use client'

import { memo, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from './title.module.scss'

interface TitleProps {
  children: React.ReactNode
  theme?: 'light' | 'dark'
}

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const Title = memo(function Title({ children, theme = 'dark' }: TitleProps) {
  const titleWrapperRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    if (!titleWrapperRef.current || !lineRef.current || !titleRef.current) return

    const animations: gsap.core.Tween[] = []

    animations.push(
      gsap.fromTo(
        titleWrapperRef.current,
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          overwrite: true,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleWrapperRef.current,
            start: 'bottom bottom',
          },
        }
      )
    )

    animations.push(
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, autoAlpha: 0 },
        {
          scaleX: 1,
          autoAlpha: 1,
          overwrite: true,
          delay: 0.3,
          duration: 0.5,
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'bottom bottom',
          },
        }
      )
    )

    animations.push(
      gsap.fromTo(
        titleRef.current,
        { x: -20, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          overwrite: true,
          delay: 0.4,
          duration: 0.5,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'bottom bottom',
          },
        }
      )
    )

    return () => {
      animations.forEach((animation) => animation.kill())
    }
  }, [])

  return (
    <div
      className={`${styles.titleWrapper} ${
        theme === 'light' ? styles.light : ''
      }`}
    >
      <h4 ref={titleWrapperRef}>
        <span data-testid="line" className={styles.line} ref={lineRef} />
        <span data-testid="titleText" ref={titleRef}>
          {children}
        </span>
      </h4>
    </div>
  )
})
