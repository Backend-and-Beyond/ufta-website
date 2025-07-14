import React from "react";

// SVG icon paths for each social platform
const ICONS = {
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-5 h-5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 20V9 M4 6a2 2 0 100-4 2 2 0 000 4z"
      />
    </svg>
  ),
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-5 h-5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 4h9a3.5 3.5 0 013.5 3.5v9a3.5 3.5 0 01-3.5 3.5h-9A3.5 3.5 0 014 16.5v-9A3.5 3.5 0 017.5 4zm9 14h.01M9 9.5a3 3 0 100 6 3 3 0 000-6z"
      />
    </svg>
  ),
  facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-5 h-5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
      />
    </svg>
  ),
  youtube: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-5 h-5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"
      />
    </svg>
  ),
  blog: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-5 h-5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 19.5A2.5 2.5 0 006.5 22h11a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0017.5 4h-11A2.5 2.5 0 004 6.5v13zM8 2v4m8-4v4M4 10h16"
      />
    </svg>
  ),
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
