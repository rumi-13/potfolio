// components/Education.jsx
import React from "react";
import MilestoneCard from "../UI/MilestoneCard";
import { FaSchool, FaUserGraduate, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    title: "School",
    institution: "Harvard English Medium School, Bijbehara, Anantnag",
    duration: "Passed out in 2018",
    description: (
      <>
        Built strong foundational knowledge and developed early curiosity for science.
        <br />
        Class X: 89.60%
      </>
    ),
    icon: FaSchool,
  },
  {
    title: "High School",
    institution: "Public Senior Secondary School, Bijbehara, Anantnag",
    duration: "2018 – 2020",
    description: (
      <>
        Specialized in Science stream with distinction.
        <br />
        Class XII: 96.40%
      </>
    ),
    icon: FaUserGraduate,
  },
  {
    title: "University",
    institution: "University of Kashmir",
    duration: "2022 – Present",
    description: "Pursuing Bachelor of Computer Applications (Hons).",
    icon: FaUniversity,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="w-full min-h-screen py-12 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-bg-blue-50 to-bg-blue-80
 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-100 font-[Poppins] transition-colors duration-300 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              My{" "}
              <span className="text-orange-500 dark:text-yellow-300">Education</span>{" "}
              Journey
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A creative look at how I evolved academically
            </p>
          </div>

          {/* Timeline Container */}
          <div className="bg-[#D2E0FB] dark:bg-slate-900 shadow-md dark:shadow-lg rounded-2xl ring-1 ring-gray-100 dark:ring-gray-800 p-6 sm:p-8 lg:p-12">
            
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-yellow-400 dark:from-orange-500 dark:to-yellow-300 rounded-full shadow-sm"></div>
              
              {/* Timeline Cards */}
              <div className="flex flex-col gap-y-8 lg:gap-y-12">
                {educationData.map((edu, index) => (
                  <MilestoneCard
                    key={edu.title}
                    title={edu.title}
                    institution={edu.institution}
                    duration={edu.duration}
                    description={edu.description}
                    Icon={edu.icon}
                    align={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </div>
          </div>

          
          <div className="flex justify-center">
            <div className="flex items-center gap-x-2">
              <div className="w-3 h-3 bg-orange-400 dark:bg-yellow-300 rounded-full"></div>
              <div className="w-6 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 dark:from-orange-500 dark:to-yellow-300 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 dark:bg-orange-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;