import { useEffect, useRef, useState } from 'react'
import { destinations } from '../../data/destinations'
import { TequanMark } from './TequanMark'

const HERO_SLIDES = destinations.map((item) => item.image)

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const img = new Image()
    const finish = () => resolve()
    img.onload = () => {
      if (typeof img.decode === 'function') {
        img.decode().then(finish).catch(finish)
        return
      }
      finish()
    }
    img.onerror = finish
    img.src = src
  })
}

type PageLoaderProps = {
  onDone: () => void
}

export function PageLoader({ onDone }: PageLoaderProps) {
  const [leaving, setLeaving] = useState(false)
  const onDoneRef = useRef(onDone)

  useEffect(() => {
    onDoneRef.current = onDone
  }, [onDone])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const minHold = reduce ? 200 : 900
    const fade = reduce ? 120 : 500
    const maxWait = 12000
    let cancelled = false

    async function run() {
      const started = performance.now()
      await Promise.race([Promise.all(HERO_SLIDES.map(preloadImage)), wait(maxWait)])
      const remaining = minHold - (performance.now() - started)
      if (remaining > 0) await wait(remaining)
      if (cancelled) return
      setLeaving(true)
      await wait(fade)
      if (!cancelled) onDoneRef.current()
    }

    void run()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[80] flex flex-col items-center justify-center bg-primary transition-opacity duration-500 ${leaving ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <TequanMark className="loader-logo size-28 rounded-[1.75rem]" />
      <span className="loader-spinner" aria-hidden />
    </div>
  )
}
