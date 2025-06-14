import * as React from "react"
import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"

const JobPlacementPage = ({ location }) => {
  return (
    <UftaLayout>
      <Navigation location={location} />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Job Placement
          </h1>
          <p className="text-center text-gray-300">
            This page is under development. Components will be added back once the build issue is resolved.
          </p>
        </div>
      </main>

      <Footer />
    </UftaLayout>
  )
}

export const Head = () => <Seo title="Job Placement - Universal Fitness Training Academy" />

export default JobPlacementPage
