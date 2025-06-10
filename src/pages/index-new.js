import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import HeroSection from "../components/hero-section"
import Footer from "../components/footer"
import Seo from "../components/seo"

const IndexPage = () => {
  const [fadeInSections, setFadeInSections] = React.useState([])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [])

  return (
    <UftaLayout>
      <Navigation />
      
      <HeroSection />
      
      {/* Tagline Section */}
      <section className="py-10 border-t border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            "Advanced Training, <span className="highlight-text">Extraordinary Results</span>"
          </h2>
        </div>
      </section>

      {/* Elite Training Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold section-heading mb-12">Elite Training Programs</h2>
          <div className="mb-8">
            <p className="text-gray-300">
              At UFTA, we take pride in offering exceptional fitness education and training programs that set the industry standard. Our courses blend cutting-edge science with practical application, creating fitness professionals who excel in their field.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card rounded-sm overflow-hidden">
              <div className="card-image">
                <StaticImage
                  src="../images/placeholder1.jpg"
                  alt="Personal Training Certification"
                  className="w-full h-full object-cover"
                  width={400}
                  height={250}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Personal <span className="highlight-text">Training Certification</span>
                </h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive certification program that transforms passionate fitness enthusiasts into professional personal trainers ready for industry success.
                </p>
                <Link to="/courses" className="text-highlight hover:text-highlight opacity-80 hover:opacity-100 transition-opacity no-underline">
                  View Details →
                </Link>
              </div>
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-xs px-3 py-1 rounded-sm border border-highlight/30">
                <span className="text-highlight">Level 5</span>
              </div>
            </div>
            <div className="card rounded-sm overflow-hidden">
              <div className="card-image">
                <StaticImage
                  src="../images/placeholder2.png"
                  alt="Strength and Conditioning"
                  className="w-full h-full object-cover"
                  width={400}
                  height={250}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Strength & <span className="highlight-text">Conditioning</span>
                </h3>
                <p className="text-gray-400 mb-4">
                  Advanced training in scientific principles and techniques to maximize athletic performance through proper strength and conditioning methodologies.
                </p>
                <Link to="/courses" className="text-highlight hover:text-highlight opacity-80 hover:opacity-100 transition-opacity no-underline">
                  View Details →
                </Link>
              </div>
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-xs px-3 py-1 rounded-sm border border-highlight/30">
                <span className="text-highlight">Advanced</span>
              </div>
            </div>
            <div className="card rounded-sm overflow-hidden">
              <div className="card-image">
                <StaticImage
                  src="../images/placeholder3.jpg"
                  alt="Sports Nutrition"
                  className="w-full h-full object-cover"
                  width={400}
                  height={250}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Sports <span className="highlight-text">Nutrition</span>
                </h3>
                <p className="text-gray-400 mb-4">
                  Evidence-based nutritional strategies to enhance athletic performance, optimize recovery, and promote long-term health and wellness.
                </p>
                <Link to="/courses" className="text-highlight hover:text-highlight opacity-80 hover:opacity-100 transition-opacity no-underline">
                  View Details →
                </Link>
              </div>
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-xs px-3 py-1 rounded-sm border border-highlight/30">
                <span className="text-highlight">Specialized</span>
              </div>
            </div>
          </div>
          <div className="text-right mt-6">
            <Link to="/courses" className="text-highlight hover:text-highlight opacity-80 hover:opacity-100 transition-opacity no-underline">
              View All Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* High Performance Training Section */}
      <section className="py-20 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <StaticImage
                src="../images/placeholder1.jpg"
                alt="High Performance Training"
                className="w-full h-auto rounded-sm border border-gray-600 shadow-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold section-heading mb-8">
                High Performance <span className="highlight-text">Training Clinic</span>
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our specialized High Performance Clinic offers cutting-edge training methodologies for athletes seeking to maximize their performance potential.
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                From biomechanical analysis and sports rehabilitation to advanced strength conditioning and metabolic optimization, our services are tailored to your specific goals and athletic demands.
              </p>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our team of experts includes sports scientists, rehabilitation specialists, and elite coaches who provide evidence-based training solutions.
              </p>
              
              <Link to="/high-performance" className="btn-primary inline-block px-6 py-3 font-medium transition-all duration-200 no-underline">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approved Providers Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            Approved <span className="text-[#00c8ff]">Providers</span>
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 md:gap-x-24">
            <div>
              <StaticImage
                src="../images/provider1.webp"
                alt="Provider 1"
                className="h-14 md:h-16 w-auto object-contain"
                width={80}
                height={64}
              />
            </div>
            
            <div>
              <StaticImage
                src="../images/provider2.png"
                alt="Provider 2"
                className="h-14 md:h-16 w-auto object-contain"
                width={80}
                height={64}
              />
            </div>
            
            <div>
              <StaticImage
                src="../images/provider3.png"
                alt="Provider 3"
                className="h-14 md:h-16 w-auto object-contain"
                width={80}
                height={64}
              />
            </div>
            
            <div>
              <StaticImage
                src="../images/provider4.png"
                alt="Provider 4"
                className="h-14 md:h-16 w-auto object-contain"
                width={80}
                height={64}
              />
            </div>
            
            <div>
              <StaticImage
                src="../images/provider5.png"
                alt="Provider 5"
                className="h-14 md:h-16 w-auto object-contain"
                width={80}
                height={64}
              />
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-400 text-sm">
              UFTA is recognized and approved by leading fitness and educational institutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Welcome to UFTA</h2>
          <div className="card p-8 rounded-sm">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Universal Fitness Training Academy (UFTA), established in 2006, is a premier institution in India dedicated to providing comprehensive health and fitness education. With a steadfast commitment to excellence, UFTA has trained and certified over 2,500 fitness professionals, including Personal Trainers, Strength & Conditioning Coaches, and Nutritionists.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our mission is to foster a new generation of fitness leaders through rigorous academic programs, practical training, and a passion for advancing sport and exercise sciences. We offer a range of internationally recognized courses, from degree programs like the B.Sc. in Fitness & Athletic Conditioning to specialized certifications, ensuring our graduates are well-equipped to excel in the dynamic fitness industry.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              UFTA fosters a vibrant community, providing expert guidance and a supportive environment to help everyone—from aspiring fitness professionals to personal fitness enthusiasts—achieve their goals.
            </p>
            <div className="text-center">
              <Link to="/about" className="inline-block bg-white text-black hover:bg-gray-200 px-8 py-3 font-medium transition-colors duration-200 no-underline">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-4">Professional Certifications</h3>
              <p className="text-gray-400">Internationally recognized courses to become a certified fitness professional.</p>
            </div>
            <div className="card p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-4">S&C Training</h3>
              <p className="text-gray-400">Elite Strength & Conditioning training for peak athletic performance.</p>
            </div>
            <div className="card p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-4">Nutritional Counselling</h3>
              <p className="text-gray-400">Personalized, evidence-based nutrition plans for health and fitness goals.</p>
            </div>
            <div className="card p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-4">High Performance Clinic</h3>
              <p className="text-gray-400">Specialized services including sports rehabilitation and biomechanics analysis.</p>
            </div>
            <div className="card p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-4">Gym Setup Support</h3>
              <p className="text-gray-400">Guidance on gym equipment, sourcing, and franchise opportunities.</p>
            </div>
            <div className="card p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-4">Job Placement Assistance</h3>
              <p className="text-gray-400">Dedicated support to help our graduates find rewarding careers in fitness.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block bg-white text-black hover:bg-gray-200 px-8 py-3 font-medium transition-colors duration-200 no-underline">
              Discover All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Head Coach Section */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Head Coach, UFTA</h2>
          <div className="card p-8 rounded-sm">
            <div className="grid md:grid-cols-3 gap-10 items-center">
              <div className="md:col-span-1">
                <StaticImage
                  src="../images/bhibhu.png"
                  alt="Bibhu Moni Singha"
                  className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover mx-auto border-4 border-amber-400/20"
                  width={240}
                  height={240}
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-white mb-4">Bibhu Moni Singha</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Bibhu Moni Singha is one of India's leading fitness experts and sports nutritionists with over 20 years of experience in the fitness industry. Recognized with prestigious awards, including the "Excellent Personal Trainer of the Year 2018" and "India's Best Fitness Trainer of the Year."
                </p>
                <p className="text-gray-300 leading-relaxed">
                  As the Director of Certification at Universal Fitness Training Academy and Head Coach at Super Fight League Gym, he specializes in sports nutrition, strength and conditioning, injury rehabilitation, and performance enhancement.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-8 text-center">Qualifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card p-4 rounded-sm">
                  <h4 className="font-semibold text-amber-400 mb-2">Master Trainer TECHNOGYM</h4>
                  <p className="text-gray-400 text-sm">Certified Master Trainer for TECHNOGYM, specializing in advanced fitness equipment and training programs.</p>
                </div>
                <div className="card p-4 rounded-sm">
                  <h4 className="font-semibold text-amber-400 mb-2">IUSCA/USAW Level 2</h4>
                  <p className="text-gray-400 text-sm">Certified Strength and Conditioning Coach with expertise in Olympic weightlifting.</p>
                </div>
                <div className="card p-4 rounded-sm">
                  <h4 className="font-semibold text-amber-400 mb-2">MPPT & CSN PROPTA USA</h4>
                  <p className="text-gray-400 text-sm">Certified in Mental Performance and Sports Nutrition from PROPTA USA.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Members Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Faculty Members</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 rounded-sm text-center">
              <StaticImage
                src="../images/faculty1.png"
                alt="Archana Thakuria"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-2 border-amber-400/20"
                width={128}
                height={128}
              />
              <h3 className="text-xl font-semibold">Archana Thakuria</h3>
            </div>
            <div className="card p-6 rounded-sm text-center">
              <StaticImage
                src="../images/faculty2.png"
                alt="Alvi Yusuf"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-2 border-amber-400/20"
                width={128}
                height={128}
              />
              <h3 className="text-xl font-semibold">Alvi Yusuf</h3>
            </div>
            <div className="card p-6 rounded-sm text-center">
              <StaticImage
                src="../images/faculty3.jpg"
                alt="Sangeeta Singha"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-2 border-amber-400/20"
                width={128}
                height={128}
              />
              <h3 className="text-xl font-semibold">Sangeeta Singha</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose UFTA Section */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Why Choose UFTA?</h2>
          <div className="card p-8 rounded-sm text-center">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At UFTA, we offer world-class education with prestigious affiliations like BASES UK, USAW, NSCA, NASM, and ACSM. Our accredited programs are recognised by major sports organisations, and our expert faculty provides evidence-based training in sports sciences.
            </p>
            <p className="text-amber-400 font-semibold">
              Approved providers of leading fitness and sports science bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl text-gray-300 mb-10">Join UFTA today and transform your passion for fitness into a thriving career.</p>
          <div className="flex justify-center space-x-6">
            <Link to="/courses" className="bg-white text-black hover:bg-gray-200 px-8 py-3 font-medium transition-colors duration-200 no-underline">
              Explore Courses
            </Link>
            <Link to="#contact" className="border border-white text-white hover:bg-white/10 px-8 py-3 font-medium transition-colors duration-200 no-underline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="card p-8 rounded-sm text-center">
            <p className="text-gray-300 text-lg mb-8">
              Have questions or need guidance? Our team is here to help you. Reach out to us via phone, email, or visit our campus.
            </p>
            <div className="space-y-4">
              <p className="text-xl">
                <span className="text-amber-400">Phone:</span>{" "}
                <a href="tel:+919864047046" className="text-white hover:text-amber-400">
                  +91 98640 47046
                </a>
              </p>
              <p className="text-xl">
                <span className="text-amber-400">Email:</span>{" "}
                <a href="mailto:info@ufta.in" className="text-white hover:text-amber-400">
                  info@ufta.in
                </a>
              </p>
              <p className="text-gray-300">Or visit our main campus in Guwahati, Assam.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </UftaLayout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="UFTA - Universal Fitness Training Academy" />

export default IndexPage
