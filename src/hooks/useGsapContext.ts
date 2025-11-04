import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function useGsapContext<T extends HTMLElement>() {
  const contextRef = useRef<gsap.Context>()
  const scopeRef = useRef<T>(null)

  useEffect(() => {
    contextRef.current = gsap.context(() => {}, scopeRef)

    return () => {
      contextRef.current?.revert()
    }
  }, [])

  return { context: contextRef.current, scope: scopeRef }
}
