
import * as React from "react";
import UftaLayout from "../components/ufta-layout";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Seo from "../components/seo";
import PageHero from "../components/page-hero";
import ContactFormSection from "../components/services/contact-form-section";

const ContactPage = ({ location }) => (
  <UftaLayout>
    <Navigation location={location} />
    <PageHero
      title="Contact"
      titleHighlight={{ text: "UFTA", color: "text-[#00c8ff]" }}
      subtitle="We'd love to hear from you. Reach out for any queries, collaborations, or support."
      tagline={<><span className="text-[#00c8ff]">Your Fitness Journey</span> Starts Here</>}
      imageAlt="Contact UFTA Hero Image"
    />
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ContactFormSection />
    </main>
    <Footer />
  </UftaLayout>
);

export const Head = () => <Seo title="Contact Us - Universal Fitness Training Academy" />;

export default ContactPage;
