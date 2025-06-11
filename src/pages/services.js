import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"

const ServicesPage = () => {
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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00c8ff]/10 via-transparent to-[#00c8ff]/5 z-20"></div>
          
          {/* Hero Image */}
          <div className="absolute right-0 top-0 w-1/2 md:w-3/5 h-full z-0">
            <div className="absolute -left-24 inset-y-0 w-24 z-10 bg-gradient-to-r from-[#0A0A0A] to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/30 to-[#0A0A0A]/10"></div>
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10"></div>
            <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 mix-blend-overlay"></div>
            
            <StaticImage
              src="../images/hero.png"
              alt="UFTA Services"
              className="w-full h-full object-cover"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#00c8ff] inline-block relative">
                Services
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Discover our comprehensive range of professional fitness and training services designed to elevate your performance and transform your health journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#overview" className="bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-8 py-3 rounded transition-all duration-300 font-medium">
                Explore Services
              </a>
              <a href="#contact-form" className="px-8 py-3 rounded bg-transparent text-white font-medium border border-white/20 hover:border-white/40 transition-all duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tagline Section */}
      <section className="py-8 border-t border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-medium">"<span className="text-[#00c8ff]">Excellence</span> in Fitness Training"</h2>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section id="overview" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Our <span className="text-[#00c8ff]">Services</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            <p className="text-gray-300 leading-relaxed mb-5">Universal Fitness Training Academy (UFTA) has been a pioneer in providing fitness education in India since 2006. We are dedicated to certifying professional personal trainers, Strength & Conditioning (S&C) coaches, and sports nutritionists. UFTA is also recognized as one of the world's top fitness academies, actively conducting research in sport & exercise sciences, S&C, and nutrition.</p>
            
            <p className="text-gray-300 leading-relaxed mb-5">Our courses, including Degrees, Diplomas, and Certifications, are designed to equip fitness professionals with evidence-based knowledge and practical skills, recognized globally in private and government universities, sports academies, gyms, and high-performance centers.</p>
            
            <p className="text-gray-300 leading-relaxed mb-8">Our services extend beyond education. We offer specialized training programs, nutritional guidance, and support for fitness entrepreneurs. UFTA is committed to advancing the fitness industry through excellence in education, research, and practical application.</p>
            
            <h3 className="text-2xl font-semibold text-center mb-6 text-white">Key Service Areas</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/30 p-6 rounded-lg border border-[#2A2A2A] relative hover:border-[#00c8ff]/50 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#00c8ff] opacity-50"></div>
                <h4 className="text-xl font-semibold text-[#00c8ff] mb-3">Professional Certification</h4>
                <p className="text-gray-300 text-sm">Become a certified fitness professional with our internationally recognized courses.</p>
              </div>
              
              <div className="bg-black/30 p-6 rounded-lg border border-[#2A2A2A] relative hover:border-[#00c8ff]/50 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#00c8ff] opacity-50"></div>
                <h4 className="text-xl font-semibold text-[#00c8ff] mb-3">Strength & Conditioning</h4>
                <p className="text-gray-300 text-sm">Access elite S&C training and coaching for peak athletic performance.</p>
              </div>
              
              <div className="bg-black/30 p-6 rounded-lg border border-[#2A2A2A] relative hover:border-[#00c8ff]/50 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#00c8ff] opacity-50"></div>
                <h4 className="text-xl font-semibold text-[#00c8ff] mb-3">Nutritional Counselling</h4>
                <p className="text-gray-300 text-sm">Personalized, evidence-based nutrition plans for your health and fitness goals.</p>
              </div>
              
              <div className="bg-black/30 p-6 rounded-lg border border-[#2A2A2A] relative hover:border-[#00c8ff]/50 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#00c8ff] opacity-50"></div>
                <h4 className="text-xl font-semibold text-[#00c8ff] mb-3">Gym Setup & Support</h4>
                <p className="text-gray-300 text-sm">Guidance on gym equipment sourcing and franchise opportunities.</p>
              </div>
              
              <div className="bg-black/30 p-6 rounded-lg border border-[#2A2A2A] relative hover:border-[#00c8ff]/50 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#00c8ff] opacity-50"></div>
                <h4 className="text-xl font-semibold text-[#00c8ff] mb-3">Research & Development</h4>
                <p className="text-gray-300 text-sm">Contributing to the advancement of sports and exercise sciences through ongoing research.</p>
              </div>
              
              <div className="bg-black/30 p-6 rounded-lg border border-[#2A2A2A] relative hover:border-[#00c8ff]/50 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#00c8ff] opacity-50"></div>
                <h4 className="text-xl font-semibold text-[#00c8ff] mb-3">Continuing Education</h4>
                <p className="text-gray-300 text-sm">Advanced workshops and specializations for continuous professional growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strength & Conditioning Section */}
        <section id="strength-conditioning" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Offline/Online Strength & <span className="text-[#00c8ff]">Conditioning</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="w-full h-48 bg-gradient-to-r from-green-600 to-green-700 rounded-lg mb-6 flex items-center justify-center text-white font-bold text-xl">
                S&C Training Programs
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">Elite S&C Training Programs</h3>
              <p className="text-gray-300 leading-relaxed mb-4">UFTA offers specialized Strength and Conditioning (S&C) training programs designed for athletes, fitness enthusiasts, and aspiring S&C coaches. Our expert faculty, including renowned Sports & Exercise Scientists, deliver these programs both in-person at our state-of-the-art facilities and through comprehensive online modules.</p>
              <p className="text-gray-300 leading-relaxed">We focus on evidence-based methodologies to enhance athletic performance, prevent injuries, and optimize physical conditioning. Our training incorporates the latest research and practical techniques in sports science, ensuring you receive world-class coaching and education.</p>
            </div>
            
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">S&C Certification Courses</h3>
              <p className="text-gray-300 leading-relaxed mb-4">Become a certified Strength & Conditioning professional with UFTA. Our courses are designed to provide in-depth knowledge and practical skills.</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-[#00c8ff] mb-2">Accredited Advanced Diploma in Strength and Conditioning (Level-6):</h4>
                <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
                  <li>Price: ₹1,27,700</li>
                  <li>Duration: 7 months (including 1-month compulsory internship)</li>
                  <li>Eligibility: Minimum 20 years of age, holder of Diploma in Fitness Training (NSQF Level 5) or two years of experience as a gym trainer</li>
                  <li>Mode: Offline & Online</li>
                </ul>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">Our S&C courses equip you to design and implement effective training programs for diverse populations, from amateur athletes to elite competitors.</p>
              
              <a href="#contact-form" className="inline-block bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-6 py-2 rounded transition-all duration-300">
                Enroll Now
              </a>
            </div>
          </div>
        </section>

        {/* Professional Training Section */}
        <section id="professional-training" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Online/Offline Professional <span className="text-[#00c8ff]">Training</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <p className="text-center text-xl leading-relaxed mb-10 text-gray-300">Turn your passion for fitness into a rewarding career with UFTA's comprehensive professional training programs. We have certified over 2,500 fitness professionals since 2006.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Personal Training Certification */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="w-full h-32 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-sm">
                Personal Trainer Cert
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-white">Diploma in Professional Personal Fitness Training (Level-5)</h3>
              <p className="text-gray-400 mb-3 text-sm">Become a certified Personal Trainer, equipped with the skills to guide clients towards their fitness goals effectively and safely.</p>
              
              <ul className="list-disc pl-5 text-gray-300 space-y-1 text-xs mb-4">
                <li>Price: ₹95,000</li>
                <li>Duration: 6 months (incl. 1-month internship)</li>
                <li>Eligibility: 18+ years, 10+2 diploma, 1-year weight training experience</li>
                <li>Mode: Offline & Online</li>
              </ul>
              
              <a href="#contact-form" className="inline-block bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded text-xs transition-all duration-300">
                Learn More
              </a>
            </div>

            {/* Group Fitness Training */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="w-full h-32 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-sm">
                Group Fitness Cert
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-white">Diploma in Professional Group Fitness Training (Level-5)</h3>
              <p className="text-gray-400 mb-3 text-sm">Master the art of leading dynamic and effective group fitness classes, catering to diverse fitness levels and interests.</p>
              
              <ul className="list-disc pl-5 text-gray-300 space-y-1 text-xs mb-4">
                <li>Price: ₹95,000</li>
                <li>Duration: 6 months (incl. 1-month internship)</li>
                <li>Eligibility: 18+ years, 10+2 diploma, 1-year weight training experience</li>
                <li>Mode: Offline & Online</li>
              </ul>
              
              <a href="#contact-form" className="inline-block bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded text-xs transition-all duration-300">
                Learn More
              </a>
            </div>

            {/* Gym Management */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="w-full h-32 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-sm">
                Gym Management Cert
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-white">Diploma in Fitness & Gym Management (Level-7)</h3>
              <p className="text-gray-400 mb-3 text-sm">Gain the expertise to manage fitness centers and gyms efficiently, covering operations, marketing, and client relations.</p>
              
              <ul className="list-disc pl-5 text-gray-300 space-y-1 text-xs mb-4">
                <li>Price: ₹1,53,776</li>
                <li>Duration: 12 months (incl. 1-month internship)</li>
                <li>Eligibility: 21+ years, Diploma in S&C (NSQF L6), 2 years S&C coach experience</li>
                <li>Mode: Offline & Online</li>
              </ul>
              
              <a href="#contact-form" className="inline-block bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded text-xs transition-all duration-300">
                Learn More
              </a>
            </div>

            {/* Sports Injury Rehabilitation */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="w-full h-32 bg-gradient-to-r from-red-600 to-red-700 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-sm">
                Injury Rehab Cert
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-white">Professional Diploma in Sports Injury Rehabilitation & Return to Performance (Level-7)</h3>
              <p className="text-gray-400 mb-3 text-sm">Specialize in sports injury rehabilitation, helping athletes recover and return to peak performance safely and effectively.</p>
              
              <ul className="list-disc pl-5 text-gray-300 space-y-1 text-xs mb-4">
                <li>Price: ₹1,25,250</li>
                <li>Duration: 8 months (incl. 1-month internship)</li>
                <li>Eligibility: 21+ years, relevant diplomas or degree, 3 years S&C coach experience</li>
                <li>Mode: Offline & Online</li>
              </ul>
              
              <a href="#contact-form" className="inline-block bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded text-xs transition-all duration-300">
                Learn More
              </a>
            </div>

            {/* PROPTA Certification */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="w-full h-32 bg-gradient-to-r from-green-600 to-green-700 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-sm">
                PROPTA PT Cert
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-white">PROPTA International Personal Trainer Certification</h3>
              <p className="text-gray-400 mb-3 text-sm">Achieve a globally recognized Personal Trainer certification from PROPTA USA, valid in 199 countries. Endorsed by IFBB Pro League & BSE, Govt of California.</p>
              
              <ul className="list-disc pl-5 text-gray-300 space-y-1 text-xs mb-4">
                <li>Price: $1800 USD</li>
                <li>Duration: 6 Weeks (Online/Offline Blend Mode)</li>
                <li>Eligibility: 18+ years, CPR/AED certification required for graduation</li>
              </ul>
              
              <a href="#contact-form" className="inline-block bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded text-xs transition-all duration-300">
                Learn More
              </a>
            </div>

            {/* University Degrees */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="w-full h-32 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-sm">
                University Degrees
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-white">University Affiliated Degree Programs</h3>
              <p className="text-gray-400 mb-3 text-sm">UFTA is the first institute in India to launch a UGC approved B.Sc. in Fitness and Athletic Conditioning in association with Mahapurusha Srimanta Sankaradeva Viswavidyalaya. We also offer other degree pathways.</p>
              
              <a href="#contact-form" className="inline-block bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded text-xs transition-all duration-300 mt-4">
                Explore Degrees
              </a>
            </div>
          </div>
        </section>

        {/* Nutritional Counselling Section */}
        <section id="nutritional-counselling" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c2.463 0 4.725-.924 6.407-2.552M12 21.75c-2.463 0-4.725-.924-6.407-2.552M12 21.75V14.25M12 14.25A6.375 6.375 0 0 0 12 1.75a6.375 6.375 0 0 0-6.375 6.375c0 2.758 1.68 5.132 4.068 6.016M12 1.75a6.375 6.375 0 0 1 6.375 6.375c0 2.758-1.68 5.132-4.068 6.016m0 0H7.932m8.136 0H12m0 0V6.375m0 7.875A2.625 2.625 0 1 0 12 1.75a2.625 2.625 0 0 0 0 5.25m0 7.5a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Online/Offline Nutritional <span className="text-[#00c8ff]">Counselling & Education</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="w-full h-48 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg mb-6 flex items-center justify-center text-white font-bold text-xl">
                Nutrition Guidance
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">Personalized Nutritional Counselling</h3>
              <p className="text-gray-300 leading-relaxed mb-4">UFTA's certified sports nutritionists and exercise scientists offer personalized online and offline nutritional counselling. We develop evidence-based dietary plans tailored to your specific fitness goals, whether for athletic performance enhancement, weight management, improving body composition, or overall health and wellness.</p>
              <p className="text-gray-300 leading-relaxed mb-6">Our approach is scientific, practical, and sustainable.</p>
              
              <a href="#contact-form" className="inline-block bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-6 py-2 rounded transition-all duration-300">
                Book a Consultation
              </a>
            </div>
            
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">Sports Nutrition Certification Courses</h3>
              <p className="text-gray-300 leading-relaxed mb-4">Gain expertise in the science of sports nutrition and learn to advise athletes and active individuals effectively.</p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-[#00c8ff] mb-2">Accredited Advanced Diploma in Sports & Exercise Nutrition (Level-6):</h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
                    <li>Price: ₹1,27,700</li>
                    <li>Mode: Offline & Online</li>
                    <li>Details on duration and eligibility will be provided upon inquiry</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#00c8ff] mb-2">PROPTA International Sports Nutrition Certification:</h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
                    <li>Price: $1800 USD</li>
                    <li>Mode: Online/Offline Blend Mode</li>
                    <li>Includes courses like Nutrition Tech (CNT) and Nutrition Consultant (CNC)</li>
                  </ul>
                </div>
              </div>
              
              <a href="#contact-form" className="inline-block bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-6 py-2 rounded transition-all duration-300">
                Enroll in Course
              </a>
            </div>
          </div>
        </section>

        {/* Gym Equipment Sourcing Section */}
        <section id="gym-equipment" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5A2.25 2.25 0 0 1 6.75 5.25h10.5a2.25 2.25 0 0 1 2.25 2.25v3.75a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V7.5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25V3m13.5 2.25V3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 13.5v2.25m13.5-2.25v2.25" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15.75h9" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Gym Equipment <span className="text-[#00c8ff]">Sourcing</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 flex flex-col md:flex-row items-center gap-10 hover:border-[#00c8ff] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            <div className="w-full md:w-2/5 h-48 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              Gym Equipment
            </div>
            
            <div className="md:w-3/5">
              <h3 className="text-2xl font-semibold mb-4 text-white">Source High-Quality Gym Equipment</h3>
              <p className="text-gray-300 leading-relaxed mb-3">Planning to set up a new gym or upgrade your existing facility? UFTA can assist you in sourcing top-quality, durable, and biomechanically sound fitness equipment. Through our strategic partnerships, including with entities like XSPORTON FITNESS, an exclusive showroom for brands such as Realleader Fitness USA, we connect you with reliable sellers and a wide range of equipment options to suit your specific requirements and budget.</p>
              <p className="text-gray-300 leading-relaxed mb-6">Our guidance ensures you invest in equipment that provides the best training experience and long-term value for your fitness center.</p>
              
              <a href="#contact-form" className="inline-block bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-6 py-3 rounded transition-all duration-300">
                Inquire About Equipment
              </a>
            </div>
          </div>
        </section>

        {/* Gym Franchise Section */}
        <section id="gym-franchise" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21H5.25A2.25 2.25 0 0 1 3 18.75V16.5M13.5 21V11.25M13.5 21H21M3.75 10.5V18.75c0 .621.504 1.125 1.125 1.125H9.75V11.25H3.75Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a2.25 2.25 0 1 0-4.5 0h4.5Zm0 0V3.75m4.125 2.25V3.75m0 0H21m-4.125 0a2.25 2.25 0 1 0-4.5 0h4.5Z" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Gym Franchise & Setup <span className="text-[#00c8ff]">Consultancy</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 flex flex-col md:flex-row-reverse items-center gap-10 hover:border-[#00c8ff] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            <div className="w-full md:w-2/5 h-48 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              Gym Franchise
            </div>
            
            <div className="md:w-3/5">
              <h3 className="text-2xl font-semibold mb-4 text-white">Launch Your Own Fitness Center</h3>
              <p className="text-gray-300 leading-relaxed mb-3">Dreaming of owning a successful fitness center? UFTA offers expert consultancy and support for aspiring gym owners. While we currently do not offer a direct franchise model, we provide comprehensive guidance on setting up and managing your gym, drawing from our extensive experience since 2006 in the fitness industry.</p>
              <p className="text-gray-300 leading-relaxed mb-6">Our consultancy services cover facility design, equipment selection, operational strategies, staff training, and marketing to help you establish a thriving fitness business. Explore potential opportunities to leverage our expertise and build a recognized fitness brand.</p>
              
              <a href="#contact-form" className="inline-block bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-6 py-3 rounded transition-all duration-300">
                Discuss Your Project
              </a>
            </div>
          </div>
        </section>

        {/* Merchandise Section */}
        <section id="merchandise" className="py-16 fade-in-section">
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 3.545A2.25 2.25 0 0 0 10.5 1.5h-3A2.25 2.25 0 0 0 5.25 3.545m0 0v1.909A2.25 2.25 0 0 0 7.5 7.5h9A2.25 2.25 0 0 0 18.75 5.454V3.545m0 0h4.5m-4.5 0a2.25 2.25 0 0 1-2.25-2.25h-3a2.25 2.25 0 0 1-2.25 2.25m16.5 0H3.375" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              UFTA <span className="text-[#00c8ff]">Merchandise</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 text-center hover:border-[#00c8ff] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            <div className="w-full max-w-md mx-auto h-48 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg mb-6 flex items-center justify-center text-white font-bold text-xl">
              UFTA Merch Coming Soon
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-white">Show Your UFTA Pride (Coming Soon!)</h3>
            <p className="text-gray-300 leading-relaxed mb-3">Get ready to represent the Universal Fitness Training Academy spirit! We are excited to announce that an exclusive line of UFTA merchandise will be launching soon. Our collection will feature high-quality apparel, including performance activewear and comfortable casuals, along with essential fitness accessories like gym bags, water bottles, and more.</p>
            <p className="text-gray-300 leading-relaxed">Each item will be designed with the quality and dedication that UFTA stands for. Stay tuned for the official launch of our online store and be the first to get your hands on UFTA branded gear!</p>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 fade-in-section">
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 relative overflow-hidden">
            <div className="flex items-center justify-center mb-10">
              <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <h2 className="text-4xl font-bold text-white text-center relative">
                Get in <span className="text-[#00c8ff]">Touch</span>
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
              </h2>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#00c8ff]/30 opacity-70"></div>
            
            <p className="text-center text-xl leading-relaxed mb-10 text-gray-300">Interested in our services or courses? Contact us today for more information or to start your fitness journey with UFTA.</p>
            
            <form className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Name</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full p-2.5" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full p-2.5" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-300">Service of Interest</label>
                <select id="service" name="service" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full p-2.5">
                  <option defaultValue disabled>Select a service</option>
                  <option>Strength & Conditioning</option>
                  <option>Professional Training</option>
                  <option>Nutritional Counselling</option>
                  <option>Gym Equipment</option>
                  <option>Merchandise</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" name="message" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full p-2.5" placeholder="How can we help you?"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-8 py-3 rounded transition-all duration-300 w-full md:w-auto">
                  Send Message
                </button>
              </div>
            </form>
            
            <p className="text-center text-md leading-relaxed mt-8 text-gray-300">
              Or call us directly at: <a href="tel:+919864047046" className="text-[#00c8ff] hover:underline font-semibold">+91-9864047046</a> / <a href="tel:+919864026682" className="text-[#00c8ff] hover:underline font-semibold">+91-9864026682</a>
            </p>
            <p className="text-center text-md leading-relaxed text-gray-300">
              Email: <a href="mailto:bibhuuniversal@gmail.com" className="text-[#00c8ff] hover:underline font-semibold">bibhuuniversal@gmail.com</a> or <a href="mailto:info@bibhuuniversalfitness.com" className="text-[#00c8ff] hover:underline font-semibold">info@bibhuuniversalfitness.com</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </UftaLayout>
  )
}

export const Head = () => <Seo title="Our Services - Universal Fitness Training Academy" />

export default ServicesPage
