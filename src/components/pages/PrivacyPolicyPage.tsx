import { useEffect, useState } from 'react'

const EFFECTIVE_DATE = '22 October 2026'

const sections = [
  { id: 'introduction', number: '01', title: 'Introduction' },
  { id: 'data-controller', number: '02', title: 'Data controller' },
  { id: 'data-we-collect', number: '03', title: 'Data we collect' },
  { id: 'how-we-use', number: '04', title: 'How we use your data' },
  { id: 'data-sharing', number: '05', title: 'Data sharing' },
  { id: 'transfers', number: '06', title: 'International transfers' },
  { id: 'retention', number: '07', title: 'Data retention' },
  { id: 'security', number: '08', title: 'Security' },
  { id: 'your-rights', number: '09', title: 'Your rights' },
  { id: 'cookies', number: '10', title: 'Cookies and tracking' },
  { id: 'children', number: '11', title: "Children's privacy" },
  { id: 'changes', number: '12', title: 'Changes to this policy' },
  { id: 'contact', number: '13', title: 'Contact us' },
]

const collected = [
  {
    title: 'Data you provide directly',
    items: [
      'Account registration data: name, email address, and password.',
      'Travel profile data: passport nationality, preferred language, preferred currency, travel interests, trip goals, and pace preferences.',
      'User-generated content: saved itineraries, trip customisations, and calendar export preferences.',
    ],
  },
  {
    title: 'Data collected automatically',
    items: [
      'Device and technical data: IP address, device type, operating system, browser type, and app version.',
      'Usage data: pages viewed, features used, actions taken within the Platform, and session duration.',
      'Location data: approximate location inferred from IP address for currency detection and destination suggestions. We do not access precise GPS location without explicit consent.',
    ],
  },
  {
    title: 'Data from third parties',
    body: 'Where you use third-party calendar integrations (e.g. Google Calendar, Apple Calendar), we receive only the data necessary to perform the export function. We do not retain your calendar credentials.',
  },
]

const uses = [
  {
    title: 'To provide and operate the Platform',
    basis:
      'Legal basis (Ghana DPA): Necessity for performance of our service. Legal basis (GDPR): Article 6(1)(b) — performance of a contract.',
    body: 'This includes creating and managing your account, generating personalised itineraries, displaying visa and budget information, and enabling calendar export.',
  },
  {
    title: 'To improve and develop the Platform',
    basis:
      'Legal basis (Ghana DPA): Legitimate interest. Legal basis (GDPR): Article 6(1)(f) — legitimate interests.',
    body: 'We use aggregated and anonymised usage data to understand how users interact with Tuquan, identify issues, and improve features.',
  },
  {
    title: 'To communicate with you',
    basis:
      'Legal basis (Ghana DPA): Consent or performance of service. Legal basis (GDPR): Article 6(1)(a) or (b).',
    body: 'We may send you service-related notifications (e.g. account confirmations, security alerts) and, with your consent, promotional communications about new features.',
  },
  {
    title: 'To comply with legal obligations',
    basis:
      'Legal basis (Ghana DPA & GDPR): Compliance with law. We may process your data where required by applicable law or court order.',
  },
]

const sharing = [
  'Service providers: cloud hosting, analytics, and email delivery partners who process data on our behalf under data processing agreements.',
  'Visa and travel data providers: to retrieve up-to-date visa and destination information. We share only the minimum data necessary.',
  'Currency API providers: to retrieve live exchange rate data. No personal data is shared for this purpose.',
  'Calendar platforms: solely to fulfil export requests you initiate.',
  'Legal authorities: where required by law, court order, or to protect the rights and safety of Tuquan or its users.',
]

const rights = [
  ['Right of access', 'To receive a copy of the personal data we hold about you.'],
  ['Right to rectification', 'To request correction of inaccurate or incomplete data.'],
  ['Right to erasure', 'To request deletion of your personal data in certain circumstances.'],
  ['Right to restriction', 'To request that we limit how we use your data.'],
  ['Right to data portability', 'To receive your data in a structured, machine-readable format (GDPR users).'],
  ['Right to object', 'To object to processing based on legitimate interests.'],
  [
    'Right to withdraw consent',
    'Where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.',
  ],
]

function SectionHeading({ number, title, id }: { number: string; title: string; id: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 flex items-baseline gap-3 font-title text-2xl font-bold tracking-tight text-ink sm:text-3xl"
    >
      <span className="text-primary">{number}</span>
      <span>{title}</span>
    </h2>
  )
}

export function PrivacyPolicyPage() {
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    const previous = document.title
    document.title = 'Privacy Policy · Tuquan'
    window.scrollTo(0, 0)

    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0.15, 0.4] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => {
      document.title = previous
      observer.disconnect()
    }
  }, [])

  return (
    <main className="bg-white">
      <header className="relative overflow-hidden bg-[#fcfbf7] px-6 pt-32 pb-16 sm:px-8 md:px-10 md:pt-36 md:pb-20 lg:px-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[color-mix(in_oklab,#ecfdf5_80%,#6ee7b7_20%)]"
        />
        <div className="relative mx-auto max-w-[92rem]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">Legal</p>
          <h1 className="mt-4 max-w-3xl font-title text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-600">
            Effective {EFFECTIVE_DATE}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            How Tuquan Ltd collects, uses, and protects personal data on the Tuquan app and website.
          </p>
        </div>
      </header>

      <div className="mx-auto grid min-w-0 max-w-[92rem] gap-12 px-6 py-16 sm:px-8 md:px-10 md:py-20 lg:grid-cols-[15.5rem_minmax(0,1fr)] lg:gap-16 lg:px-14">
        <nav className="min-w-0 lg:sticky lg:top-28 lg:self-start" aria-label="On this page">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">On this page</p>
          <ol className="mt-4 flex min-w-0 gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
            {sections.map((section) => {
              const current = active === section.id
              return (
                <li key={section.id} className="shrink-0">
                  <a
                    href={`#${section.id}`}
                    aria-current={current ? 'true' : undefined}
                    className={`flex items-baseline gap-3 rounded-full px-3 py-2 text-sm transition lg:rounded-xl ${
                      current
                        ? 'bg-primary/10 font-semibold text-primary'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-ink'
                    }`}
                  >
                    <span className="font-title text-xs tabular-nums">{section.number}</span>
                    <span className="whitespace-nowrap lg:whitespace-normal">{section.title}</span>
                  </a>
                </li>
              )
            })}
          </ol>
        </nav>

        <article className="min-w-0 max-w-3xl space-y-14 text-base leading-7 text-slate-600">
          <section className="space-y-4">
            <SectionHeading number="01" id="introduction" title="Introduction" />
            <p>
              Tuquan Ltd (“Tuquan”, “we”, “us”, or “our”) is incorporated in Ghana and operates the
              Tuquan mobile application and website (collectively, the “Platform”). We are committed
              to protecting the personal data of our users in accordance with applicable data
              protection law, including Ghana’s Data Protection Act, 2012 (Act 843) and, where
              applicable to users in the European Economic Area, the General Data Protection
              Regulation (EU) 2016/679 (“GDPR”).
            </p>
            <p>
              This Privacy Policy explains what personal data we collect, why we collect it, how we
              use it, and your rights in relation to it. Please read it carefully.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading number="02" id="data-controller" title="Data controller" />
            <p>
              Tuquan Ltd is the data controller responsible for your personal data. Our designated
              data protection contact can be reached at{' '}
              <a className="font-semibold text-primary hover:underline" href="mailto:support@tuquan.com">
                support@tuquan.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-6">
            <SectionHeading number="03" id="data-we-collect" title="Data we collect" />
            <div className="grid gap-4">
              {collected.map((group, index) => (
                <div key={group.title} className="rounded-3xl border border-slate-200 bg-[#fcfbf7] p-6">
                  <h3 className="flex items-baseline gap-3 font-title text-lg font-bold text-ink">
                    <span className="text-primary">3.{index + 1}</span>
                    <span>{group.title}</span>
                  </h3>
                  {group.items ? (
                    <ul className="mt-4 space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3">{group.body}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <SectionHeading number="04" id="how-we-use" title="How we use your data" />
            <p>We process your personal data for the following purposes and on the legal bases described below.</p>
            <div className="space-y-4">
              {uses.map((use, index) => (
                <div key={use.title} className="rounded-3xl border border-slate-200 p-6">
                  <h3 className="flex items-baseline gap-3 font-title text-lg font-bold text-ink">
                    <span className="text-primary">4.{index + 1}</span>
                    <span>{use.title}</span>
                  </h3>
                  <p className="mt-3 rounded-2xl bg-primary/5 px-4 py-3 text-sm leading-6 text-slate-700">
                    {use.basis}
                  </p>
                  {use.body ? <p className="mt-3">{use.body}</p> : null}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeading number="05" id="data-sharing" title="Data sharing" />
            <p>
              We do not sell your personal data. We may share data with the following categories of
              third parties, strictly for the purposes described in this Policy:
            </p>
            <ul className="space-y-3">
              {sharing.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <SectionHeading number="06" id="transfers" title="International data transfers" />
            <p>
              Your data may be transferred to and processed in countries outside Ghana, including
              countries in the European Economic Area and the United States. Where such transfers
              occur, we ensure appropriate safeguards are in place, including standard contractual
              clauses approved by relevant data protection authorities or equivalent measures.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading number="07" id="retention" title="Data retention" />
            <p>
              We retain your personal data for as long as your account is active or as necessary to
              provide the Platform. If you delete your account, we will delete or anonymise your
              personal data within 30 days, except where retention is required by applicable law or
              for legitimate legal defence purposes.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading number="08" id="security" title="Security" />
            <p>
              We implement appropriate technical and organisational measures to protect your personal
              data against unauthorised access, disclosure, alteration, or destruction. All data
              transmitted between your device and our servers is encrypted in transit using TLS.
              However, no system is completely secure and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading number="09" id="your-rights" title="Your rights" />
            <p>
              Depending on your location and applicable law, you may have the following rights in
              relation to your personal data:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {rights.map(([title, body]) => (
                <li key={title} className="rounded-3xl border border-slate-200 p-5">
                  <p className="font-title text-base font-bold text-ink">{title}</p>
                  <p className="mt-2 text-sm leading-6">{body}</p>
                </li>
              ))}
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a className="font-semibold text-primary hover:underline" href="mailto:support@tuquan.com">
                support@tuquan.com
              </a>
              . We will respond within 30 days. EEA users also have the right to lodge a complaint
              with their local data protection supervisory authority. Ghana-based users may contact
              the Data Protection Commission of Ghana.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading number="10" id="cookies" title="Cookies and tracking" />
            <p>
              Our Platform uses essential cookies and similar technologies to enable core
              functionality such as maintaining login sessions. We may also use analytics cookies to
              understand usage patterns. You can control cookie preferences through your browser or
              device settings. Disabling essential cookies may affect Platform functionality.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading number="11" id="children" title="Children's privacy" />
            <p>
              Tuquan is not directed at children under the age of 16. We do not knowingly collect
              personal data from children. If you believe a child has provided us with personal data,
              please contact us at{' '}
              <a className="font-semibold text-primary hover:underline" href="mailto:support@tuquan.com">
                support@tuquan.com
              </a>{' '}
              and we will take steps to delete it.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading number="12" id="changes" title="Changes to this policy" />
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material
              changes via email or a prominent notice on the Platform. The effective date at the top
              of this document will reflect the most recent revision. Continued use of the Platform
              after the effective date constitutes acceptance of the updated Policy.
            </p>
          </section>

          <section>
            <SectionHeading number="13" id="contact" title="Contact us" />
            <div className="mt-6 rounded-[2rem] bg-ink px-6 py-8 text-white sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Questions about this policy
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/90">
                If you have any questions or concerns about this Privacy Policy or our data
                practices, please contact:
              </p>
              <dl className="mt-6 space-y-2 text-base leading-7">
                <div>
                  <dt className="sr-only">Company</dt>
                  <dd className="font-title text-xl font-bold">Tuquan Ltd</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-white/70">Email</dt>
                  <dd>
                    <a className="font-semibold text-secondary hover:underline" href="mailto:support@tuquan.com">
                      support@tuquan.com
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-white/70">Jurisdiction</dt>
                  <dd>Ghana</dd>
                </div>
              </dl>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
