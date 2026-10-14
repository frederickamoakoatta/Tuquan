import { Reveal } from '../motion/reveals'
import { TequanMark } from '../ui/TequanMark'

const links = [
  { label: 'Support', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'DMCA', href: '#' },
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

        <a
          href="#"
          className="flex size-9 items-center justify-center rounded-full bg-neutral-800 text-xs font-bold text-white"
          aria-label="Social"
        >
          in
        </a>
      </div>
    </Reveal>
  )
}
