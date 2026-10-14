import { fadeLeft, fadeRight, fadeUp, Reveal, Stagger, StaggerItem } from '../motion/reveals'

const leftPins = [
  {
    title: 'AI trip recommendations',
    text: 'See where Tuquan thinks you should go next — personalized to your style.',
  },
  {
    title: 'Real budgets on every trip',
    text: 'Know the cost before you fall in love with a destination.',
  },
  {
    title: 'Travel-style matching',
    text: 'Filter by cultural, adventurous, nature, and more.',
  },
]

const rightPins = [
  {
    title: 'Recommended for you',
    text: 'A feed of trips tailored to how you actually like to travel.',
  },
  {
    title: 'Browse every destination',
    text: 'Swipe from picks into the full trip catalog in one tap.',
  },
  {
    title: 'Explore, trips, and profile',
    text: 'Save itineraries, track plans, and manage your travel from one app.',
  },
]

type PinProps = {
  title: string
  text: string
  side: 'left' | 'right'
}

function Pin({ title, text, side }: PinProps) {
  const line = <span className="h-px min-w-10 flex-1 bg-primary/70 sm:min-w-14" />
  const dot = (
    <span className="relative size-3 shrink-0">
      <span className="features-pin-pulse absolute inset-0 rounded-full bg-primary/40" />
      <span className="absolute inset-[3px] rounded-full bg-primary" />
    </span>
  )

  return (
    <>
      {side === 'right' && (
        <>
          {dot}
          {line}
        </>
      )}
      <div className="max-w-[16rem]">
        <p className="font-title text-sm font-bold text-ink">{title}</p>
        <p className="mt-1 text-[13px] leading-snug text-muted">{text}</p>
      </div>
      {side === 'left' && (
        <>
          {line}
          {dot}
        </>
      )}
    </>
  )
}

function FeaturesShowcase() {
  return (
    <div className="relative z-10 mx-auto aspect-[1.05] w-full min-w-0 max-w-[44rem] lg:w-[44rem]">
      <div className="features-float features-float-a pointer-events-none absolute -left-[18%] -top-[6%] z-30 w-[125%]">
        <img
          src="/images/trip/iPhone-12.png"
          alt="Tuquan app — recommended trips for your next adventure"
          className="h-auto w-full select-none"
          draggable={false}
        />
      </div>

      <div className="features-float features-float-b absolute right-0 top-[8%] z-10 w-[48%] sm:w-[44%]">
        <img
          src="/images/trip/trip01.png"
          alt="Travel dates — choose your departure and return"
          className="h-auto w-full rounded-2xl select-none drop-shadow-[0_22px_40px_rgb(15_23_42/0.16)]"
          draggable={false}
        />
      </div>

      <div className="features-float features-float-c absolute left-0 bottom-[8%] z-10 w-[36%] sm:w-[42%]">
        <img
          src="/images/trip/trip02.png"
          alt="Travel essentials, tips, safety, and where you’re staying"
          className="h-auto w-full rounded-2xl select-none drop-shadow-[0_22px_40px_rgb(15_23_42/0.16)]"
          draggable={false}
        />
      </div>
    </div>
  )
}

type FeaturesSectionProps = {
  onAndroidClick?: () => void
}

export function FeaturesSection({ onAndroidClick: _onAndroidClick }: FeaturesSectionProps) {
  return (
    <section id="features" className="relative scroll-mt-24 overflow-x-clip bg-[#ffffff]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img
          src="/images/bg-circle.jpg"
          alt=""
          className="h-full w-full object-cover object-center opacity-15"
        />
      </div>
      <div className="relative mx-auto max-w-[92rem] px-6 py-16 sm:px-8 md:px-10 md:py-24 lg:px-14">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            Features
          </p>
          <h2 className="mt-3 font-title text-3xl font-bold leading-tight text-ink md:text-5xl">
            Everything you need to plan
            <br className="hidden sm:block" /> the perfect trip
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,44rem)_minmax(0,1fr)] lg:gap-6">
          <Stagger className="hidden flex-col justify-center gap-10 lg:flex" as="ul" stagger={0.2}>
            {leftPins.map((pin) => (
              <StaggerItem
                key={pin.title}
                as="li"
                variants={fadeLeft}
                className="flex items-center gap-3 text-right"
              >
                <Pin {...pin} side="left" />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal variants={fadeUp}>
            <FeaturesShowcase />
          </Reveal>

          <Stagger className="hidden flex-col justify-center gap-10 lg:flex" as="ul" stagger={0.2}>
            {rightPins.map((pin) => (
              <StaggerItem
                key={pin.title}
                as="li"
                variants={fadeRight}
                className="flex items-center gap-3 text-left"
              >
                <Pin {...pin} side="right" />
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:hidden" as="ul">
            {[...leftPins, ...rightPins].map((pin) => (
              <StaggerItem key={pin.title} as="li" className="flex gap-3">
                <span className="relative mt-1.5 size-2.5 shrink-0">
                  <span className="features-pin-pulse absolute inset-0 rounded-full bg-primary/40" />
                  <span className="absolute inset-[3px] rounded-full bg-primary" />
                </span>
                <div>
                  <p className="font-title text-sm font-bold text-ink">{pin.title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-muted">{pin.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
