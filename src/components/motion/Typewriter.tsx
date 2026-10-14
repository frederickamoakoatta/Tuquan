import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'

type TypewriterProps = {
  text: string
  start: boolean
  speed?: number
  className?: string
  onDone?: () => void
}

export function Typewriter({
  text,
  start,
  speed = 68,
  className = '',
  onDone,
}: TypewriterProps) {
  const reduce = useReducedMotion()
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const onDoneRef = useRef(onDone)

  useEffect(() => {
    onDoneRef.current = onDone
  }, [onDone])

  useEffect(() => {
    if (reduce) {
      setCount(text.length)
      setDone(true)
      onDoneRef.current?.()
      return
    }
    if (!start || done) return

    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setCount(i)
      if (i >= text.length) {
        window.clearInterval(id)
        setDone(true)
        onDoneRef.current?.()
      }
    }, speed)
    return () => window.clearInterval(id)
  }, [start, reduce, text, speed, done])

  return (
    <span className={`relative block w-full ${className}`}>
      <span className="invisible" aria-hidden>
        {text}
      </span>
      <span className="absolute inset-0" aria-hidden={!done}>
        {text.slice(0, count)}
        {!done && start && (
          <span className="type-caret ml-[0.04em] inline-block h-[0.82em] w-[0.07em] translate-y-[0.06em] bg-current align-baseline" />
        )}
      </span>
    </span>
  )
}
