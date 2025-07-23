import SkillCard from "../UI/SkillCard";

const skillsData = [
  { skillName: "HTML", iconSrc: "/html.png" },
  { skillName: "CSS", iconSrc: "/css.png" },
  { skillName: "Tailwind", iconSrc: "/tailwind.png" },
  { skillName: "JavaScript", iconSrc: "/javascript.png" },
  { skillName: "React.js", iconSrc: "/react.png" },
  { skillName: "Git & GitHub", iconSrc: "/github.png" },
  { skillName: "Python", iconSrc: "/python.png" },
];

const Skills = () => {
  return (
    <section className="w-full min-h-screen bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 py-12 px-6 sm:px-8 lg:px-12 transition-colors duration-300 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-12">
         
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              My <span className="text-blue-600 dark:text-yellow-300">Skills</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid Container */}
          <div className="bg-white dark:bg-slate-900 shadow-md dark:shadow-lg rounded-2xl ring-1 ring-slate-200 dark:ring-gray-800 p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-8">
              {skillsData.map((skill) => (
                <SkillCard
                  key={skill.skillName}
                  skillName={skill.skillName}
                  iconSrc={skill.iconSrc}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 dark:from-blue-500 dark:to-yellow-300 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
