type AppStoreButtonsProps = {
  className?: string
  onAndroidClick?: () => void
  compact?: boolean
  variant?: 'filled' | 'badge'
  tone?: 'dark' | 'light'
}

function AppleIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg aria-hidden className={`shrink-0 ${className}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

function PlayIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg aria-hidden className={`shrink-0 ${className}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 3.8v16.4c0 .7.8 1.1 1.4.7l14-8.2c.6-.4.6-1.2 0-1.6l-14-8.2C4.8 2.7 4 3.1 4 3.8z" />
    </svg>
  )
}

export function AppStoreButtons({
  className = '',
  onAndroidClick,
  compact = false,
  variant = 'filled',
  tone = 'dark',
}: AppStoreButtonsProps) {
  if (variant === 'badge') {
    const badge =
      tone === 'light'
        ? 'inline-flex items-center gap-3 rounded-full border-[1.5px] border-ink/20 bg-transparent px-5 py-2.5 text-ink backdrop-blur-0 transition-[border-color,background-color,backdrop-filter,box-shadow] duration-200 hover:border-ink hover:bg-ink/5 hover:backdrop-blur-md hover:shadow-[0_8px_24px_rgb(15_23_42/0.08)]'
        : 'inline-flex items-center gap-3 rounded-full border-[1.5px] border-white/70 bg-transparent px-5 py-2.5 text-white backdrop-blur-0 transition-[border-color,background-color,backdrop-filter,box-shadow] duration-200 hover:border-white hover:bg-white/15 hover:backdrop-blur-md hover:shadow-[0_8px_28px_rgb(255_255_255/0.16)]'
    return (
      <div className={`flex flex-row flex-wrap items-center justify-center gap-3 ${className}`}>
        <a href="#" className={badge}>
          <AppleIcon className="size-7" />
          <span className="text-left leading-none">
            <span className="block text-[10px] font-medium tracking-wide">Download on the</span>
            <span className="mt-0.5 block font-title text-[17px] font-bold tracking-tight">
              App Store
            </span>
          </span>
        </a>
        <button type="button" onClick={onAndroidClick} className={badge}>
          <img
            src="/images/google-play.png"
            alt=""
            className="size-7 shrink-0 object-contain"
          />
          <span className="text-left leading-none">
            <span className="block text-[10px] font-medium tracking-wide">GET IT ON</span>
            <span className="mt-0.5 block font-title text-[17px] font-bold tracking-tight">
              Google Play
            </span>
          </span>
        </button>
      </div>
    )
  }

  return (
    <div
      className={`flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center ${className}`}
    >
      <a
        href="#"
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary font-title font-semibold text-white transition hover:bg-red-700 ${compact ? 'px-4 py-2.5 text-sm' : 'px-5 py-3 text-sm'}`}
      >
        <AppleIcon />
        Download iOS App
      </a>
      <button
        type="button"
        onClick={onAndroidClick}
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary font-title font-semibold text-white transition hover:bg-red-700 ${compact ? 'px-4 py-2.5 text-sm' : 'px-5 py-3 text-sm'}`}
      >
        <PlayIcon />
        Pre-Order Android
      </button>
    </div>
  )
}
