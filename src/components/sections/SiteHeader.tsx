import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { TequanMark } from '../ui/TequanMark'

const items = [
  { label: 'Features', href: '/#features' },
  { label: 'Our Story', href: '/#our-story' },
  { label: 'FAQs', href: '/#faqs' },
  { label: 'Contact', href: '/#contact' },
]

type SiteHeaderProps = {
  ready?: boolean
  solid?: boolean
}

export function SiteHeader({ ready = false, solid = false }: SiteHeaderProps) {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const overHero = !solid && !scrolled
  const bar = solid
    ? 'border-b border-black/5 bg-white'
    : scrolled
      ? 'border-b border-black/5 bg-white shadow-sm'
      : 'border-b border-transparent bg-transparent'

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow,border-color] duration-300 ${bar}`}
      initial={reduce ? false : { opacity: 0, y: -18 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-[92rem] items-center justify-between px-6 py-4 sm:px-8 md:px-10 md:py-5 lg:px-14">
        <a href="/#top" className="inline-flex items-center gap-2.5" aria-label="Tuquan home">
          <TequanMark className="size-9 rounded-lg" />
          <span
            className={`font-title text-xl font-bold tracking-tight ${overHero ? 'text-white drop-shadow-md' : 'text-ink'}`}
          >
            Tuquan
          </span>
        </a>

        <nav
          className={`hidden items-center sm:flex ${
            overHero
              ? 'gap-1 rounded-full border border-white/35 bg-white/12 px-2 py-1.5 shadow-[0_10px_32px_rgb(15_23_42/0.16)] backdrop-blur-md'
              : 'gap-8'
          }`}
          aria-label="Primary"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                overHero
                  ? 'rounded-full px-4 py-2 font-title text-[15px] font-medium text-white/90 transition hover:bg-white/15 hover:text-white'
                  : 'font-title text-[15px] font-medium text-ink/80 transition hover:text-primary'
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`inline-flex size-10 items-center justify-center sm:hidden ${
            overHero
              ? 'rounded-full border border-white/35 bg-white/12 text-white shadow-[0_10px_32px_rgb(15_23_42/0.16)] backdrop-blur-md'
              : 'rounded-lg text-ink'
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-0.5 w-full bg-current transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition ${open ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full bg-current transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className={`px-6 py-3 sm:hidden ${
            solid || scrolled
              ? 'border-t border-black/5 bg-white'
              : 'border-t border-white/15 bg-white/12 backdrop-blur-md'
          }`}
          aria-label="Mobile"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-2 py-3 font-title text-base font-medium ${
                solid || scrolled ? 'text-ink hover:bg-black/5' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  )
}
