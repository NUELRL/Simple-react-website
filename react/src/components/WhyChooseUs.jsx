import { motion } from "motion/react";

import MonitoringIcon from "../assets/monitoring.svg";
import BoltIcon from "../assets/electricbolt.svg";
import PalleteIcon from "../assets/pallete.svg";

import ReliabilityImage from "../assets/reliability.svg";
import ScalableInfrastructureImage from "../assets/ScalableInfrastructure.svg";
import ModularDesignImage from "../assets/ModularDesign.svg";
import PerformanceImage from "../assets/Performance.svg";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function WhyChooseUs() {
  return (
    <div className="max-w-[85rem] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 mx-auto my-8 sm:my-12">
      <div className="mx-auto max-w-2xl mb-6 sm:mb-10 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-bold"
          {...fadeIn(0)}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="mt-2 text-gray-600 text-sm sm:text-base"
          {...fadeIn(0.1)}
        >
          Reliable, scalable, and ready for any challenge.
        </motion.p>
      </div>

      <motion.div
        className="mx-auto max-w-3xl grid grid-cols-3 gap-4 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <IconWithText src={BoltIcon}>High Performance</IconWithText>
        <IconWithText src={MonitoringIcon}>
          Scalable Infrastructure
        </IconWithText>
        <IconWithText src={PalleteIcon}>Modular Design</IconWithText>
      </motion.div>

      <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 items-center gap-2 sm:gap-4 lg:gap-6">
        <FeatureImg src={PerformanceImage} delay={0.1} />
        <FeatureImg src={ScalableInfrastructureImage} delay={0.2} />
        <FeatureImg src={ModularDesignImage} delay={0.3} />
        <FeatureImg src={ReliabilityImage} delay={0.4} />
      </div>
    </div>
  );
}

export default WhyChooseUs;

function IconWithText({ src, children }) {
  return (
    <motion.div className="text-center" variants={itemVariants}>
      <img
        src={src}
        className="mx-auto w-10 h-10 sm:w-14 sm:h-14 object-contain"
        alt={children}
      />
      <div className="mt-2 sm:mt-4">
        <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 text-center">
          {children}
        </h3>
      </div>
    </motion.div>
  );
}

function FeatureImg({ src, delay }) {
  return (
    <motion.div className="w-full h-24 sm:h-32" {...fadeIn(delay)}>
      <img
        src={src}
        className="size-full object-cover object-center rounded-xl"
        alt="Features Image"
      />
    </motion.div>
  );
}
