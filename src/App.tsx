import { useState } from 'react'
import { BottomCTASection } from './components/sections/BottomCTASection'
import { ContactSection } from './components/sections/ContactSection'
import { FaqsSection } from './components/sections/FaqsSection'
import { DownloadCTASection } from './components/sections/DownloadCTASection'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { HeroSection } from './components/sections/HeroSection'
import { OurStorySection } from './components/sections/OurStorySection'
import { ProcessSection } from './components/sections/ProcessSection'
import { SiteFooter } from './components/sections/SiteFooter'
import { SiteHeader } from './components/sections/SiteHeader'
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage'
import { TermsPage } from './components/pages/TermsPage'
import { PageLoader } from './components/ui/PageLoader'

function App() {
  const [ready, setReady] = useState(false)
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/privacy' || path === '/terms') {
    return (
      <div id="top">
        <SiteHeader ready solid />
        {path === '/privacy' ? <PrivacyPolicyPage /> : <TermsPage />}
        <SiteFooter />
      </div>
    )
  }

  return (
    <>
      {!ready && <PageLoader onDone={() => setReady(true)} />}
      <div id="top">
        <SiteHeader ready={ready} />
        <HeroSection ready={ready} />
        <FeaturesSection />
        <DownloadCTASection />
        <OurStorySection />
        <ProcessSection />
        <FaqsSection />
        <BottomCTASection />
        <ContactSection />
        <SiteFooter />
      </div>
    </>
  )
}

export default App
