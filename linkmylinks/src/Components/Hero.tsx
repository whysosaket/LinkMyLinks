import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Illustration behind hero content */}
      <motion.div
        animate={["initial"]}
        variants={{
          initial: {
            y: [-20, 20],
            rotate: 0,
            transition: {
              delay: 0.8,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.2,
              repeatType: "reverse",
            },
          },
        }}
        className="hidden md:block absolute bottom-0 -left-24 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-3">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <motion.h1
              initial = {{y: 80, opacity: 0.6}}
              animate = {{y: 0, opacity: 1}}
              transition= {{duration: 0.2}}
              className="text-4xl md:text-7xl font-extrabold leading-tighter tracking-tighter"
              data-aos="zoom-y-out"
            >
              Save your links with
            </motion.h1>
            <motion.h1 
            initial = {{y: 80, opacity: 0.6}}
            animate = {{y: 0, opacity: 1}}
            transition= {{duration: 0.4}}
            className="text-6xl font-extrabold my-4 md:mb-4 leading-tighter tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 md:text-8xl w-full mb-4">
              LinkMyLinks
            </motion.h1>

            <div className="max-w-3xl mx-auto">
              <motion.div
              initial = {{y: 80, opacity: 0.3}}
              animate = {{y: 0, opacity: 1}}
              transition= {{duration: 0.6}}
              className="px-6">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Share and save all the importaant links on the go and access
                  them from anywhere. Create a free account and start using now.
                </p>
              </motion.div>

              <div
                className="max-w-xs mx-auto flex justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="800"
              >
                <motion.div 
                initial = {{y: 80, opacity: 0.3}}
                animate = {{y: 0, opacity: 1}}
                transition= {{duration: 0.8}}
                >
                  <Link
                    to="/signup"
                    className="px-3 py-3 rounded-lg m-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                  >
                    Create Account
                  </Link>
                </motion.div>
                <motion.div
                initial = {{y: 80, opacity: 0.3}}
                animate = {{y: 0, opacity: 1}}
                transition= {{duration: 0.8}}
                >
                  <Link
                    className="px-3 py-3 rounded-lg m-2 font-semibold text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    to="/about"
                  >
                    About Me
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
