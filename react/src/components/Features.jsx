import { motion } from "motion/react";

//
//
//
import ScalableImage from "../assets/scalable.png";
import AgileImage from "../assets/agile.png";
import FeedbackImage from "../assets/feedback.png";

function Features() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-25">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
            <ImageCont className="col-span-4" src={ScalableImage} delay={0.1} />
            <ImageCont className="col-span-3" src={AgileImage} delay={0.2} />
            <ImageCont className="col-span-5" src={FeedbackImage} delay={0.3} />
          </div>
        </div>

        <div className="mt-9 sm:mt-10 lg:col-span-5">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <motion.h2
                className="font-bold text-3xl lg:text-4xl text-gray-800"
                initial={{ transform: "translateX(20vw)", opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "linear" }}
                whileInView={{ transform: "translateX(0)", opacity: 1 }}
              >
                Build your dedicated augmented team to scale up with confidence
                💯
              </motion.h2>
              <motion.p
                className="text-gray-500"
                initial={{ transform: "translateX(20vw)", opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "linear" }}
                whileInView={{ transform: "translateX(0)", opacity: 1 }}
              >
                As ideas evolve and customer expectations increase post-MVP, we
                provide a specialized team focused on rapidly scaling and
                enhancing your product to meet those changing needs.
              </motion.p>
            </div>

            <motion.ul
              className="space-y-2 sm:space-y-4"
              initial={{ transform: "translateX(20vw)", opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "linear" }}
              whileInView={{ transform: "translateX(0)", opacity: 1 }}
            >
              <Listitem>Continuous feedback integration</Listitem>
              <Listitem>Agile and flexible team structure</Listitem>
              <Listitem>Scalable technology foundation</Listitem>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

function ImageCont({ src, className, delay }) {
  return (
    <motion.div
      className={className}
      initial={{ filter: "blur(10px)", opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.2 + delay, ease: "linear" }}
      whileInView={{ filter: "blur(0)", opacity: 1 }}
    >
      <img className="rounded-xl" src={src} alt="Features Image" />
    </motion.div>
  );
}

function Listitem({ children }) {
  return (
    <li className="flex gap-x-3">
      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
        <svg
          className="shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <div className="grow">
        <span className="text-sm sm:text-base text-gray-500 font-bold">
          {children}
        </span>
      </div>
    </li>
  );
}
