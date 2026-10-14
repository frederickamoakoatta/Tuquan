import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { destinations } from '../../data/destinations'
import { Typewriter } from '../motion/Typewriter'
import { AppStoreButtons } from '../ui/AppStoreButtons'
import { HeroPhone, PHONE_HEIGHT } from './HeroPhone'

const PHONE_OVERLAP = Math.round(PHONE_HEIGHT * 0.53)
const TITLE = 'Your Travel Companion'
const EASE = [0.22, 1, 0.36, 1] as const

type Phase = 'idle' | 'slider' | 'type' | 'buttons' | 'phone' | 'live'

type HeroSectionProps = {
  onAndroidClick?: () => void
  ready?: boolean
}

export function HeroSection({ onAndroidClick, ready = false }: HeroSectionProps) {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [phase, setPhase] = useState<Phase>('idle')
  const resumeTimer = useRef<number | null>(null)
  const site = destinations[active]
  const live = phase === 'live'
  const showButtons = phase === 'buttons' || phase === 'phone' || live
  const showPhone = phase === 'phone' || live

  useEffect(() => {
    if (!ready) return
    if (reduce) {
      setPhase('live')
      return
    }
    setPhase('slider')
  }, [ready, reduce])

  useEffect(() => {
    if (phase !== 'slider') return
    const timer = window.setTimeout(() => {
      setPhase((current) => (current === 'slider' ? 'type' : current))
    }, 1400)
    return () => window.clearTimeout(timer)
  }, [phase])

  useEffect(() => {
    if (!live || paused) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % destinations.length)
    }, 4500)
    return () => window.clearInterval(timer)
  }, [live, paused])

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current)
    }
  }, [])

  function select(index: number) {
    setActive(index)
    setPaused(true)
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current)
    resumeTimer.current = window.setTimeout(() => setPaused(false), 8000)
  }

  return (
    <section className="relative bg-[#fff] pb-12 md:pb-16">
      <div className="relative">
        <div className="relative h-svh min-h-[36rem] w-full overflow-hidden">
          {destinations.map((item, index) => (
            <motion.img
              key={item.id}
              src={item.image}
              alt=""
              fetchPriority={index === 0 ? 'high' : 'low'}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              initial={index === 0 && !reduce ? { opacity: 0, scale: 1.12 } : false}
              animate={{
                opacity: ready && index === active ? 1 : 0,
                scale: 1,
              }}
              transition={{
                opacity: { duration: index === 0 && phase === 'slider' ? 1.3 : 0.9 },
                scale: { duration: 1.3, ease: EASE },
              }}
              onAnimationComplete={() => {
                if (index === 0 && phase === 'slider') setPhase('type')
              }}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-black/34" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/55 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 to-transparent" />

          <div className="absolute inset-x-0 top-[30%] z-[1] flex -translate-y-1/2 flex-col items-center gap-6 px-6 sm:top-[32%] lg:top-[40%]">
            <h1 className="max-w-4xl text-center font-title text-[2.75rem] font-black leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_28px_rgb(0_0_0/0.55)] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              <Typewriter
                text={TITLE}
                start={phase === 'type' || showButtons}
                onDone={() => {
                  if (phase === 'type') setPhase('buttons')
                }}
              />
            </h1>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={showButtons ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.7, ease: EASE }}
              onAnimationComplete={() => {
                if (phase === 'buttons') setPhase('phone')
              }}
            >
              <AppStoreButtons variant="badge" onAndroidClick={onAndroidClick} />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="relative z-10 flex justify-center"
          style={{ marginTop: -PHONE_OVERLAP }}
          initial={reduce ? false : { opacity: 0, y: '28%' }}
          animate={showPhone ? { opacity: 1, y: 0 } : { opacity: 0, y: '28%' }}
          transition={{ type: 'spring', stiffness: 48, damping: 20 }}
          onAnimationComplete={() => {
            if (phase === 'phone') setPhase('live')
          }}
        >
          <HeroPhone site={site} sites={destinations} active={active} onChange={select} />
        </motion.div>
      </div>
    </section>
  )
}
