import * as React from "react"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"
import PageHero from "../components/page-hero"
import {
  EventsOverviewSection,
  EventsWorkshopsSection,
  EventsConferencesSection,
  EventsContactSection
} from "../components/events"

const EventsPage = ({ location }) => {
  return (
    <UftaLayout>
      <Navigation location={location} />
      
      <PageHero
        title="Events &"
        titleHighlight={{ text: "Workshops", color: "text-[#00c8ff]" }}
        subtitle="Learn. Connect. Grow."
        tagline={<><span className="text-[#00c8ff]">Transformative</span> Learning Experiences</>}
        imageAlt="UFTA Events Hero Image"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EventsOverviewSection />
        <EventsWorkshopsSection />
        <EventsConferencesSection />
        <EventsContactSection />
      </main>

      <Footer />
    </UftaLayout>
  )
}

export const Head = () => <Seo title="Events & Workshops - Universal Fitness Training Academy" />

export default EventsPage
