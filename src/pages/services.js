import * as React from "react"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"
import PageHero from "../components/page-hero"
import {
  ServicesOverviewSection,
  StrengthConditioningSection,
  ProfessionalTrainingSection,
  NutritionalCounsellingSection,
  GymEquipmentSection,
  GymFranchiseSection,
  MerchandiseSection,
  ContactFormSection
} from "../components/services"

const ServicesPage = ({ location }) => {
  React.useEffect(() => {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <UftaLayout>
      <Navigation location={location} />
      
      <PageHero
        title="Our"
        titleHighlight={{ text: "Services", color: "text-[#00c8ff]" }}
        subtitle="Discover our comprehensive range of professional fitness and training services designed to elevate your performance and transform your health journey."
        tagline={<><span className="text-[#00c8ff]">Excellence</span> in Fitness Training</>}
        imageAlt="UFTA Services Hero Image"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServicesOverviewSection />
        <StrengthConditioningSection />
        <ProfessionalTrainingSection />
        <NutritionalCounsellingSection />
        <GymEquipmentSection />
        <GymFranchiseSection />
        <MerchandiseSection />
        <ContactFormSection />
      </main>

      <Footer />
    </UftaLayout>
  )
}
export const Head = () => <Seo title="Our Services - Universal Fitness Training Academy" />

export default ServicesPage
