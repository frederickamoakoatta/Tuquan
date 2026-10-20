import { fadeUp, Reveal, Stagger, StaggerItem } from '../motion/reveals'

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-footer px-6 py-16 sm:px-8 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto grid max-w-[92rem] items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <Reveal className="max-w-xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden>
              <path d="M8 1.4a4.6 4.6 0 0 0-4.6 4.6c0 3.4 4.6 8.6 4.6 8.6s4.6-5.2 4.6-8.6A4.6 4.6 0 0 0 8 1.4Zm0 6.3A1.7 1.7 0 1 1 8 4.3a1.7 1.7 0 0 1 0 3.4Z" />
            </svg>
            Contact
          </p>
          <h2 className="mt-4 font-title text-3xl font-bold leading-[1.12] tracking-tight text-ink md:text-5xl">
            Tell us where
            <br className="hidden sm:block" /> you want to go
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Questions, press, or partnership ideas — send us a note. We read every message.
          </p>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.14} className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_50px_rgb(15_23_42/0.08)] md:p-8">
          <form onSubmit={(event) => event.preventDefault()}>
            <Stagger className="space-y-4" stagger={0.16}>
              <StaggerItem>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />
                </label>
              </StaggerItem>
              <StaggerItem>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">Message</span>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full resize-y rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />
                </label>
              </StaggerItem>
              <StaggerItem>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-4 py-3.5 font-title text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Send message
                </button>
              </StaggerItem>
            </Stagger>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
