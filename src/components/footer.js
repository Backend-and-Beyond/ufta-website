import * as React from "react";
import { Link } from "gatsby";
import SocialMedia from "./social-media";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-2 sm:gap-3 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">UFTA</h3>
            <p className="text-gray-400 mb-4">
              Excellence in fitness education and training.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>
                <Link to="/courses" className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-1 text-xs text-gray-400 mb-4">
              <li>bibhuuniversal@gmail.com</li>
              <li>+91 98640 47046</li>
              <li>+91 98640 26682</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-1 text-xs text-gray-400 mb-4">
              <li>
                <Link to="/courses" className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-white">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/job-placement" className="hover:text-white">
                  Careers
                </Link>
              </li>{" "}
              <li>
                <Link to="/high-performance" className="hover:text-white">
                  High Performance Clinic
                </Link>
              </li>{" "}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <SocialMedia />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-600 text-center text-gray-400">
          <p>
            © 2025 UFTA. All rights reserved. <br />
            Designed with ❤️ by{" "}
            <a
              href="https://backendandbeyond.com"
              className="relative text-[#00c8ff] font-semibold transition-colors duration-200 hover:text-indigo-400 focus:text-indigo-400"
              style={{
                textDecoration: "none",
              }}
            >
              Backend and Beyond
              <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-gradient-to-r from-[#00c8ff] to-indigo-500 opacity-60 rounded pointer-events-none transition-all duration-300 scale-x-100 group-hover:scale-x-110"></span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
