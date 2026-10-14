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
import { AndroidWaitlistModal } from './components/ui/AndroidWaitlistModal'
import { PageLoader } from './components/ui/PageLoader'

function App() {
  const [ready, setReady] = useState(false)
  const [androidModalOpen, setAndroidModalOpen] = useState(false)

  return (
    <>
      {!ready && <PageLoader onDone={() => setReady(true)} />}
      <div id="top">
        <SiteHeader ready={ready} />
        <HeroSection ready={ready} onAndroidClick={() => setAndroidModalOpen(true)} />
        <FeaturesSection onAndroidClick={() => setAndroidModalOpen(true)} />
        <DownloadCTASection onAndroidClick={() => setAndroidModalOpen(true)} />
        <OurStorySection />
        <ProcessSection />
        <FaqsSection />
        <BottomCTASection onAndroidClick={() => setAndroidModalOpen(true)} />
        <ContactSection />
        <SiteFooter />
      </div>
      <AndroidWaitlistModal
        open={androidModalOpen}
        onClose={() => setAndroidModalOpen(false)}
      />
    </>
  )
}

export default App
