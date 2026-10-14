import type { Destination } from '../../data/destinations'

export const PHONE_ASPECT = 2100 / 4354
export const PHONE_WIDTH = 300
export const PHONE_HEIGHT = PHONE_WIDTH / PHONE_ASPECT
export const SCREEN_INSET = {
  top: 160 / 4354,
  right: 88 / 2100,
  bottom: 89 / 4354,
  left: 93 / 2100,
}
export const PHOTO_RATIO = 0.52
export const PHONE_PHOTO_HEIGHT = Math.round(
  PHONE_HEIGHT * (1 - SCREEN_INSET.top - SCREEN_INSET.bottom) * PHOTO_RATIO,
)
const STATUS_BAND = {
  top: 162 / 4354,
  height: 126 / 4354,
  left: 190 / 2100,
  right: 175 / 2100,
}

type HeroPhoneProps = {
  site: Destination
  sites: Destination[]
  active: number
  onChange: (index: number) => void
}

function StatusIcons() {
  return (
    <div className="flex items-center gap-0.5 text-white" aria-hidden>
      <svg viewBox="0 0 16 12" className="h-2 w-3" fill="currentColor">
        <rect x="0" y="7" width="2.2" height="5" rx="0.4" />
        <rect x="3.4" y="5" width="2.2" height="7" rx="0.4" />
        <rect x="6.8" y="2.5" width="2.2" height="9.5" rx="0.4" />
        <rect x="10.2" y="0" width="2.2" height="12" rx="0.4" />
      </svg>
      <svg viewBox="0 0 16 12" className="h-2 w-3" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M1 4.5c3.5-3.2 10.5-3.2 14 0" />
        <path d="M3.5 7c2.3-2 6.7-2 9 0" />
        <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
      </svg>
      <span className="ml-0.5 rounded-[2px] bg-white/90 px-0.5 text-[7px] font-semibold leading-none text-neutral-900">
        19
      </span>
    </div>
  )
}

function ExploreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4c2 2.5 3 5.2 3 8s-1 5.5-3 8c-2-2.5-3-5.2-3-8s1-5.5 3-8z" />
      <path d="M4 12h16" />
    </svg>
  )
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 12l18-7-7 18-2-7-9-4z" strokeLinejoin="round" />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19c1.4-3 3.8-4.5 7-4.5S17.6 16 19 19" strokeLinecap="round" />
    </svg>
  )
}

export function HeroPhone({ site, sites, active, onChange }: HeroPhoneProps) {
  return (
    <div
      className="relative w-[280px] shrink-0 sm:w-[300px]"
      style={{ aspectRatio: `${PHONE_ASPECT}` }}
    >
      <div
        className="absolute overflow-hidden"
        style={{
          top: `${SCREEN_INSET.top * 100}%`,
          right: `${SCREEN_INSET.right * 100}%`,
          bottom: `${SCREEN_INSET.bottom * 100}%`,
          left: `${SCREEN_INSET.left * 100}%`,
          borderRadius: '20% / 9%',
        }}
      >
        <div className="flex h-full flex-col">
          <div className="relative shrink-0" style={{ height: `${PHOTO_RATIO * 100}%` }}>
            <div className="absolute inset-x-5 bottom-6 text-white">
              <h3 className="font-title text-[15px] font-bold leading-tight drop-shadow-sm sm:text-base">
                {site.title}
              </h3>
              <p className="mt-1.5 text-[10px] font-medium">{site.days}</p>
              <p className="text-[13px] font-bold">{site.budget}</p>
              <p className="mt-1 max-w-[16rem] text-[8px] leading-snug text-white/85">
                Estimated budget only. Prices may vary depending on season, availability and
                exchange rates.
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {site.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/45 bg-black/25 px-2 py-0.5 text-[8px] backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
              {sites.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show ${item.city}`}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => onChange(index)}
                  className={`h-1.5 rounded-full transition-all ${index === active ? 'w-4 bg-white' : 'w-1.5 bg-white/55'}`}
                />
              ))}
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col bg-[#f6f7f8] px-3.5 pt-3">
            <article className="rounded-2xl bg-white px-3 py-2.5 shadow-sm">
              <h4 className="font-title text-[12px] font-bold text-ink">Trip Summary</h4>
              <p className="mt-1 line-clamp-3 min-h-[3.75em] text-[10px] leading-snug text-neutral-600">
                {site.summary}
              </p>
            </article>

            <article className="mt-2 rounded-2xl bg-white px-3 py-2.5 shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-title text-[12px] font-bold text-ink">Visa Eligibility</h4>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[8px] font-semibold text-emerald-700">
                  {site.visaLabel}
                </span>
              </div>
              <p className="mt-1 line-clamp-2 min-h-[2.5em] text-[10px] leading-snug text-neutral-600">
                {site.visa}
              </p>
              <p className="mt-1 text-[10px] text-neutral-800">• {site.visaNote}</p>
            </article>

            <nav
              className="mt-auto -mx-3.5 flex border-t border-neutral-200 bg-white px-2 pb-4 pt-2.5"
              aria-label="App"
            >
              <button type="button" className="flex flex-1 flex-col items-center gap-0.5 text-primary">
                <ExploreIcon />
                <span className="text-[9px] font-semibold">Explore</span>
              </button>
              <button type="button" className="flex flex-1 flex-col items-center gap-0.5 text-neutral-400">
                <PlaneIcon />
                <span className="text-[9px]">Trips</span>
              </button>
              <button type="button" className="flex flex-1 flex-col items-center gap-0.5 text-neutral-400">
                <ProfileIcon />
                <span className="text-[9px]">Profile</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute z-10 flex items-center justify-between text-[9px] font-semibold text-white"
        style={{
          top: `${STATUS_BAND.top * 100}%`,
          height: `${STATUS_BAND.height * 100}%`,
          left: `${STATUS_BAND.left * 100}%`,
          right: `${STATUS_BAND.right * 100}%`,
        }}
      >
        <span className="leading-none">9:41</span>
        <StatusIcons />
      </div>

      <img
        src="/images/iphone-frame.png"
        alt=""
        className="pointer-events-none absolute inset-0 z-20 h-full w-full select-none"
      />
    </div>
  )
}
