import * as React from "react";

const EventsConferencesSection = () => {

  // Conference data
  const conferences = [
    {
      title:
        "UFTA Annual International Conference on Sports & Exercise Science (UFTA-ICSES)",
      date: "Next Edition: February 20-22, 2026 (Guwahati, Assam)",
      description:
        "Our flagship conference, attracting researchers, academicians, coaches, and students from around the globe. Features keynote presentations, scientific paper sessions, poster presentations, and industry exhibitions.",
      details: [
        "Call for Abstracts: Opens August 2025",
        "Early Bird Registration: October 2025",
      ],
      color: "purple",
    },
    {
      title: "National Symposium on Fitness, Health & High Performance Clinic",
      date: "Planned for: November 2025 (In collaboration with Partner University)",
      description:
        "A national-level gathering focused on bridging the gap between research and practice in the Indian fitness ecosystem. This symposium will feature panel discussions on policy, skill development, and the role of technology in fitness.",
      details: [
        "Focus on NEP 2020 alignment for fitness education",
        "Industry-Academia collaboration sessions",
      ],
      color: "slate",
    },
  ];

  return (
    <section
      id="conferences"
      className="py-12 md:py-20 px-4 md:px-6 relative animate-fade-in"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-[#00c8ff]/10 to-purple-500/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Section Header */}
      <div 
        className="relative mb-8 md:mb-16 animate-slide-up"
      >
        <div className="absolute inset-0 bg-[#0A0A0A] h-36 md:h-48 -mx-4 sm:-mx-6 lg:-mx-8 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-[#00c8ff]/10 opacity-40"></div>
          <div className="absolute right-1/3 top-8 w-20 h-20 rounded-full bg-purple-500/10"></div>
          <div className="absolute left-1/3 bottom-8 w-16 h-16 rounded-full bg-[#00c8ff]/10"></div>
          <div className="absolute right-10 bottom-1/2 w-12 h-12 border border-purple-500/20 rounded-full"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center pt-4 md:pt-6">
          <div
            className="bg-gradient-to-r from-purple-500/20 to-[#00c8ff]/20 p-0.5 rounded-full mb-3 md:mb-5 shadow-lg hover:scale-105 hover:shadow-purple-500/20 hover:rotate-6 transition-all duration-300 animate-bounce-gentle"
          >
            <div className="bg-[#0A0A0A] p-3 md:p-4 rounded-full">
              <svg
                className="w-8 h-8 md:w-12 md:h-12 text-purple-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V3M3.75 14.25H2.25m1.5 0h3m-3 0H2.25m15.75 0h3m-3 0h1.5m-15.75 0H6.75m11.25 0h2.25m0 0h1.5m-18 0h2.25M12 7.5h.008v.008H12V7.5Z"
                />
              </svg>
            </div>
          </div>

          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center relative"
          >
            <span className="text-purple-400">International</span>{" "}
            <span>Conferences</span>
            <div className="h-1 w-24 md:w-40 bg-gradient-to-r from-purple-400 via-purple-500 to-[#00c8ff] mx-auto mt-2 md:mt-4"></div>
          </h2>

          <p
            className="text-center text-lg md:text-xl leading-relaxed mt-4 md:mt-6 text-gray-300 max-w-3xl px-4"
          >
            Join global leaders in sports science and exercise research at our
            prestigious conferences and symposiums
          </p>
        </div>
      </div>

      {/* Conference Cards */}
      <div
        className="space-y-6 md:space-y-8 max-w-5xl mx-auto relative"
      >
        {conferences.map((conference, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-4 md:p-6 lg:p-8 xl:p-10 shadow-xl relative overflow-hidden group hover:border-purple-400/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 animate-slide-up-delayed"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Card Header Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-purple-400 to-[#00c8ff] opacity-80 group-hover:h-2 transition-all duration-300"></div>

            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full -mt-10 -mr-10 blur-2xl group-hover:bg-purple-500/15 group-hover:scale-110 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00c8ff]/5 rounded-full -mb-10 -ml-10 blur-2xl group-hover:bg-[#00c8ff]/15 group-hover:scale-110 transition-all duration-700"></div>

            <div className="relative z-10">
              {/* Conference Badge */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-3">
                <span className="inline-block px-3 md:px-4 py-2 text-xs md:text-sm font-medium bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 w-fit hover:bg-purple-500/20 hover:scale-105 transition-all duration-300 animate-pulse-subtle">
                  {index === 0 ? "Annual Conference" : "National Symposium"}
                </span>
                <div className="flex space-x-2 overflow-x-auto animate-slide-in-right">
                  {[
                    {
                      label: "Presentations",
                      icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V3M3.75 14.25H2.25m1.5 0h3m-3 0H2.25m15.75 0h3m-3 0h1.5m-15.75 0H6.75m11.25 0h2.25m0 0h1.5m-18 0h2.25M12 7.5h.008v.008H12V7.5Z",
                    },
                    {
                      label: "Networking",
                      icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
                    },
                    {
                      label: "Research",
                      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                    },
                    {
                      label: "Exhibition",
                      icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z",
                    },
                  ].map((item, itemIndex) => (
                    <div key={itemIndex} className="group/item relative flex-shrink-0">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-400/10 flex items-center justify-center hover:bg-purple-400/20 hover:scale-110 hover:rotate-12 transition-all duration-300">
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4 text-purple-400 group-hover/item:text-purple-300 transition-colors duration-200"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d={item.icon}
                          />
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-gray-300 mt-1 block text-center">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conference Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-purple-400 group-hover:scale-105 transition-all duration-300 transform-gpu">
                {conference.title}
              </h3>

              {/* Conference Date */}
              <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4 font-medium flex items-center">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-purple-400 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {conference.date}
              </p>

              {/* Conference Description */}
              <p className="text-gray-300 mb-4 md:mb-5 text-sm md:text-base leading-relaxed">
                {conference.description}
              </p>

              {/* Conference Features List */}
              <div className="bg-[#0A0A0A]/80 border border-[#2A2A2A] rounded-lg p-3 md:p-4 mb-4 md:mb-6 group-hover:border-purple-500/30 group-hover:bg-[#0A0A0A]/90 transition-all duration-300">
                <h4 className="text-purple-400 font-semibold mb-2 md:mb-3 text-sm md:text-base group-hover:text-purple-300 transition-colors duration-200">
                  Key Information
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  {conference.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-300 text-xs md:text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conference Features Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
                {[
                  {
                    label: "Keynotes",
                    icon: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z",
                  },
                  {
                    label: "Posters",
                    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z",
                  },
                  {
                    label: "Awards",
                    icon: "M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0",
                  },
                  {
                    label: "Global",
                    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center group/icon">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-400/10 flex items-center justify-center mx-auto mb-1 md:mb-2 group-hover/icon:bg-purple-400/25 group-hover/icon:scale-110 group-hover/icon:rotate-12 transition-all duration-300">
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 text-purple-400 group-hover/icon:text-purple-300 transition-colors duration-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Action Buttons */}
              <div className="mt-auto flex flex-col gap-2 md:gap-3">
                <a
                  href="#contact"
                  className="flex-1 inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 text-xs md:text-sm text-center hover:scale-[1.05] active:scale-[0.95] hover:shadow-lg hover:shadow-purple-500/25 transform-gpu"
                >
                  {conference.title.includes("Annual")
                    ? "Conference Details"
                    : "Symposium Details"}
                </a>
                <a
                  href="/submit-abstract"
                  className="flex-1 inline-block bg-transparent border border-[#2A2A2A] hover:border-purple-400/50 text-gray-300 hover:text-purple-400 font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 text-xs md:text-sm text-center hover:scale-[1.05] active:scale-[0.95] hover:bg-purple-500/5 transform-gpu"
                >
                  Submit Abstract
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Conferences Button */}
      <div 
        className="flex justify-center mt-8 md:mt-12" 
      >
        {/*         <a 
          href="/conferences" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#141414] border border-[#2A2A2A] hover:border-purple-400 rounded-lg text-white hover:text-purple-400 transition-all duration-300 group hover:scale-105 active:scale-95"
        >
          <span className="font-semibold">View Past Conference Proceedings</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a> */}
      </div>
    </section>
  );
};

export default EventsConferencesSection;
