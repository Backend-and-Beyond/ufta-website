import * as React from "react";

import UftaLayout from "../components/ufta-layout";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Seo from "../components/seo";
import PageHero from "../components/page-hero";
import {
  HighPerformanceIntroSection,
  HighPerformanceServicesSection,
  HighPerformanceContactSection,
} from "../components/high-performance";
import { pageAnimations } from "../utils/animations";

const HighPerformancePage = ({ location }) => {
  // Get animation variants from centralized configuration
  const {
    fadeInUp,
    slideInLeft,
    slideInRight,
    staggerContainer,
    cardVariant,
    scaleIn,
  } = pageAnimations.standard;

  // Services data
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-14 h-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15M21.75 9A13.401 13.401 0 0 0 12 3.75m0 16.5A13.401 13.401 0 0 0 2.25 9"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.75a13.401 13.401 0 0 1 9.75 5.25m-19.5 0A13.401 13.401 0 0 1 12 3.75m0 16.5a13.401 13.401 0 0 1-9.75-5.25"
          />
        </svg>
      ),
      title: "Injury Rehabilitation & Reconditioning",
      description:
        "UFTA's in-house Sports Medicine facilities are dedicated to the comprehensive management of injuries for both athletes and the general public. Led by specialists like Dr. Dipankar Bhattacharryya (Dean of Sports & Exercise Medicine) and Dr. Bibhu Moni Singha (PhD Scholar, Sports & Exercise Scientist with expertise in Rehabilitation & Reconditioning), we focus on a holistic approach to recovery.",
      features: [
        "Expert Assessment: Thorough evaluation to understand the nature and extent of the injury",
        "Non-Invasive Techniques: Prioritizing conservative and effective treatment methods",
        "Personalized Programs: Tailored rehabilitation and reconditioning plans to meet individual needs",
        "Performance Focused: Aiming not just for recovery, but for a safe return to peak performance",
        "Injury Prevention: Educating on strategies to avoid future injuries and manage physical overload",
        "Active & Healthy Lifestyle: Promoting long-term well-being beyond immediate recovery",
      ],
      color: "emerald",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-14 h-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
      title: "Posture Analysis & GAIT Lab",
      description:
        "Understanding your body's alignment and movement patterns is key to preventing injuries and improving efficiency. Our GAIT lab provides in-depth analysis.",
      features: [
        "Comprehensive assessment of static and dynamic posture",
        "Detailed analysis of walking and running mechanics (GAIT)",
        "Identification of imbalances and movement dysfunctions",
        "Recommendations for corrective exercises and ergonomic adjustments",
        "Advanced technology for precise movement analysis",
        "Personalized improvement strategies",
      ],
      color: "blue",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-14 h-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
          />
        </svg>
      ),
      title: "Advanced Biomechanical Analysis",
      description:
        "Our Sports & Exercise Biomechanics lab is equipped with state-of-the-art technology to dissect and understand the mechanics of human movement in sports and daily activities.",
      features: [
        "High-speed camera systems to capture and analyze complex movements",
        "Advanced software for detailed motion analysis",
        "Force plate assessments for ground reaction forces",
        "3D motion capture technology",
        "Sport-specific movement analysis",
        "Performance optimization recommendations",
      ],
      color: "purple",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-14 h-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      ),
      title: "Cardiovascular Assessment & Monitoring",
      description:
        "Comprehensive cardiac health evaluation and monitoring to ensure safe and effective training programs.",
      features: [
        "Resting and exercise ECG monitoring",
        "Heart rate variability analysis",
        "VO2 max testing and assessment",
        "Blood pressure monitoring during exercise",
        "Cardiac risk stratification",
        "Personalized training zone recommendations",
      ],
      color: "red",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-14 h-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>
      ),
      title: "Performance Testing & Optimization",
      description:
        "Comprehensive fitness assessments and performance optimization protocols for athletes and fitness enthusiasts.",
      features: [
        "Strength and power testing protocols",
        "Agility and speed assessments",
        "Flexibility and mobility evaluations",
        "Body composition analysis",
        "Sport-specific performance metrics",
        "Periodized training program development",
      ],
      color: "yellow",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-14 h-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.052-.75.085a2.25 2.25 0 0 0-2.25 2.25v.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.5a2.25 2.25 0 0 0-2.25-2.25 24.394 24.394 0 0 0-.75-.085ZM12.75 3.104v5.714a2.25 2.25 0 0 0 .659 1.591L17.5 14.5M19.5 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 9.107 9.107Z"
          />
        </svg>
      ),
      title: "Research & Development",
      description:
        "Contributing to the advancement of sports science through ongoing research and evidence-based practice implementation.",
      features: [
        "Clinical research studies",
        "Evidence-based practice development",
        "Technology integration in rehabilitation",
        "Collaboration with academic institutions",
        "Publication of research findings",
        "Continuous improvement of protocols",
      ],
      color: "indigo",
    },
  ];

  return (
    <UftaLayout>
      <Navigation location={location} />

      <PageHero
        title="High"
        titleHighlight={{ text: "Performance", color: "text-[#00c8ff]" }}
        subtitle="Advanced training for elite athletes"
        tagline={
          <>
            "<span className="text-[#00c8ff]">Elevate</span> Your Athletic
            Performance"
          </>
        }
        imageAlt="UFTA High Performance Clinic"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HighPerformanceIntroSection />
        <HighPerformanceServicesSection />
        <HighPerformanceContactSection />
      </main>

      <Footer />
    </UftaLayout>
  );
};

export const Head = () => (
  <Seo title="High Performance Clinic - Universal Fitness Training Academy" />
);

export default HighPerformancePage;
