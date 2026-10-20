import { motion, useReducedMotion } from 'motion/react'
import { AppStoreButtons } from '../ui/AppStoreButtons'
import { fadeUp, staggerContainer, viewportOnce } from '../motion/reveals'

type BottomCTASectionProps = {
  onAndroidClick: () => void
}

export function BottomCTASection({ onAndroidClick }: BottomCTASectionProps) {
  const reduce = useReducedMotion()

  return (
    <section className="px-6 py-12 sm:px-8 md:px-10 md:py-16 lg:px-14">
      <motion.div
        className="relative mx-auto max-w-[92rem] overflow-hidden rounded-[2rem]"
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/images/CTA.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/25" />

        <motion.div
          className="relative grid items-center gap-8 px-6 py-14 sm:px-10 md:px-14 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16"
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={viewportOnce}
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80"
            >
              Download Tuquan
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-title text-3xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl"
            >
              Plan less.
              <br />
              Experience more.
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col items-start gap-6 lg:items-end">
            <p className="max-w-md text-base leading-7 text-white/90 lg:text-right">
              Ready to discover those hidden gems? Download Tuquan and turn them into a real
              itinerary today.
            </p>
            <AppStoreButtons
              variant="badge"
              onAndroidClick={onAndroidClick}
              className="lg:justify-end"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
