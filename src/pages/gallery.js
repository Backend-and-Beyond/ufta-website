import * as React from "react";

import UftaLayout from "../components/ufta-layout";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Seo from "../components/seo";
import PageHero from "../components/page-hero";
import { GalleryPhotosSection, GalleryVideosSection } from "../components/gallery";

const GalleryPage = ({ location }) => {
  return (
    <UftaLayout>
      <Navigation location={location} />
      
      <PageHero
        title="Gallery"
        subtitle="Explore our journey through images and videos"
        tagline="Capturing moments of excellence and achievement"
        titleHighlight={{ text: "Gallery", color: "text-[#00c8ff]" }}
        imageAlt="UFTA Gallery Hero"
      />
      
      <main>
        <GalleryPhotosSection />
        <GalleryVideosSection />
      </main>
      
      <Footer />
    </UftaLayout>
  );
};

export default GalleryPage;

export const Head = ({ location }) => (
  <Seo 
    title="Gallery - UFTA" 
    description="Explore UFTA's gallery featuring photos and videos showcasing our facilities, events, training sessions, and achievements in sports science and fitness training."
    pathname={location.pathname}
  />
);
