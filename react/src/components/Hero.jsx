import { motion } from "motion/react";

function Hero() {
  return (
    <div className="lg:h-[100svh] relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-1 before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="mt-5 max-w-xl text-center mx-auto">
          <motion.h1
            className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl"
            initial={{ transform: "translateY(40vh)", opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            whileInView={{ transform: "translatey(0)", opacity: 1 }}
          >
            UNLEASH THE POWER OF TECH 💪
          </motion.h1>
        </div>

        <motion.div
          className="mt-5 max-w-3xl text-center mx-auto"
          initial={{ transform: "translatey(20vw)", opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "linear" }}
          whileInView={{ transform: "translatey(0)", opacity: 1 }}
        >
          <p className="text-lg text-gray-600">
            Tired of spending time and money on unreliable developers? Discover
            passionate professionals who can quickly turn your vision into
            reality—whether it’s a new idea or an ongoing project!
          </p>
        </motion.div>
        <div className="mt-8 gap-3 flex justify-center">
          <motion.a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-hidden focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4"
            href="#"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ transform: "translatey(10vw)", opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "linear" }}
            whileInView={{ transform: "translatey(0)", opacity: 1 }}
          >
            GET STARTED
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
