import { fadeRight, fadeUp, Reveal, Stagger, StaggerItem } from '../motion/reveals'
import { TequanMark } from '../ui/TequanMark'

const points = [
  'AI itineraries matched to your pace',
  'Real budgets before you fall in love',
  'Trips filtered by how you actually travel',
]

function CheckIcon() {
  return (
    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg viewBox="0 0 16 16" className="size-3" fill="none" aria-hidden>
        <path
          d="M3.5 8.2 6.4 11l6.1-6.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function BalloonMark() {
  return (
    <svg viewBox="0 0 40 56" className="h-14 w-10 text-ink" fill="none" aria-hidden>
      <path
        d="M20 2.5c8.6 0 15.5 7.2 15.5 16.2 0 7.6-5.4 14.6-12.4 17.4L20 38.5l-3.1-2.4C9.9 33.3 4.5 26.3 4.5 18.7 4.5 9.7 11.4 2.5 20 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M12 16c1.6-3 4.4-5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17.4 36.8 20 48.5l2.6-11.7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="15.2" y="48" width="9.6" height="5.4" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function OurStorySection() {
  return (
    <section id="our-story" className="scroll-mt-24 bg-white px-6 py-16 sm:px-8 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto grid max-w-[92rem] items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-20">
        <Stagger className="max-w-xl">
          <StaggerItem>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden>
                <path d="M8 1.4a4.6 4.6 0 0 0-4.6 4.6c0 3.4 4.6 8.6 4.6 8.6s4.6-5.2 4.6-8.6A4.6 4.6 0 0 0 8 1.4Zm0 6.3A1.7 1.7 0 1 1 8 4.3a1.7 1.7 0 0 1 0 3.4Z" />
              </svg>
              Our Story
            </p>
          </StaggerItem>
          <StaggerItem as="h2" className="mt-4 font-title text-3xl font-bold leading-[1.12] tracking-tight text-ink md:text-5xl">
            Built for the trips
            <br className="hidden sm:block" /> you keep saving
          </StaggerItem>
          <StaggerItem as="p" className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Tuquan started with a simple habit: screenshots of places we never got around to
            visiting. We wanted a calmer way to turn those saved spots into real itineraries —
            without another weekend lost to tabs and spreadsheets.
          </StaggerItem>

          <StaggerItem className="mt-8 flex items-center gap-3">
            <TequanMark className="size-11 rounded-full" alt="" />
            <div>
              <p className="font-title text-sm font-bold text-ink">Trusted by curious travelers</p>
              <p className="text-sm text-muted">AI-guided trips, without the planning spiral.</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <ul className="mt-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-medium text-ink md:text-[15px]">
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <a
              href="#download"
              className="mt-9 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-title text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Explore more
            </a>
          </StaggerItem>
        </Stagger>

        <div className="relative mx-auto aspect-[1.18] w-full max-w-xl lg:max-w-none">
          <Reveal className="absolute left-0 top-0 w-[70%]" variants={fadeUp}>
            <img
              src="/images/destinations/tequan-slider-01.jpg"
              alt="Traveler overlooking a tropical bay"
              className="w-full rounded-[2rem] object-cover shadow-[0_22px_50px_rgb(15_23_42/0.14)]"
              style={{ aspectRatio: '5 / 4' }}
            />
          </Reveal>
          <Reveal className="absolute bottom-0 right-0 z-10 w-[52%]" variants={fadeRight} delay={0.22}>
            <figure>
              <img
                src="/images/destinations/feature-maldives.jpg"
                alt="Overwater stay in the Maldives"
                className="w-full rounded-[2rem] object-cover shadow-[0_22px_50px_rgb(15_23_42/0.16)]"
                style={{ aspectRatio: '5 / 4' }}
              />
              <figcaption className="mt-4 flex items-center gap-2.5 font-title text-sm font-semibold text-ink">
                <span className="size-2.5 rounded-full bg-primary" aria-hidden />
                Beautiful places
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="absolute right-[2%] top-[-2%] z-20" delay={0.4}>
            <BalloonMark />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
