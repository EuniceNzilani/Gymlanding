"use client"

/* eslint-disable react-hooks/set-state-in-effect */

import { ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Mark user as having visited (called once at app level)
export function markAsVisited() {
  try {
    localStorage.setItem('visited', 'true')
  } catch {}
}

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  style?: React.CSSProperties
  id?: string
}

const directionVariants = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  none: { x: 0, y: 0 },
}



export function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',
  className,
  style,
  id,
}: AnimatedSectionProps) {
  const [isBack, setIsBack] = useState(false)

  useEffect(() => {
    markAsVisited()
  }, [])

  useEffect(() => {
    const handlePageShow = (event: any) => {
      if (event.persisted) {
        setIsBack(true)
      }
    }

    const handlePopState = () => {
      setIsBack(true)
    }

    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navEntry?.type === 'back_forward') {
      setIsBack(true)
    }

    window.addEventListener('pageshow', handlePageShow)
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('pageshow', handlePageShow)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const initial = direction === 'none' ? { opacity: 0 } : { opacity: 0, ...directionVariants[direction] }
  const target = { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial={initial}
      animate={isBack ? target : undefined}
      whileInView={isBack ? undefined : target}
      transition={{ duration: isBack ? 0 : 0.5, delay: isBack ? 0 : delay, ease: 'easeOut' }}
      viewport={isBack ? undefined : { once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedItem({ children, delay = 0, direction = 'up' }: Omit<AnimatedSectionProps, 'className' | 'style'>) {
  const [isBack, setIsBack] = useState(false)

  useEffect(() => {
    markAsVisited()
  }, [])

  useEffect(() => {
    const handlePageShow = (event: any) => {
      if (event.persisted) {
        setIsBack(true)
      }
    }

    const handlePopState = () => {
      setIsBack(true)
    }

    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navEntry?.type === 'back_forward') {
      setIsBack(true)
    }

    window.addEventListener('pageshow', handlePageShow)
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('pageshow', handlePageShow)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const initial = direction === 'none' ? { opacity: 0 } : { opacity: 0, ...directionVariants[direction] }
  const target = { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      initial={initial}
      animate={isBack ? target : undefined}
      whileInView={isBack ? undefined : target}
      transition={{ duration: isBack ? 0 : 0.5, delay: isBack ? 0 : delay, ease: 'easeOut' }}
      viewport={isBack ? undefined : { once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  )
}