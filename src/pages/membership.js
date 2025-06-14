import * as React from "react"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"
import PageHero from "../components/page-hero"
import {
  MembershipOverviewSection,
  MembershipCategoriesSection,
  MembershipBenefitsSection,
  JoinMembershipSection
} from "../components/membership"

const MembershipPage = ({ location }) => {
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
        title="UFTA"
        titleHighlight={{ text: "Membership", color: "text-[#00c8ff]" }}
        subtitle="Join our elite community of fitness professionals and enthusiasts. Gain access to exclusive resources, events, and networking opportunities."
        tagline={<><span className="text-[#00c8ff]">Premium</span> Benefits for Dedicated Athletes</>}
        imageAlt="UFTA Membership Hero Image"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MembershipOverviewSection />
        <MembershipCategoriesSection />
        <MembershipBenefitsSection />
        <JoinMembershipSection />
      </main>

      <Footer />
    </UftaLayout>
  )
}

export const Head = () => <Seo title="Membership - Universal Fitness Training Academy" />

export default MembershipPage