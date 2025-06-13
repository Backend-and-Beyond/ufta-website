import * as React from "react"
import { motion } from "framer-motion"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"
import PageHero from "../components/page-hero"
import UniversityDetailModal from "../components/university-detail-modal"
import {
  JourneySection,
  AffiliationsSection,
  UniversityApprovalsSection,
  FacultySection,
  InternationalPartnersSection,
  InfrastructureSection,
  FoundersSection,
  AimsObjectivesSection,
  InteractiveAchievementsSection
} from "../components/about"
import "../styles/interactive-approvals.css"

const AboutPage = ({ location }) => {
  // Modal state management
  const [selectedUniversity, setSelectedUniversity] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // University data
  const universityData = {
    ugc: {
      name: "Mahapurusha Srimanta Sankaradeva Viswavidyalaya",
      status: "UGC Approved Institution",
      description: "UFTA's partnership with MSSV represents a groundbreaking achievement in Indian fitness education. Together, we launched India's first UGC-approved B.Sc. in Fitness and Athletic Conditioning program, setting new standards for academic excellence in the fitness industry.",
      programs: [
        {
          title: "B.Sc. Fitness & Athletic Conditioning",
          description: "4-year undergraduate program with NEP 2020 compliance",
          duration: "4 Years (8 Semesters)"
        },
        {
          title: "Honours with Research",
          description: "Advanced research projects in sports science",
          duration: "Additional 1 Year"
        },
        {
          title: "Major & Minor Combinations",
          description: "Flexible curriculum with specialization options",
          duration: "Integrated within program"
        }
      ],
      achievements: [
        "First UGC-approved fitness degree in India",
        "NEP 2020 compliant curriculum structure",
        "Multiple exit pathways for students",
        "Industry-aligned practical training modules",
        "Research-based capstone projects"
      ],
      contact: {
        address: "Kalongpar, Nagaon, Assam 782441",
        website: "https://mssv.ac.in"
      }
    },
    rgu: {
      name: "Rajiv Gandhi University",
      status: "Central University Partnership",
      description: "Our strategic alliance with Rajiv Gandhi University as 'Sports Science Education Promoter' has enabled us to conduct specialized workshops and awareness programs, bridging the gap between academic theory and practical application in sports science education.",
      programs: [
        {
          title: "Career Awareness Programs",
          description: "Comprehensive guidance on sports science careers",
          duration: "1-2 Days"
        },
        {
          title: "CPR & AED Certification",
          description: "Life-saving skills training for fitness professionals",
          duration: "8 Hours"
        },
        {
          title: "Strength & Conditioning Workshops",
          description: "Advanced training methodologies and techniques",
          duration: "2-3 Days"
        },
        {
          title: "Sports Science Research",
          description: "Collaborative research projects and publications",
          duration: "Ongoing"
        }
      ],
      achievements: [
        "Official Sports Science Education Promoter status",
        "Regular workshop collaborations since 2018",
        "Faculty exchange programs",
        "Joint research initiatives",
        "Student internship opportunities"
      ],
      contact: {
        address: "Rono Hills, Doimukh, Arunachal Pradesh 791112",
        website: "https://rgu.ac.in"
      }
    }
  };

  // Modal handlers
  const openModal = (universityKey) => {
    setSelectedUniversity(universityData[universityKey]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUniversity(null);
  };

  return (
    <UftaLayout>
      <Navigation location={location} />
      
      <PageHero
        title="About"
        titleHighlight={{ text: "UFTA", color: "text-[#00c8ff]" }}
        subtitle="Learn about our journey, mission, and commitment to fitness excellence"
        tagline={
          <>
            "<span className="text-[#00c8ff]">Transforming</span> Fitness Education Since 2006"
          </>
        }
        imageAlt="About UFTA Hero Image"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Journey Section */}
        <JourneySection />

        {/* Affiliations Section */}
        <AffiliationsSection />

        {/* University Approvals Section */}
        <UniversityApprovalsSection openModal={openModal} />

        {/* Faculty Section */}
        <FacultySection />

        {/* International Partnerships Section - Combined with Collaborations */}
        <InternationalPartnersSection />

        {/* Infrastructure Section */}
        <InfrastructureSection />

        {/* Founders Section */}
        <FoundersSection />

        {/* Aims & Objectives Section */}
        <AimsObjectivesSection />

        {/* Interactive Achievements Timeline */}
        <InteractiveAchievementsSection />
      </main>

      <Footer />

      {/* University Detail Modal */}
      <UniversityDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        university={selectedUniversity}
      />
    </UftaLayout>
  )
}

export const Head = () => <Seo title="About UFTA - Universal Fitness Training Academy" />

export default AboutPage
