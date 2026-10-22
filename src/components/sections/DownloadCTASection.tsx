import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { fadeRight, Reveal, Stagger, StaggerItem } from '../motion/reveals'
import { AppStoreButtons } from '../ui/AppStoreButtons'

const GAP = 18

const trips = [
  {
    id: 'santorini',
    region: 'Greece',
    title: 'Santorini',
    description: 'Whitewashed cliffs and caldera sunsets — a classic slow Aegean escape.',
    price: 'USD 5,200',
    image: '/images/destinations/feature-santorini.jpg',
  },
  {
    id: 'kyoto',
    region: 'Japan',
    title: 'Kyoto',
    description: 'Matches a slow-travel style — temples, gardens, and quiet evening streets.',
    price: 'USD 6,800',
    image: '/images/destinations/feature-kyoto.jpg',
  },
  {
    id: 'capetown',
    region: 'South Africa',
    title: 'Cape Town',
    description: 'Mountains meet the ocean on the Cape, with days split between city and coast.',
    price: 'USD 7,400',
    image: '/images/destinations/feature-capetown.jpg',
  },
  {
    id: 'bali',
    region: 'Indonesia',
    title: 'Bali',
    description: 'Seven balanced days of rice terraces, temples, and unhurried Ubud evenings.',
    price: 'USD 1,200',
    image: '/images/destinations/tequan-slider-04.jpg',
  },
  {
    id: 'lisbon',
    region: 'Portugal',
    title: 'Lisbon',
    description: 'Belém at sunrise, pastéis in the afternoon, and a Sintra day-trip built in.',
    price: 'USD 800',
    image: '/images/destinations/feature-lisbon.jpg',
  },
  {
    id: 'maldives',
    region: 'Maldives',
    title: 'Maldives',
    description: 'A luxury-paced island stay — overwater stillness and long, quiet mornings.',
    price: 'USD 3,800',
    image: '/images/destinations/feature-maldives.jpg',
  },
]

function visibleCount(width: number) {
  if (width >= 680) return 3
  if (width >= 300) return 2
  return 1
}

export function DownloadCTASection() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const dragging = useRef(false)
  const [width, setWidth] = useState(0)
  const [index, setIndex] = useState(trips.length)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const [drag, setDrag] = useState(0)

  const visible = visibleCount(width)
  const cardWidth = width > 0 ? Math.min((width - GAP * (visible - 1)) / visible, 640) : 0
  const step = cardWidth + GAP
  const slides = [...trips, ...trips, ...trips]

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const measure = () => {
      const next = el.clientWidth
      if (next > 0) setWidth(next)
    }
    measure()
    const raf = window.requestAnimationFrame(measure)
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => {
      window.cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (paused) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const timer = window.setInterval(() => {
      setAnimate(true)
      setIndex((current) => current + 1)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [paused])

  function onTransitionEnd() {
    if (index >= trips.length * 2) {
      setAnimate(false)
      setIndex(trips.length)
    } else if (index < trips.length) {
      setAnimate(false)
      setIndex(index + trips.length)
    }
  }

  function go(direction: -1 | 1) {
    setAnimate(true)
    setIndex((current) => current + direction)
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    dragging.current = true
    startX.current = event.clientX
    setPaused(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return
    setDrag(event.clientX - startX.current)
  }

  function onPointerUp() {
    if (!dragging.current) return
    dragging.current = false
    const threshold = Math.min(80, step * 0.22)
    if (drag > threshold) go(-1)
    else if (drag < -threshold) go(1)
    setDrag(0)
    window.setTimeout(() => setPaused(false), 5000)
  }

  const offset = index * step - drag
  const activeDot = ((index % trips.length) + trips.length) % trips.length

  return (
    <section id="download" className="scroll-mt-24 overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[92rem] items-center gap-10 px-6 py-16 sm:px-8 md:grid-cols-[minmax(15rem,18rem)_minmax(0,1fr)] md:gap-8 md:px-10 md:py-24 lg:grid-cols-[minmax(18rem,26rem)_minmax(0,1fr)] lg:gap-14 lg:px-14">
        <Stagger className="max-w-md">
          <StaggerItem>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Download Tuquan
            </p>
          </StaggerItem>
          <StaggerItem as="h2" className="mt-3 font-title text-4xl font-bold leading-[1.08] text-ink md:text-[3.25rem]">
            Book AI-suggested,
            <br />
            tailored trips
          </StaggerItem>
          <StaggerItem as="p" className="mt-5 max-w-sm text-base leading-7 text-slate-600">
            Download Tuquan now and book itineraries suggested by AI — built around your pace,
            budget, and travel style.
          </StaggerItem>
          <StaggerItem>
            <AppStoreButtons
              variant="badge"
              tone="light"
              className="mt-8 justify-start"
            />
          </StaggerItem>
        </Stagger>

        <Reveal variants={fadeRight} className="min-w-0 overflow-hidden">
        <div
          className="relative min-w-0 rounded-[2rem] bg-[#FBFBFB] px-4 py-6 sm:px-6 sm:py-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            aria-label="Previous destinations"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-sm transition hover:bg-neutral-50 sm:left-3"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next destinations"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-sm transition hover:bg-neutral-50 sm:right-3"
          >
            ›
          </button>

          <div
            ref={viewportRef}
            className="cursor-grab overflow-hidden select-none touch-pan-y active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div
              className="flex"
              style={{
                gap: GAP,
                transform: width ? `translate3d(${-offset}px, 0, 0)` : undefined,
                transition: animate && !dragging.current ? 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {slides.map((trip, slideIndex) => (
                <article
                  key={`${trip.id}-${slideIndex}`}
                  className="relative shrink-0 overflow-hidden rounded-[1.35rem] bg-white"
                  style={{ width: cardWidth || undefined, height: cardWidth ? Math.round(cardWidth * 1.42) : 420 }}
                >
                  <img
                    src={trip.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55" />
                  <p className="absolute left-4 top-4 text-[11px] font-medium text-white/90">
                    {trip.region}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="font-title text-lg font-bold">{trip.title}</h3>
                    <p className="mt-1 line-clamp-2 min-h-[2.5em] text-[12px] leading-snug text-white/85">
                      {trip.description}
                    </p>
                    <p className="mt-2 text-sm font-semibold">{trip.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center">
            <div className="flex gap-1.5">
              {trips.map((trip, dotIndex) => (
                <button
                  key={trip.id}
                  type="button"
                  aria-label={`Show ${trip.title}`}
                  aria-current={dotIndex === activeDot ? 'true' : undefined}
                  onClick={() => {
                    setAnimate(true)
                    setIndex(trips.length + dotIndex)
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    dotIndex === activeDot ? 'w-5 bg-ink' : 'w-1.5 bg-ink/25'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
