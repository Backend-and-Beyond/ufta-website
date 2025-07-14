import * as React from "react";
import { motion } from "framer-motion";

import UftaLayout from "../components/ufta-layout";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Seo from "../components/seo";
import PageHero from "../components/page-hero";
import {
  OverviewSection,
  CourseSelectionSection,
  ProgramsSection,
  DiplomaProgramsSection,
  CertificationsSection,
  WhyChooseSection,
} from "../components/courses";

const CoursesPage = ({ location }) => {
  React.useEffect(() => {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <UftaLayout>
      <Navigation location={location} />

      <PageHero
        title="Our"
        titleHighlight={{ text: "Courses", color: "text-[#00c8ff]" }}
        subtitle="Discover our comprehensive fitness education programs designed to transform your passion into profession"
        tagline={
          <>
            Explore accredited <span className="text-[#00c8ff]">courses</span>,{" "}
            <span className="text-[#00c8ff]">diplomas</span>, and{" "}
            <span className="text-[#00c8ff]">certifications</span> to advance
            your fitness career
          </>
        }
        imageAlt="Courses at UFTA"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <OverviewSection />
        <DiplomaProgramsSection />
        {/*  <CourseSelectionSection /> */}
        <ProgramsSection />

        <CertificationsSection />
        <WhyChooseSection />
      </main>

      <Footer />
    </UftaLayout>
  );
};

export const Head = () => (
  <Seo title="Courses - Universal Fitness Training Academy" />
);

export default CoursesPage;
