import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

export const viewportOnce = { once: true, amount: 0.25 as const }

const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 1.05, ease } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 1.05, ease } },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: { duration: 1.05, ease } },
}

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease } },
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.14 },
  },
}

type RevealProps = {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  as?: 'div' | 'section' | 'footer' | 'article' | 'p' | 'h2' | 'ul' | 'ol' | 'li'
}

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion()
  const Comp = motion[as]

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Comp>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul' | 'ol'
  delayChildren?: number
  stagger?: number
}

export function Stagger({
  children,
  className,
  as = 'div',
  delayChildren = 0.14,
  stagger = 0.18,
}: StaggerProps) {
  const reduce = useReducedMotion()
  const Comp = motion[as]

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Comp
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </Comp>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
  variants?: Variants
  as?: 'div' | 'li' | 'p' | 'h2' | 'h3' | 'article' | 'a' | 'span'
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
  as = 'div',
}: StaggerItemProps) {
  const Comp = motion[as]
  return (
    <Comp className={className} variants={variants}>
      {children}
    </Comp>
  )
}
