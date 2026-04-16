import React from "react";
import { motion } from "framer-motion";

// Import certifications
import deltaImg from "../assets/certifications/Delta-Full-Stack.png";
import mlImg from "../assets/certifications/supervised_ml.jpeg";
import reactImg from "../assets/certifications/advanced_react.jpeg";
import nasaImg from "../assets/certifications/NASA_Open_Science101.png";
import stylingImg from "../assets/certifications/advanced_styling.jpeg";
import googleImg from "../assets/certifications/google_prompting_essentials.jpeg";
import pythonImg from "../assets/certifications/Python_Programming.jpg";
import cyberImg from "../assets/certifications/CyberSecurity_Professional_Basic_Course.jpg";

const certifications = [
  {
    title: "Delta (Full Stack Web Development)",
    issuer: "Apna College",
    image: deltaImg,
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford Online, DeepLearning.AI",
    image: mlImg,
  },
  {
    title: "Advanced React",
    issuer: "Meta",
    image: reactImg,
  },
  {
    title: "NASA Open Science 101",
    issuer: "NASA",
    image: nasaImg,
  },
  {
    title: "Advanced Styling with Responsive Design",
    issuer: "University of Michigan",
    image: stylingImg,
  },
  {
    title: "Google Prompting Essentials",
    issuer: "Google",
    image: googleImg,
  },
  {
    title: "Programming with Python",
    issuer: "SimpliLearn",
    image: pythonImg,
  },
  {
    title: "Cyber Security Professional Basic Course",
    issuer: "CSC Academy",
    image: cyberImg,
  },
];

const Certifications = () => {
  return (
    <section className="w-full min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-6 sm:px-8 lg:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            My <span className="text-blue-600 dark:text-yellow-300">Certifications</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-[Poppins]">
            A testament to my continuous learning and professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ring-1 ring-slate-200 dark:ring-slate-700 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm font-medium">View Certificate</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <h3 className="text-lg lg:text-xl font-semibold leading-tight group-hover:text-blue-600 dark:group-hover:text-yellow-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-yellow-400"></div>
                  <p className="text-sm lg:text-base font-medium text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
