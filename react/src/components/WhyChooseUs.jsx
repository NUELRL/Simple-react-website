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
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold">
          Why Choose Us
        </h2>
        <p className="mt-3 text-gray-800">
          Reliable, scalable, and ready for any challenge.
        </p>
      </div>

      <div className="mx-auto max-w-3xl grid grid-cols-3 gap-6 lg:gap-8">
        <IconWithText src={BoltIcon}>High Performance</IconWithText>
        <IconWithText src={MonitoringIcon}>
          Scalable Infrastructure
        </IconWithText>
        <IconWithText src={PalleteIcon}>Modular Design</IconWithText>
      </div>

      <div className="mt-10 sm:mt-20 grid grid-cols-2 md:grid-cols-4 items-center gap-2 sm:gap-6 lg:gap-8">
        <FeatureImg src={PerformanceImage} />
        <FeatureImg src={ScalableInfrastructureImage} />
        <FeatureImg src={ModularDesignImage} />
        <FeatureImg src={ReliabilityImage} />
      </div>
    </div>
  );
}

export default WhyChooseUs;

function IconWithText({ src, children }) {
  return (
    <div className="text-center">
      <img
        src={src}
        className="shrink-0 size-7 md:size-9 mx-auto text-gray-800 w-[100px] h-[140px]"
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
        <h3 className="sm:text-lg font-semibold text-gray-800">{children}</h3>
      </div>
    </div>
  );
}
function FeatureImg({ src }) {
  return (
    <div className="w-full h-32">
      <img
        src={src}
        className="size-full object-cover object-center rounded-xl"
        alt="Features Image"
      />
    </div>
  );
}
