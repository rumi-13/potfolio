// src/pages/Projects.jsx
import React from "react";

const projects = [
  {
    img: "/src/assets/atlas.png",
    title: "Country Atlas",
    liveLink: "https://rumi-13.github.io/Country-Atlas/",
  },
  {
    img: "/src/assets/ustream.png",
    title: "Ustream",
    liveLink: "https://github.com/rumi-13/Ustream",
  },
  {
    img: "/src/assets/tasktracker.png",
    title: "Task Tracker",
    liveLink: "https://rumi-13.github.io/Task-Tracker/",
  },
  {
    img: "/src/assets/bargekebab.png",
    title: "Barg-E-Kebab",
    liveLink: "https://rumi-13.github.io/Barg-E-Kebab/",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-16 md:px-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-[Roboto]">
      <h2 className="text-3xl sm:text-4xl font-[Poppins] font-bold text-center mb-10">
        Projects in Reflection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-md p-4 shadow-md hover:shadow-lg border border-white/40 dark:border-white/10"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-36 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm bg-primary text-white px-4 py-1 rounded-full hover:bg-primary/90 transition"
            >
              Link →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
