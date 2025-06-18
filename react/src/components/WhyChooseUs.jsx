import { motion } from "motion/react";
///
///
///

import MonitoringIcon from "../assets/monitoring.svg";
import BoltIcon from "../assets/electricbolt.svg";
import PalleteIcon from "../assets/pallete.svg";

import ReliabilityImage from "../assets/reliability.svg";
import ScalableInfrastructureImage from "../assets/ScalableInfrastructure.svg";
import ModularDesignImage from "../assets/ModularDesign.svg";
import PerformanceImage from "../assets/Performance.svg";

function WhyChooseUs() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-25">
      <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
        <motion.h2
          className="text-3xl lg:text-4xl text-gray-800 font-bold"
          initial={{ x: "-50vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.2 }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="mt-3 text-gray-800"
          initial={{ x: "-50vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.6 }}
        >
          Reliable, scalable, and ready for any challenge.
        </motion.p>
      </div>

      <div className="mx-auto max-w-3xl grid grid-cols-3 gap-6 lg:gap-8">
        <IconWithText src={BoltIcon} delay={0.8}>
          High Performance
        </IconWithText>
        <IconWithText src={MonitoringIcon} delay={0.6}>
          Scalable Infrastructure
        </IconWithText>
        <IconWithText src={PalleteIcon} delay={0.4}>
          Modular Design
        </IconWithText>
      </div>

      <div className="mt-10 sm:mt-20 grid grid-cols-2 md:grid-cols-4 items-center gap-2 sm:gap-6 lg:gap-8">
        <FeatureImg src={PerformanceImage} delay={0.8} />
        <FeatureImg src={ScalableInfrastructureImage} delay={0.6} />
        <FeatureImg src={ModularDesignImage} delay={0.4} />
        <FeatureImg src={ReliabilityImage} delay={0.2} />
      </div>
    </div>
  );
}

export default WhyChooseUs;

function IconWithText({ src, children, delay }) {
  return (
    <motion.div
      className="text-center"
      initial={{ y: "10vh", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 - delay }}
    >
      <img
        src={src}
        className="shrink-0 size-9 md:size-9 mx-auto text-gray-800 md:w-[100px] h-[140px]"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        x="3"
        y="8"
        rx="2"
      />
      <div className="mt-2 sm:mt-6">
        <h3 className="sm:text-lg font-semibold text-gray-800 text-center">
          {children}
        </h3>
      </div>
    </motion.div>
  );
}
function FeatureImg({ src, delay }) {
  return (
    <motion.div
      className="w-full h-32"
      initial={{ y: "30vh", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 - delay }}
    >
      <img
        src={src}
        className="size-full object-cover object-center rounded-xl"
        alt="Features Image"
      />
    </motion.div>
  );
}
