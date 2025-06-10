import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"

const CoursesPage = () => {
  React.useEffect(() => {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Fade in sections on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <UftaLayout>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden bg-[#0A0A0A] pt-20">
        {/* Custom gradient background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        
        {/* Hero Image */}
        <div className="absolute right-0 top-0 w-1/2 md:w-3/5 h-full z-0">
          <div className="absolute -left-24 inset-y-0 w-24 z-10 bg-gradient-to-r from-[#0A0A0A] to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/30 to-[#0A0A0A]/10"></div>
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10"></div>
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 mix-blend-overlay"></div>
          
          <StaticImage
            src="../images/hero.png"
            alt="Courses at UFTA"
            className="w-full h-full object-cover"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
        
        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our <span className="text-[#00c8ff]">Courses</span></h1>
            <p className="text-xl text-gray-300 mb-8">Discover our comprehensive fitness education programs designed to transform your passion into profession</p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mx-auto md:mx-0"></div>
          </div>
        </div>
      </section>
      
      {/* Tagline Section */}
      <section className="py-8 border-t border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-medium">"Transforming Passion into <span className="text-[#00c8ff]">Professional Excellence</span>"</h2>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section id="overview" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Elite Training <span className="text-[#00c8ff]">Overview</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            {/* SVG Circuit Board Pattern */}
            <div className="absolute -left-20 -bottom-20 opacity-5 w-96 h-96 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                <path d="M10 10h80v80h-80z" strokeOpacity="0.1"/>
                <path d="M30 10v80M50 10v80M70 10v80M10 30h80M10 50h80M10 70h80" strokeOpacity="0.1"/>
                <circle cx="30" cy="30" r="3" strokeOpacity="0.6"/>
                <circle cx="50" cy="50" r="3" strokeOpacity="0.6"/>
                <circle cx="70" cy="70" r="3" strokeOpacity="0.6"/>
                <path d="M30 30h20v20h-20zM50 50h20v20h-20z" strokeOpacity="0.4"/>
              </svg>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-4">At UFTA, we offer a comprehensive range of fitness education programs designed to equip individuals with the knowledge, skills, and credentials needed to excel in the fitness industry. Our courses range from internationally recognized certifications to specialized diplomas and degree programs.</p>
            
            <p className="text-gray-300 leading-relaxed mb-4">Our curriculum is meticulously crafted to blend theoretical knowledge with practical applications, ensuring our graduates are not just academically qualified but also industry-ready. Whether you're a newcomer to the fitness field or an experienced professional looking to expand your expertise, we have programs tailored to meet your specific needs and career aspirations.</p>
            
            <p className="text-gray-300 leading-relaxed mb-4">What sets UFTA apart is our commitment to excellence through:</p>
            
            <ul className="list-disc ml-6 mb-6 text-gray-300 space-y-2">
              <li>Industry-relevant curriculum updated regularly to reflect the latest research and trends</li>
              <li>Hands-on practical training in state-of-the-art facilities</li>
              <li>Faculty comprised of leading experts and practitioners in the field</li>
              <li>Internationally recognized certifications and accreditations</li>
              <li>Comprehensive career support and placement assistance</li>
            </ul>
            
            <p className="text-gray-300 leading-relaxed">Explore our range of programs below and take the first step toward a rewarding career in fitness and sports science.</p>
          </div>
        </section>

        {/* Course Selection Guidance Section */}
        <section id="choosing" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.452-2.452L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.452-2.452L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.452 2.452L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.452 2.452Z" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              High Performance <span className="text-[#00c8ff]">Training Selection</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 relative overflow-hidden max-w-5xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            {/* Sci-Fi Star/Selection Graphic */}
            <div className="absolute -left-12 -top-12 opacity-10 w-64 h-64 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6-4.6-6 4.6 2.4-7.4-6-4.6h7.6z" opacity="0.8"/>
                <path d="M12 5l1.5 4.6h4.9l-3.9 3 1.5 4.7-4-3-3.9 3 1.5-4.7-4-3h4.9z" opacity="0.5"/>
                <circle cx="12" cy="12" r="10" opacity="0.3"/>
              </svg>
            </div>
            
            <div className="mb-6 text-[#00c8ff] text-lg font-semibold border-b border-[#00c8ff]/20 pb-2">Finding the Right Course for Your Career Goals</div>
            
            <p className="text-gray-300 leading-relaxed mb-6">Choosing the right fitness education pathway is crucial for your career success. At UFTA, we offer multiple levels of qualifications to match your aspirations:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-black/30 p-6 rounded-lg border border-[#2A2A2A] relative">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#00c8ff] opacity-50"></div>
                
                <div className="text-[#00c8ff] font-semibold mb-2">For <span className="text-white">Entry-Level</span> Professionals</div>
                <ul className="list-disc ml-5 text-gray-300 space-y-1 text-sm">
                  <li>PROPTA-USA CPT (Certified Personal Trainer)</li>
                  <li>PROPTA-USA CNS (Certified Nutrition Specialist)</li>
                  <li>Diploma in Personal Training</li>
                  <li>Diploma in Sports Nutrition</li>
                </ul>
              </div>
              
              <div className="bg-black/30 p-6 rounded-lg border border-[#2A2A2A] relative">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#00c8ff] opacity-50"></div>
                
                <div className="text-[#00c8ff] font-semibold mb-2">For <span className="text-white">Advanced</span> Professionals</div>
                <ul className="list-disc ml-5 text-gray-300 space-y-1 text-sm">
                  <li>PROPTA-USA CSCS (Certified Strength & Conditioning Specialist)</li>
                  <li>Diploma in Strength & Conditioning</li>
                  <li>Diploma in Sports Injury Rehabilitation</li>
                  <li>B.Sc. in Fitness and Athletic Conditioning</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-4">When selecting your course, consider these factors:</p>
            
            <ul className="list-disc ml-6 mb-6 text-gray-300 space-y-2">
              <li><span className="text-white font-medium">Current Knowledge Base:</span> Your existing education and experience in fitness</li>
              <li><span className="text-white font-medium">Career Goals:</span> Whether you aim to work with general populations, athletes, or in specialized fields</li>
              <li><span className="text-white font-medium">Time Commitment:</span> Certifications take weeks, diplomas take months, and degrees take years</li>
              <li><span className="text-white font-medium">Budget:</span> Investment varies from entry-level certifications to comprehensive degree programs</li>
            </ul>
            
            <p className="text-gray-300 leading-relaxed">Still unsure? <a href="tel:+919864047046" className="text-[#00c8ff] hover:underline transition-all duration-300">Contact our advisors</a> for personalized guidance on selecting the best program for your career path.</p>
          </div>
        </section>

        {/* Degree Programs Section */}
        <section id="degree" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Degree <span className="text-[#00c8ff]">Programs</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">UGC Approved</span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-[#00c8ff]">₹50,000</p>
                <p className="text-sm text-gray-400">per year</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white">B.Sc. in Fitness and Athletic Conditioning</h3>
            <p className="text-gray-300 leading-relaxed mb-6">UFTA is proud to be the first institute in India to launch a UGC-approved undergraduate course in fitness and athletic sciences. This comprehensive program offers multiple pathways to success:</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="font-semibold text-[#00c8ff] mb-3">Program Structure:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>After Year 1: Certificate in Athletic Sciences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>After Year 2: Diploma in Athletic Sciences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>After Year 3: Bachelor's Degree</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>After Year 4: Bachelor's Degree with Research (Honours)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#00c8ff] mb-3">Career Opportunities:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>High-performance centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Sports academies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Fitness industry leadership</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Research and development</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-l-4 border-[#00c8ff]/50 pl-4 mb-6">
              <h4 className="font-semibold text-[#00c8ff] mb-2">Eligibility:</h4>
              <p className="text-gray-300">At least 45% marks or equivalent in 10+2 (any discipline)</p>
            </div>
            
            <div className="flex justify-center">
              <a href="tel:+919864047046" className="bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-8 py-3 rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#00c8ff]/25">
                Contact for Admission
              </a>
            </div>
          </div>
        </section>

        {/* Diploma Programs Section */}
        <section id="diploma" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Diploma <span className="text-[#00c8ff]">Programs</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Personal Training Diploma */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="absolute -right-5 -top-5 w-28 h-28 opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  <path d="M8 21v-2a3 3 0 013-3h2a3 3 0 013 3v2" />
                  <circle cx="9" cy="9" r="1" />
                  <circle cx="15" cy="9" r="1" />
                </svg>
              </div>
              
              <div className="mb-4">
                <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">Level 5</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Diploma in Personal Training</h3>
              <p className="text-gray-400 mb-4 text-sm">Comprehensive program to become a certified professional personal trainer.</p>
              
              <div className="mb-4">
                <p className="text-2xl font-bold text-[#00c8ff]">₹85,000</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">Duration: 6 months (incl. 1-month internship)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="text-gray-300 text-sm">Eligibility: Age 18+, 10+2 qualification</span>
                </li>
              </ul>
              
              <a href="tel:+919864047046" className="w-full bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded transition-all duration-300 text-center block">
                Enquire Now
              </a>
            </div>

            {/* Sports Rehabilitation & Reconditioning */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="absolute -right-5 -top-5 w-28 h-28 opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                  <path d="M18 4l-6 6-6-6" />
                  <path d="M12 10v10" />
                  <path d="M8 14l4 4 4-4" />
                  <circle cx="4" cy="4" r="2" />
                  <circle cx="12" cy="4" r="2" />
                  <circle cx="20" cy="4" r="2" />
                  <circle cx="12" cy="20" r="2" />
                </svg>
              </div>
              
              <div className="mb-4">
                <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">Level 7</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Advanced Diploma in Sports Rehabilitation & Reconditioning</h3>
              <p className="text-gray-400 mb-4 text-sm">Specialized program focusing on functional muscle testing and injury rehabilitation.</p>
              
              <div className="mb-4">
                <p className="text-2xl font-bold text-[#00c8ff]">₹125,250</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">Duration: 8 months (incl. 1-month internship)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="text-gray-300 text-sm">Eligibility: Age 21+, specific prior diplomas/degree, 3 yrs S&C experience</span>
                </li>
              </ul>
              
              <a href="tel:+919864047046" className="w-full bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded transition-all duration-300 text-center block">
                Enquire Now
              </a>
            </div>

            {/* Strength & Conditioning */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="absolute -right-5 -top-5 w-28 h-28 opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                  <path d="M6.5 6.5h11v11h-11z" />
                  <circle cx="12" cy="12" r="9" strokeDasharray="1 1"/>
                  <path d="M4 14.5v1M8 14.5v1M16 14.5v1M20 14.5v1" />
                  <path d="M4.5 10h15M4.5 16h15" />
                  <path d="M7.5 7v10M16.5 7v10" />
                </svg>
              </div>
              
              <div className="mb-4">
                <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">Level 6</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Advanced Diploma in Strength & Conditioning</h3>
              <p className="text-gray-400 mb-4 text-sm">Develop expertise in designing and implementing S&C programs for athletes.</p>
              
              <div className="mb-4">
                <p className="text-2xl font-bold text-[#00c8ff]">₹127,700</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">Duration: 7 months (incl. 1-month internship)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="text-gray-300 text-sm">Eligibility: Age 18+, relevant fitness/sports background</span>
                </li>
              </ul>
              
              <a href="tel:+919864047046" className="w-full bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded transition-all duration-300 text-center block">
                Enquire Now
              </a>
            </div>
          </div>
        </section>

        {/* PROPTA USA Programs Section */}
        <section id="propta" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-7.5A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74-1.1 7.843-2.918" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              PROPTA USA <span className="text-[#00c8ff]">Certifications</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          {/* Global Certification Badge */}
          <div className="relative w-full max-w-xs mx-auto mb-8">
            <div className="absolute inset-0 w-full h-full bg-[rgba(0,200,255,0.03)] rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
            <div className="relative z-10 flex items-center justify-center">
              <svg className="w-32 h-32 text-[#00c8ff] opacity-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                <circle cx="12" cy="12" r="10" opacity="0.5"/>
                <circle cx="12" cy="12" r="6" opacity="0.7"/>
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" opacity="0.8"/>
                <path d="M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" opacity="0.6"/>
                <path d="M12 7l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5L12 7z" opacity="0.9"/>
              </svg>
            </div>
            <div className="text-center mt-4">
              <p className="text-xl font-medium text-[#00c8ff] text-shadow-sm">Global Recognition</p>
              <p className="text-center text-sm leading-relaxed text-gray-300">Internationally recognized certifications from our esteemed partner, PROPTA USA. <span className="text-[#00c8ff] font-semibold">Valid in 199 countries</span>.</p>
            </div>
          </div>
          
          {/* PROPTA USA Certifications */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Sports Nutrition Certification */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="absolute -right-5 -top-5 w-32 h-32 opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                  <path d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zm-8-6c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity="0.7"/>
                  <path d="M16 14l-4 8-4-8" opacity="0.5"/>
                </svg>
              </div>
              
              <div className="mb-4">
                <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">International Certification</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Sports Nutrition Certification (PROPTA USA)</h3>
              <p className="text-gray-400 mb-4 text-sm">Comprehensive certification focused on performance nutrition strategies for athletes.</p>
              
              <div className="mb-4">
                <p className="text-2xl font-bold text-[#00c8ff]">$1600 USD <span className="text-sm text-gray-400">(approx.)</span></p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">Duration: 8 Weeks (Online/Offline Blend)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="text-gray-300 text-sm">Eligibility: Age 18+, Level 1 PT cert, Nutrition Tech cert, 1 yr PT experience</span>
                </li>
              </ul>
              
              <a href="https://propta.com/india-propta/" target="_blank" rel="noopener noreferrer" className="w-full bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded transition-all duration-300 text-center block flex items-center justify-center">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            {/* Personal Training Certification */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="absolute -right-5 -top-5 w-32 h-32 opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                  <circle cx="12" cy="7" r="3" opacity="0.7"/>
                  <path d="M12 10v9" opacity="0.5"/>
                  <path d="M8 13h8" opacity="0.6"/>
                  <path d="M9 16l3 3 3-3" opacity="0.5"/>
                </svg>
              </div>
              
              <div className="mb-4">
                <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">International Certification</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Personal Training Certification (PROPTA USA)</h3>
              <p className="text-gray-400 mb-4 text-sm">Foundation certification for aspiring international personal trainers.</p>
              
              <div className="mb-4">
                <p className="text-2xl font-bold text-[#00c8ff]">$1800 USD <span className="text-sm text-gray-400">(approx.)</span></p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">Duration: 6 Weeks (Online/Offline Blend)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="text-gray-300 text-sm">Eligibility: Age 18+, CPR & AED certification required for graduation</span>
                </li>
              </ul>
              
              <a href="https://propta.com/india-propta/" target="_blank" rel="noopener noreferrer" className="w-full bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded transition-all duration-300 text-center block flex items-center justify-center">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Additional Certifications Section */}
        <section id="workshops" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Additional <span className="text-[#00c8ff]">Certifications</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Advanced Personal Training Certification */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="absolute -right-5 -top-5 w-32 h-32 opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                  <path d="M6 3h12v18H6z" />
                  <path d="M3 4v2h18V4zM3 10v2h18v-2zM3 16v2h18v-2z" />
                  <circle cx="7" cy="5" r="1" />
                  <circle cx="7" cy="11" r="1" />
                  <circle cx="7" cy="17" r="1" />
                </svg>
              </div>
              
              <div className="mb-4">
                <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">Specialized Certification</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">Advanced Personal Training Certification (USA Focus)</h3>
              <p className="text-gray-400 mb-6 text-sm">UFTA provides guidance and pathways for various advanced US-based certifications, with PROPTA USA as a key partner. Specifics tailored to your career goals.</p>
              
              <div className="mb-6">
                <p className="text-xl font-bold text-[#00c8ff]">Contact for Details</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-300 text-sm">Focus: Advanced methodologies and specialization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM6 8a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  <span className="text-gray-300 text-sm">Ideal for: Experienced trainers seeking top-tier US credentials</span>
                </li>
              </ul>
              
              <a href="tel:+919864047046" className="w-full bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded transition-all duration-300 text-center block">
                Discuss Options
              </a>
            </div>

            {/* CPR and AED Certification */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="absolute -right-5 -top-5 w-32 h-32 opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                  <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  <path d="M12 6v7l5 3" />
                  <path d="M9 10h6M9 14h6" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </div>
              
              <div className="mb-4">
                <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm font-medium border border-red-400/30">Essential Certification</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">CPR and AED Certification</h3>
              <p className="text-gray-400 mb-6 text-sm">Crucial life-saving skills for every fitness professional. UFTA emphasizes its importance and provides comprehensive training in cardiopulmonary resuscitation and automated external defibrillator use.</p>
              
              <div className="mb-6">
                <p className="text-xl font-bold text-[#00c8ff]">Contact for Details</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-300 text-sm">Duration: 1-2 days intensive training</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span className="text-gray-300 text-sm">Essential for all fitness professionals and gym staff</span>
                </li>
              </ul>
              
              <a href="tel:+919864047046" className="w-full bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded transition-all duration-300 text-center block">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose UFTA Section */}
        <section id="why-choose" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5Z" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Why Choose <span className="text-[#00c8ff]">UFTA?</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 text-center">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">At UFTA, we offer world-class education with prestigious affiliations like BASES UK, USAW, NSCA, NASM, and ACSM. Our accredited programs are recognised by major sports organisations, and our expert faculty provides evidence-based training in sports sciences.</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00c8ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00c8ff]/30">
                  <svg className="w-8 h-8 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Faculty</h3>
                <p className="text-gray-400 text-sm">Learn from industry-leading professionals with decades of experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00c8ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00c8ff]/30">
                  <svg className="w-8 h-8 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-7.5A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74-1.1 7.843-2.918" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Global Recognition</h3>
                <p className="text-gray-400 text-sm">Internationally recognized certifications valid in 199 countries</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00c8ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00c8ff]/30">
                  <svg className="w-8 h-8 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Career Support</h3>
                <p className="text-gray-400 text-sm">100% placement assistance and ongoing career guidance</p>
              </div>
            </div>
            
            <p className="text-[#00c8ff] font-semibold text-lg">Approved providers of leading fitness and sports science bodies.</p>
          </div>
        </section>
      </main>

      <Footer />
    </UftaLayout>
  )
}

export const Head = () => <Seo title="Courses - Universal Fitness Training Academy" />

export default CoursesPage
