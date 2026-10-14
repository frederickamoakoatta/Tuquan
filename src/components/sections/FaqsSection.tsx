import { Reveal, Stagger, StaggerItem } from '../motion/reveals'

const faqs = [
  {
    q: 'What is Tuquan?',
    a: 'Tuquan is an AI-powered travel planning platform that helps users discover destinations, generate personalized itineraries, and organize trips around their goals, budget, and travel style.',
  },
  {
    q: 'Is Tuquan free to use?',
    a: 'Tuquan offers core trip discovery and itinerary features, with additional premium experiences planned for future releases.',
  },
  {
    q: 'How are itineraries generated?',
    a: 'Tuquan generates itineraries using your selected destination, travel goals, travel pace, budget preferences, and trip duration.',
  },
  {
    q: 'Can I customize my itinerary?',
    a: 'Yes. You can replace activities, remove activities, regenerate itineraries, and adjust your travel pace before scheduling your trip.',
  },
  {
    q: 'Do I need to choose travel dates immediately?',
    a: "No. You can preview sample itineraries before selecting dates and only plan with dates when you're ready.",
  },
  {
    q: 'Can I save trips for later?',
    a: 'Yes. Trips can be saved to your personal Trips section for future planning.',
  },
  {
    q: 'Can I reschedule trips?',
    a: 'Yes. Scheduled trips can later be adjusted or rescheduled within the app.',
  },
  {
    q: 'Does Tuquan provide visa guidance?',
    a: 'Yes. Tuquan provides visa eligibility guidance based on your passport and destination.',
  },
  {
    q: 'Does Tuquan apply for visas?',
    a: 'No. Tuquan currently provides informational visa guidance and reminders only.',
  },
  {
    q: 'Does Tuquan sync with my calendar?',
    a: 'Tuquan supports trip reminders and calendar integration for scheduled trips.',
  },
  {
    q: 'How does Tuquan handle my data?',
    a: 'Tuquan is designed with user privacy in mind and only uses your information to personalize your travel experience.',
  },
]

export function FaqsSection() {
  return (
    <section id="faqs" className="scroll-mt-24 bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">FAQs</h2>
        </Reveal>
        <Stagger className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200" stagger={0.08}>
          {faqs.map((item) => (
            <StaggerItem key={item.q}>
              <details className="group py-5">
                <summary className="cursor-pointer list-none font-title text-lg font-semibold text-ink marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-2xl font-normal text-muted transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{item.a}</p>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
