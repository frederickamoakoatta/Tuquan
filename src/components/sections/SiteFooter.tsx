import { Reveal } from '../motion/reveals'
import { TequanMark } from '../ui/TequanMark'

const links = [
  // { label: 'Support', href: '#' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  // { label: 'DMCA', href: '#' },
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07Z" />
    </svg>
  )
}

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/tuquan.co', icon: InstagramIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@tuquan.co', icon: TikTokIcon },
]

export function SiteFooter() {
  return (
    <Reveal as="footer" className="bg-rhyme-footer px-6 py-8 sm:px-8 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span className="inline-flex items-center gap-2">
            <TequanMark className="size-9 rounded-lg" />
            <span className="font-title text-xl font-bold">Tuquan</span>
          </span>
          <p className="text-xs text-rhyme-muted md:text-sm">
            © 2026 Tuquan. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-rhyme-muted transition hover:text-rhyme-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-full bg-neutral-800 text-white transition hover:bg-ink"
                aria-label={social.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </div>
    </Reveal>
  )
}
