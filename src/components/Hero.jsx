import { FaGithub } from "react-icons/fa";
import heroimg from "../assets/sticker.webp";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-blue-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-12 px-6 sm:px-8 lg:px-12 font-[Poppins] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                Hello! I am{" "}
                <span className="text-blue-600 dark:text-yellow-300">
                  Asgar Rashid
                </span>
              </h1>
              <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                MERN-Stack Developer
              </h2>
            </div>

            <div className="pt-4">
              <a
                href="https://github.com/rumi-13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-3 bg-blue-600 dark:bg-yellow-500 text-white dark:text-slate-900 px-6 py-3 lg:px-8 lg:py-4 rounded-2xl shadow-md dark:shadow-lg ring-1 ring-blue-100 dark:ring-yellow-400 hover:scale-105 hover:shadow-lg dark:hover:shadow-xl transition-all duration-200 font-medium text-base lg:text-lg"
              >
                <FaGithub className="text-lg lg:text-xl" />
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 relative flex justify-center lg:justify-end">
            {/* Background glow effects */}
            <div className="absolute -z-10 w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-400 to-yellow-200 dark:from-blue-600 dark:to-yellow-400 rounded-full blur-3xl opacity-20 dark:opacity-15"></div>
            <div className="absolute -z-10 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-yellow-300 to-orange-300 dark:from-yellow-500 dark:to-orange-500 rounded-full blur-2xl opacity-25 dark:opacity-20 translate-x-8 translate-y-8"></div>

            {/* Profile Image Container */}
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-blue-200 dark:border-yellow-300 shadow-lg dark:shadow-xl pl-10 ring-4 ring-blue-100 dark:ring-yellow-200 overflow-hidden group">
              <img
                src={heroimg}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 relative top-3"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-blue-300 dark:ring-yellow-300 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
