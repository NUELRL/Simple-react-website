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
    <section className="w-full px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 mt-32 sm:mt-40 lg:mt-48 mb-16 sm:mb-20 lg:mb-24">
      <div className="max-w-[85rem] mx-auto">

        <div className="mx-auto max-w-2xl mb-10 sm:mb-14 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-bold"
            {...fadeIn(0)}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="mt-3 text-gray-600 text-sm sm:text-base"
            {...fadeIn(0.1)}
          >
            Reliable, scalable, and ready for any challenge.
          </motion.p>
        </div>

        <motion.div
          className="mx-auto max-w-3xl grid grid-cols-3 gap-6 lg:gap-12 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <IconWithText src={BoltIcon}>High Performance</IconWithText>
          <IconWithText src={MonitoringIcon}>Scalable Infrastructure</IconWithText>
          <IconWithText src={PalleteIcon}>Modular Design</IconWithText>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 sm:gap-6 lg:gap-8">
          <FeatureImg src={PerformanceImage} delay={0.1} />
          <FeatureImg src={ScalableInfrastructureImage} delay={0.2} />
          <FeatureImg src={ModularDesignImage} delay={0.3} />
          <FeatureImg src={ReliabilityImage} delay={0.4} />
        </div>

      </div>
    </section>
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
      <div className="mt-3 sm:mt-4">
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