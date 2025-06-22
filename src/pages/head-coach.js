import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { pageAnimations } from "../utils/animations";
import UftaLayout from "../components/ufta-layout";
import Navigation from "../components/navigation";
import PageHero from "../components/page-hero";
import Footer from "../components/footer";

const HeadCoachPage = ({ location }) => {
  const { fadeIn, fadeInUp, slideInLeft, slideInRight } =
    pageAnimations.standard;

  return (
    <UftaLayout>
      <Navigation location={location} />

      <PageHero
        title="Dr."
        titleHighlight={{ text: "Bibhu Moni Singha", color: "text-[#00c8ff]" }}
        subtitle="Director, UFTA"
        tagline={
          <>
            {/* <span className="text-[#00c8ff] font-bold">🏆 Director, UFTA</span>{" "}
            <span className="text-gray-400">|</span>{" "} */}
            <span className="text-amber-400 font-semibold">
              🧑‍🏫 Sr. Director, PROPTA USA
            </span>{" "}
            <span className="text-gray-400">|</span>{" "}
            <span className="text-green-400 font-semibold">
              🌍 IUSCA Rep & Advisory
            </span>{" "}
            <span className="text-gray-400">|</span>{" "}
            <span className="text-pink-400 font-semibold">
              💪 S&C Lead, KISCE
            </span>{" "}
            <span className="text-gray-400">|</span>{" "}
            <span className="text-purple-400 font-semibold">
              🏟️ S&C Expert, Somaiya
            </span>{" "}
            <span className="text-gray-400">|</span>{" "}
            <span className="text-yellow-400 font-semibold">
              🤝 Franchise Spokesperson, NITRRO Fitness
            </span>
          </>
        }
        imageAlt="UFTA High Performance Clinic Clinic"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.section
          className="py-12 md:py-20 bg-[#0F0F0F] min-h-screen"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <motion.h1
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-white font-poppins"
              variants={fadeInUp}
            >
              Dr. Bibhu Moni Singha
            </motion.h1> */}
            <motion.div
              className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10"
              variants={fadeInUp}
            >
              {/*               <div className="flex-shrink-0">
                <StaticImage
                  src="../images/bhibhu.png"
                  alt="Dr. Bibhu Moni Singha"
                  className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-amber-400/20 shadow-lg"
                  width={224}
                  height={224}
                />
              </div> */}
              <div className="text-gray-300 text-base md:text-lg leading-relaxed font-poppins md:text-justify">
                <p className="mb-4">
                  <span className="font-bold text-amber-400">
                    Dr. Bibhu Moni Singha
                  </span>{" "}
                  is an award-winning, globally recognized, and internationally
                  accredited Strength & Conditioning Expert, Sports & Exercise
                  Nutritionist, High-Performance Olympic Weightlifting Coach,
                  Injury Rehabilitation Specialist, and CASES UK Accredited
                  Sport & Exercise Scientist. Dr. Bibhu has presented numerous
                  papers at national and international conferences on topics
                  related to strength and conditioning, sports performance
                  enhancement, velocity-based training, sports and exercise
                  nutrition, injury rehabilitation, return to sport, and more.
                  He has also published several research articles in reputed
                  peer-reviewed journals.
                </p>
                <p className="mb-4">
                  His research article titled{" "}
                  <span className="italic">
                    “Age-Specific Considerations in Strength and Conditioning
                    Programs: A Narrative Review”
                  </span>{" "}
                  was selected for the Applied Science Awards at the 7th SCS
                  Annual Conference in Spain in 2024. He is frequently invited
                  as a subject matter expert to deliver guest lectures,
                  seminars, and workshops at top universities, sports clubs,
                  medical institutions, major sports organizations, and fitness
                  centers worldwide.
                </p>
                <p className="mb-4">
                  Dr. Bibhu has over <span className="font-bold">26 years</span>{" "}
                  of comprehensive experience, with more than{" "}
                  <span className="font-bold">93,000 hours</span> of work in the
                  sports, fitness, and nutrition industry both in India and
                  internationally. He has helped thousands of individuals from
                  diverse backgrounds—including track and field athletes,
                  Olympic weightlifters, boxers, bodybuilders, students,
                  businessmen, and bureaucrats—achieve their performance and
                  fitness goals.
                </p>
                <p className="mb-4">
                  Since 2001, he has trained over{" "}
                  <span className="font-bold">36,000 athletes and clients</span>
                  , and since 2006, he has certified more than{" "}
                  <span className="font-bold">
                    2,500 Personal Trainers, Strength & Conditioning Coaches,
                    and Sports Nutritionists
                  </span>
                  . Dr. Bibhu has trained under some of the most elite coaches
                  and experts in the sports performance and fitness industry
                  from the USA, Spain, and Italy. These include Olympic coaches
                  and professionals such as Mike McKenna (USAW National Coach),
                  Michael Conroy (Director of Coaching Education, USAW), Danny
                  Schlag (Adjunct Professor, Louisiana State University and
                  High-Performance Weightlifting Coach, USAW), Charles Glass
                  (Godfather of Bodybuilding), Chris Cormier, Big Will Harris,
                  Dr. Luca Zoffoli, Chris Hinshaw, Joe Antouri (trainer to elite
                  athletes, Hollywood celebrities, and rock stars), among
                  others.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-[#181818] rounded-lg p-6 md:p-10 mb-10 shadow-lg md:text-justify"
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4 font-poppins">
                Current Positions
              </h2>
              <ul className="list-disc list-inside text-gray-300 text-base md:text-lg font-poppins space-y-2">
                <li>
                  Director of Certification, Universal Fitness Training Academy
                  (since 2006)
                </li>
                <li>Senior Director & Examiner (Pan India), PROPTA USA</li>
                <li>
                  Sole Degree Accreditation Representative, IUSCA (Pan India)
                </li>
                <li>Member, Advisory Board – IUSCA and IJSC</li>
                <li>
                  Strength & Conditioning Expert (Lead), KISCE, DSYW, Govt. of
                  Assam
                </li>
                <li>
                  External Expert, S&C – Somaiya Sports Academy, Somaiya
                  Vidyavihar University, Mumbai
                </li>
                <li>
                  Franchise Spokesperson & Promoter (Pan India), NITRRO Fitness
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-[#181818] rounded-lg p-6 md:p-10 mb-10 shadow-lg md:text-justify"
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4 font-poppins">
                Achievements & Accreditations
              </h2>
              <ul className="list-disc list-inside text-gray-300 text-base md:text-lg font-poppins space-y-2">
                <li>
                  Internationally Accredited Level 8 Master International
                  Strength and Conditioning Practitioner (mISCP) by IUSCA, UK
                </li>
                <li>
                  USA Weightlifting Certified High-Performance Olympic
                  Weightlifting Coach
                </li>
                <li>
                  Certified Master Professional Personal Trainer & Sports
                  Nutritionist (PROPTA USA)
                </li>
                <li>
                  Advisory Board Member – International Journal of Strength &
                  Conditioning (IJSC) & IUSCA
                </li>
                <li>CASES UK Accredited Sport & Exercise Scientist</li>
                <li>
                  First Indian to introduce a four-year B.Sc. Fitness & Athletic
                  Conditioning (Honours) degree aligned with NEP 2020
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-[#181818] rounded-lg p-6 md:p-10 mb-10 shadow-lg md:text-justify"
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4 font-poppins">
                Awards & Recognitions
              </h2>
              <ul className="list-disc list-inside text-gray-300 text-base md:text-lg font-poppins space-y-2">
                <li>
                  Excellent Personal Trainer of the Year 2018 (Fitness
                  Excellence Awards, Taj Diplomatic Enclave, New Delhi)
                </li>
                <li>
                  India’s Best Fitness Trainer of the Year 2018 (India
                  Leadership Awards, presented by Soha Ali Khan)
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-[#181818] rounded-lg p-6 md:p-10 mb-10 shadow-lg md:text-justify"
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4 font-poppins">
                Research & Academic Contributions
              </h2>
              <ul className="list-disc list-inside text-gray-300 text-base md:text-lg font-poppins space-y-2">
                <li>
                  Presented at national and international conferences on
                  strength & conditioning, velocity-based training, sports
                  nutrition, and injury rehabilitation
                </li>
                <li>
                  Research paper “Age-Specific Considerations in Strength and
                  Conditioning Programs: A Narrative Review” won the Applied
                  Science Award at the 7th SCS Annual Conference in Spain (2024)
                </li>
                <li>
                  Published multiple peer-reviewed articles in reputed journals
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-[#181818] rounded-lg p-6 md:p-10 mb-10 shadow-lg md:text-justify"
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4 font-poppins">
                Speaker | Mentor | Innovator
              </h2>
              <ul className="list-disc list-inside text-gray-300 text-base md:text-lg font-poppins space-y-2">
                <li>
                  Delivered guest lectures, seminars, and workshops at top
                  universities, sports academies, and medical institutions
                  worldwide
                </li>
                <li>
                  Expertise in evidence-based strength & conditioning, sports
                  performance enhancement, injury rehabilitation &
                  return-to-sport protocols, Olympic weightlifting &
                  powerlifting coaching, and sports & exercise nutrition for
                  peak performance
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-[#181818] rounded-lg p-6 md:p-10 shadow-lg md:text-justify"
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4 font-poppins">
                Transforming the Future of Fitness & Sports Science
              </h2>
              <p className="text-gray-300 text-base md:text-lg font-poppins">
                Dr. Bibhu is committed to bridging the gap between academia and
                athletic performance, collaborating with 150+ global
                universities (including UCLA, Stanford, Yale via IUSCA) to
                elevate strength & conditioning education.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </UftaLayout>
  );
};

export default HeadCoachPage;
