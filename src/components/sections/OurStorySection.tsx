import {
  MapPin,
  Compass,
  Leaf,
  Sparkles,
  Plane,
} from "lucide-react";
import type { Variants } from "motion/react";
import { fadeRight, fadeScale, Reveal, Stagger, StaggerItem } from "../motion/reveals";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 1.05, delay, ease } },
});

const softCircle: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 0.3, transition: { duration: 1.2, ease } },
};

const features = [
  {
    icon: Compass,
    title: "Personalized",
    subtitle: "itineraries",
  },
  {
    icon: MapPin,
    title: "Real experiences",
    subtitle: "not just places",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    subtitle: "travel",
  },
];

export function OurStorySection() {
  return (
    <section id="our-story" className="scroll-mt-24 relative overflow-hidden bg-[#fcfbf7] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Subtle decorative shapes */}
      <Reveal
        ariaHidden
        variants={softCircle}
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[color-mix(in_oklab,#ecfdf5_40%,#6ee7b7_20%)] opacity-30"
      />
      <Reveal
        ariaHidden
        variants={softCircle}
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[color-mix(in_oklab,#f0fdfa_0%,#5eead4_20%)] opacity-30"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Story content */}
          <div className="relative z-10">
          <Stagger>
            <StaggerItem>
              <div className="mb-7 flex items-center gap-3">
                <MapPin
                  className="h-5 w-5 fill-primary text-white"
                  aria-hidden="true"
                />
                <span className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                  Our Story
                </span>
                <span className="h-px w-12 bg-primary" />
              </div>
            </StaggerItem>

            <StaggerItem
              as="h2"
              className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl xl:text-[3.6rem]"
            >
              Every trip starts with two words, long before it starts with a{" "}
              <span className="relative inline-block text-primary">
                suitcase.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-primary/55"
                />
              </span>
            </StaggerItem>

            <StaggerItem as="p" className="mt-9 max-w-xl text-base leading-7 text-slate-600">
              In Fante, one of Ghana’s many languages, Tuquan
              (“tu kwan”) means “to set off on a journey” or
              “travel.” That first decision to move, to go, to see.
              It’s less about the destination and more about the
              moment you choose to leave the familiar behind.
            </StaggerItem>

            <StaggerItem as="p" className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              The idea came from a simple frustration. Our founder,
              Ghanaian-born and well-travelled, kept noticing the
              same gap wherever she went: planning a trip meant
              piecing together research from multiple sources, with
              different tabs opened, half of them outdated, none of
              them personal. Flights were easy to book. Hotels too.
              But the actual journey — what to do, where to go, what
              a place is really like once you’re standing in it —
              that part was still stuck in group chats and screenshots.
            </StaggerItem>

            <StaggerItem
              as="h3"
              className="mt-8 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl"
            >
              So she built the part that was missing.
            </StaggerItem>

            <StaggerItem as="p" className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              AI-powered itineraries and activities, built around
              who you are, where you are, and how you like to travel.
              Landing somewhere new for a wedding. On a work trip in
              a city you’ve never explored. Or simply rediscovering
              your own hometown with fresh eyes. Because who says
              you can’t be a tourist where you already live?
            </StaggerItem>

            <StaggerItem as="p" className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Wherever you’re starting from, Tuquan plans it —
              quickly, personally, and with an eye toward travel
              that’s sustainable and worth experiencing.
            </StaggerItem>

          </Stagger>

          <Stagger
            className="mt-10 grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-100 pt-7"
            stagger={0.12}
          >
            {features.map(({ icon: Icon, title, subtitle }) => (
              <StaggerItem key={title} className="px-3 first:pl-0 last:pr-0 sm:px-5">
                <Icon
                  className="mb-3 h-7 w-7 text-primary"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <p className="text-[10px] font-bold uppercase leading-5 tracking-[0.12em] text-slate-800 sm:text-xs">
                  {title}
                  <br />
                  {subtitle}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
          </div>

          {/* Visual composition */}
          <div className="relative mx-auto w-full max-w-xl pb-12 pt-8 lg:pb-16 lg:pt-4">
            {/* Decorative green shapes */}
            {/* <div
              aria-hidden="true"
              className="absolute -left-2 top-0 h-24 w-24 rounded-tl-[3rem] rounded-br-[3rem] bg-emerald-200/70 sm:-left-5"
            /> */}

            <Reveal
              variants={rise(0.08)}
              className="relative z-10 aspect-[4/4.5] w-[88%] overflow-hidden rounded-[2rem] shadow-xl"
            >
              <img
                src="/images/destinations/tequan-slider-01.jpg"
                alt="A traveller overlooking a tropical island"
                className="h-full w-full object-cover"
              />
            </Reveal>

            <Reveal
              variants={fadeRight}
              className="absolute right-0 top-12 z-20 flex items-center gap-3 rounded-full border border-white/80 bg-white/95 px-4 py-3 shadow-lg shadow-slate-900/10 sm:-right-4 sm:px-5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50">
                <Sparkles className="h-5 w-5 text-emerald-600" />
              </span>
              <span className="text-xs font-semibold text-slate-800 sm:text-sm">
                Travel, made personal
              </span>
            </Reveal>

            <div className="absolute -bottom-1 right-0 z-20 w-[53%] rotate-3 rounded-2xl border-[5px] border-white bg-white shadow-2xl shadow-slate-900/15 transition-transform duration-500 hover:rotate-0 sm:-right-5 sm:rounded-3xl sm:border-[7px]">
              <Reveal variants={rise(0.22)}>
                <img
                  src="/images/destinations/feature-maldives.jpg"
                  alt="Destination image"
                  className="aspect-[4/4.2] overflow-hidden rounded-xl sm:rounded-2xl"
                />
              </Reveal>
            </div>

            <div className="absolute -right-16 bottom-[38%] z-20 hidden -translate-y-1/2 rotate-6 xl:block">
              <Reveal variants={rise(0.34)}>
                <p className="font-serif text-lg italic leading-snug text-black-400">
                  New places.
                  <br />
                  Real moments.
                  <br />
                  Your way.
                </p>
                <div className="ml-1 mt-2 h-1 w-24 -rotate-6 rounded-full bg-emerald-400" />
                <Plane className="ml-auto mt-4 h-6 w-6 rotate-12 text-emerald-600" />
              </Reveal>
            </div>

            <Reveal
              ariaHidden
              variants={fadeScale}
              className="absolute bottom-10 left-2 z-0 h-16 w-16 rounded-full border border-primary sm:left-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
