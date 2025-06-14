import * as React from "react"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"
import PageHero from "../components/page-hero"
import {
  HighPerformanceIntroSection,
  HighPerformanceServicesSection,
  HighPerformanceContactSection
} from "../components/high-performance"

const HighPerformancePage = ({ location }) => {

  return (
    <UftaLayout>
      <Navigation location={location} />
      
      <PageHero
        title="High"
        titleHighlight={{ text: "Performance", color: "text-[#00c8ff]" }}
        subtitle="Advanced training for elite athletes"
        tagline={<>"<span className="text-[#00c8ff]">Elevate</span> Your Athletic Performance"</>}
        imageAlt="UFTA High Performance Clinic"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HighPerformanceIntroSection />
        <HighPerformanceServicesSection />
        <HighPerformanceContactSection />
      </main>

      <Footer />
    </UftaLayout>
  )
}

export const Head = () => <Seo title="High Performance Clinic - Universal Fitness Training Academy" />

export default HighPerformancePage
