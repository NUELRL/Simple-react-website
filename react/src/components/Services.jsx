import { motion } from "motion/react";

import AIImage from "../assets/AI.svg";
import CloudCompImage from "../assets/cloudComp.svg";
import MobileDevImage from "../assets/mobileDev.svg";
import BackendImage from "../assets/backend.svg";
import WebDevImage from "../assets/webdev.svg";
import TechConsultImage from "../assets/techconsult.svg";
import SolutionsImage from "../assets/solutions.svg";
import UiUxImage from "../assets/ui-ux.svg";

function Services() {
  return (
    <div className="max-w-[85rem] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 mx-auto my-8 sm:my-12">
      <motion.h2
        className="text-2xl font-bold sm:text-3xl text-center mb-6 sm:mb-10"
        initial={{ x: "-50vw" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        OUR SERVICES
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <IconWithText src={AIImage}>AI & Machine Learning</IconWithText>
        <IconWithText src={CloudCompImage}>Cloud Computing</IconWithText>
        <IconWithText src={MobileDevImage}>Mobile Development</IconWithText>
        <IconWithText src={BackendImage}>Backend & API</IconWithText>
        <IconWithText src={WebDevImage}>Web Development</IconWithText>
        <IconWithText src={TechConsultImage}>Tech Consultation</IconWithText>
        <IconWithText src={SolutionsImage}>Computing Solutions</IconWithText>
        <IconWithText src={UiUxImage}>UI / UX</IconWithText>
      </motion.div>
    </div>
  );
}

export default Services;

function IconWithText({ src, children }) {
  return (
    <motion.div
      className="h-32 sm:h-44 flex flex-col justify-center items-center border border-gray-200 rounded-xl text-center p-4 md:p-5"
      whileHover={{
        scale: 1.1,
        backgroundColor: "#e4d5ff",
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex justify-center items-center size-10 sm:size-12 bg-linear-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
        <img src={src} className="size-5 sm:size-6" alt={children} />
      </div>
      <div className="mt-3">
        <h3 className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
          {children}
        </h3>
      </div>
    </motion.div>
  );
}
