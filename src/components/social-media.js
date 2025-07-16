import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaBlogger,
} from "react-icons/fa";

// SVG icon paths for each social platform
const ICONS = {
  linkedin: <FaLinkedin className="w-6 h-6" color="#0077B5" />,
  instagram: <FaInstagram className="w-6 h-6" color="#E4405F" />,
  facebook: <FaFacebook className="w-6 h-6" color="#1877F3" />,
  youtube: <FaYoutube className="w-6 h-6" color="#FF0000" />,
  blog: <FaBlogger className="w-6 h-6" color="#FF9800" />,
};

const SOCIALS = [
  {
    name: "LinkedIn",
    key: "linkedin",
    href: "https://www.linkedin.com/in/fitnesswithbibhu2003",
  },
  {
    name: "Instagram",
    key: "instagram",
    href: "https://www.instagram.com/ufta_fitnessacademy",
  },
  {
    name: "Facebook",
    key: "facebook",
    href: "https://www.facebook.com/universalfitnesstrainingacademy/",
  },
  {
    name: "YouTube",
    key: "youtube",
    href: "https://www.youtube.com/@FitnessWithBibhuMoniSingha",
  },
];

const SocialMedia = ({
  className = "",
  iconClass = "",
  linkClass = "",
  style = {},
}) => (
  <div className={`flex space-x-4 ${className}`} style={style}>
    {SOCIALS.map((social) => (
      <a
        key={social.key}
        href={social.href}
        aria-label={social.name}
        target="_blank"
        rel="noopener noreferrer"
        className={`group bg-[#141414] hover:bg-[#1A1A1A] p-3 rounded-full border border-[#2A2A2A] hover:border-[#00c8ff]/30 transition-all duration-300 ${linkClass}`}
      >
        <span className="sr-only">{social.name}</span>
        <span
          className={`text-gray-400 group-hover:text-[#00c8ff] transition-colors duration-300 ${iconClass}`}
        >
          {ICONS[social.key]}
        </span>
      </a>
    ))}
  </div>
);

export default SocialMedia;
