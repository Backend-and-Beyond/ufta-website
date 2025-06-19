import * as React from "react";

import UftaLayout from "../components/ufta-layout";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Seo from "../components/seo";
import PageHero from "../components/page-hero";

import {
  JobPlacementOverviewSection,
  JobPlacementDomesticSection,
  JobPlacementInternationalSection,
  JobPlacementProcessSection,
  JobPlacementContactSection,
} from "../components/job-placement";

const JobPlacementPage = ({ location }) => {
  return (
    <UftaLayout>
      <Navigation location={location} />

      <PageHero
        title="Job"
        titleHighlight={{ text: "Placement", color: "text-[#00c8ff]" }}
        subtitle="100% Placements in India & Abroad"
        tagline={
          <>
            Your <span className="text-[#00c8ff]">Career Success</span> is Our
            Mission
          </>
        }
        imageAlt="UFTA Job Placement"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <JobPlacementOverviewSection />
        <JobPlacementDomesticSection />
        <JobPlacementInternationalSection />
        <JobPlacementProcessSection />
        <JobPlacementContactSection />
      </main>

      <Footer />
    </UftaLayout>
  );
};

export const Head = () => (
  <Seo title="Job Placement - Universal Fitness Training Academy" />
);

export default JobPlacementPage;
