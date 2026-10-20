import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, Reveal, Stagger, StaggerItem, viewportOnce } from '../motion/reveals'

const steps = [
  {
    id: '01',
    label: 'Save',
    title: 'Save spots as you scroll',
    description:
      'Share any Instagram post, TikTok video, or Google Maps link directly to Tuquan. We extract the location automatically.',
    image: '/images/steps/step1.jpg',
    imageAlt: 'Tablet map beside a suitcase and sun hat',
  },
  {
    id: '02',
    label: 'Collect',
    title: 'Build your collection',
    description:
      'Organize spots into lists — Tokyo food spots, Paris museums, Rome must-sees. Your personal travel wishlist, always synced.',
    image: '/images/steps/step2.jpg',
    imageAlt: 'Collection of destination photos from around the world',
  },
  {
    id: '03',
    label: 'Plan',
    title: 'Let Tuquan plan the trip',
    description:
      'Pick a destination, choose your dates, select which lists to include. Tuquan generates an optimized day-by-day itinerary instantly.',
    image: '/images/steps/step3.jpg',
    imageAlt: 'Planning a trip with a phone, map, and passport',
    featured: true,
  },
]

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
      <path
        d="M8.5 12.5 4 8.5 8.5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8.5h9.2c3.2 0 5.8 2.4 5.8 5.4V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function StackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
      <path
        d="M5 8.2 12 5l7 3.2-7 3.3L5 8.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M5 12.2 12 15.5 19 12.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M5 16.2 12 19.5 19 16.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function RouteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
      <circle cx="6.5" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.4 8.6c2.2 3.8 5 5.2 7.2 5.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

const icons = [ShareIcon, StackIcon, RouteIcon]

export function ProcessSection() {
  const reduce = useReducedMotion()

  return (
    <section id="how-it-works" className="scroll-mt-24 bg-footer px-6 py-16 sm:px-8 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto max-w-[92rem]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden>
              <path d="M8 1.4a4.6 4.6 0 0 0-4.6 4.6c0 3.4 4.6 8.6 4.6 8.6s4.6-5.2 4.6-8.6A4.6 4.6 0 0 0 8 1.4Zm0 6.3A1.7 1.7 0 1 1 8 4.3a1.7 1.7 0 0 1 0 3.4Z" />
            </svg>
            How it works
          </p>
          <h2 className="mt-4 font-title text-3xl font-bold leading-[1.12] tracking-tight text-ink md:text-5xl">
            From scroll to suitcase
            <br className="hidden sm:block" /> in minutes
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
            Save a place, gather it into a list, and let Tuquan turn the wishlist into a real
            itinerary — without another weekend lost to tabs.
          </p>
        </Reveal>

        <div className="relative mt-14 md:mt-16">
          <motion.div
            className="pointer-events-none absolute left-[16%] right-[16%] top-[7.25rem] hidden h-px origin-left bg-gradient-to-r from-primary/20 via-secondary/70 to-primary/35 md:block"
            aria-hidden
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.25, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
        <Stagger className="grid gap-8 md:grid-cols-3 md:gap-7 lg:gap-8" as="ol" stagger={0.22}>
          {steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <StaggerItem key={step.id} as="li" className="relative" variants={fadeUp}>
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_50px_rgb(15_23_42/0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgb(15_23_42/0.12)] motion-reduce:hover:translate-y-0 ${
                    step.featured ? 'ring-1 ring-primary/15' : ''
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/10 to-transparent" />
                    <span className="absolute left-5 top-5 font-title text-xs font-bold tracking-[0.22em] text-white/90">
                      {step.label}
                    </span>
                    <span className="absolute bottom-4 right-5 font-title text-4xl font-black leading-none text-white/25">
                      {step.id}
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col px-6 pb-7 pt-8 md:px-7">
                    <span className="absolute -top-6 left-6 flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_10px_24px_rgb(242_16_38/0.28)]">
                      <Icon />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Step {step.id}
                    </p>
                    <h3 className="mt-2 font-title text-xl font-bold tracking-tight text-ink md:text-[1.35rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {step.description}
                    </p>
                    {step.featured && (
                      <p className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary/8 px-3 py-1.5 text-xs font-semibold text-primary">
                        <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                        Itinerary ready
                      </p>
                    )}
                  </div>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
        </div>
      </div>
    </section>
  )
}
