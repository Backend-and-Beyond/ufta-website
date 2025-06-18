import * as React from "react"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import HeroSection from "../components/hero-section"
import Footer from "../components/footer"
import Seo from "../components/seo"
import {
  TaglineSection,
  EliteTrainingProgramsSection,
  HighPerformanceTrainingSection,
  ApprovedProvidersSection,
  WelcomeToUftaSection,
  OurServicesSection,
  HeadCoachSection,
  OurEsteemedFacultySection,
  WhyChooseUsSection,
  CallToActionSection,
  GetInTouchSection
} from "../components/index"

const IndexPage = ({ location }) => {
  return (
    <UftaLayout>
      <Navigation location={location} />

      <HeroSection />

      <TaglineSection />

      <EliteTrainingProgramsSection />

      <HighPerformanceTrainingSection />

      <ApprovedProvidersSection />

      <WelcomeToUftaSection />

      <OurServicesSection />

      <HeadCoachSection />

      <OurEsteemedFacultySection />

      <WhyChooseUsSection />

      <CallToActionSection />

      <GetInTouchSection />

      <Footer />
    </UftaLayout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="UFTA - Universal Fitness Training Academy" />

export default IndexPage
