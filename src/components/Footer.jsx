import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaHeart,
  FaRocket,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-50 dark:bg-slate-900 shadow-sm dark:shadow-lg ring-1 ring-slate-200 dark:ring-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="grid md:grid-cols-3 gap-8 items-center">
         
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xl font-semibold">
              <FaRocket className="text-blue-500 dark:text-yellow-300" />
              <span className="text-slate-800 dark:text-slate-100">
                Asgar Rashid
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 italic">
              "Crafting code & growing skills."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center text-black gap-4">
            <a
              href="mailto:asgar.rashid019@gmail.com"
              className="p-3 bg-slate-200 dark:bg-slate-400 rounded-full hover:bg-slate-300 dark:hover:bg-slate-300 transition"
              aria-label="Email"
              target="_blank"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/roohmee_/#"
              className="p-3 bg-slate-200 dark:bg-slate-400 rounded-full hover:bg-slate-300 dark:hover:bg-slate-300 transition"
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/rumi18"
              className="p-3 bg-slate-200 dark:bg-slate-400 rounded-full hover:bg-slate-300 dark:hover:bg-slate-300 transition"
              aria-label="LinkedIn"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>

       
          <div className="text-center md:text-right space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center justify-center md:justify-end gap-2">
            
              <FaHeart className="text-red-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
