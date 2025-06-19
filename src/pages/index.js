import * as React from "react";

import UftaLayout from "../components/ufta-layout";
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import Footer from "../components/footer";
import Seo from "../components/seo";
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
  GetInTouchSection,
} from "../components/index";

const IndexPage = ({ location }) => {
  return (
    <UftaLayout>
      <Navigation location={location} />

      <HeroSection />

      <WelcomeToUftaSection />

      <TaglineSection />

      <HeadCoachSection />

      <EliteTrainingProgramsSection />

      <OurServicesSection />

      <HighPerformanceTrainingSection />

      <ApprovedProvidersSection />

      

      {/* <OurEsteemedFacultySection /> */}

      <WhyChooseUsSection />

      {/* <CallToActionSection /> */}

      <GetInTouchSection />

      <Footer />
    </UftaLayout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo title="UFTA - Advanced Training, Extraordinary Results" />
);
