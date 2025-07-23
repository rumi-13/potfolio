import { FaChalkboardTeacher, FaFeather } from "react-icons/fa";
import heroimg from "../assets/heroimg.png"
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 md:px-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-[Roboto] space-y-24"
    >
      {/* Who Am I Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-shrink-0">
          <img
            src= {heroimg}
            alt="Rumi Portrait"
            className="w-64 h-64 object-cover rounded-full shadow-lg ring-4 ring-purple-400 dark:ring-purple-500"
          />
        </div>

        {/* Right: Text */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-[Poppins] font-bold text-center md:text-left">
            Who Am I?
          </h2>
          <p className="text-base  font-[Poppins] leading-relaxed text-slate-700 dark:text-slate-300  ">
            I'm Asgar Rashid — a curious soul from Anantnag, Jammu & Kashmir,
            part developer, part poet, forever a thinker. My journey started
            with a basic HTML tag and grew into building interactive apps with
            React. Outside of coding, I love reading and writing. I've had my
            poems featured on Rekhta, and I'm deeply interested in philosophy. I
            enjoy creating things — whether it's a user interface or a poem —
            and I'm always trying to find meaning in both code and ideas.
          </p>
        </div>
      </div>

      {/* My Journey Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold font-[Poppins] text-center mb-12">
          My Journey
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Teacher Card */}
          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-6 transition hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <FaChalkboardTeacher className="text-3xl text-purple-600 dark:text-purple-400" />
              <div>
                <h3 className="text-xl font-semibold">Teacher</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Sir Syed Memorial Public School, Bijbehara <br /> ( 2021 -
                  2022 )
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              For 1.5 years, I taught curious young minds where chalk met
              curiosity — as a science teacher, I turned complex ideas into
              simple wonders. From atoms to universe, I made learning fun,
              clear, and deeply human.
            </p>
          </div>

          {/* Poet Card */}
          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-6 transition hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <FaFeather className="text-3xl text-pink-500 dark:text-pink-300" />
              <div>
                <h3 className="text-xl font-semibold">Poet</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Featured on Rekhta
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              I write Urdu poetry that walks two paths — one woven with love and
              longing; the other rooted in resistance, pride, and devotion to my
              motherland "Mouj Kasheer 🫀". Featured on Rekhta — the world's largest
              Urdu poetry platform <br />
              <a
                href="https://www.rekhta.org/poets/muhammad-asgar-rumi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Read my poems →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
