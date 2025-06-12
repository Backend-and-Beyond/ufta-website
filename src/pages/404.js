import * as React from "react"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"

const NotFoundPage = ({ location }) => (
  <UftaLayout>
    <Navigation location={location} />
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
      <a 
        href="/" 
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
      >
        Go Back Home
      </a>
    </div>
    <Footer />
  </UftaLayout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
