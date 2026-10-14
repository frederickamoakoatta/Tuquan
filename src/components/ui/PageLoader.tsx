import { useEffect, useRef, useState } from 'react'
import { TequanMark } from './TequanMark'

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
    const hold = reduce ? 200 : 2000
    const fade = reduce ? 120 : 500
    const leaveTimer = window.setTimeout(() => setLeaving(true), hold)
    const doneTimer = window.setTimeout(() => onDoneRef.current(), hold + fade)
    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(doneTimer)
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
