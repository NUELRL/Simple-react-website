import AIImage from "../assets/AI.svg";
import CloudCompImage from "../assets/cloudComp.svg";
import MobileDevImage from "../assets/mobiledev.svg";
import BackendImage from "../assets/backend.svg";
import WebDevImage from "../assets/webdev.svg";
import TechConsultImage from "../assets/techconsult.svg";
import SolutionsImage from "../assets/solutions.svg";
import UiUxImage from "../assets/ui-ux.svg";
function Services() {
  return (
    <div>
      <h2 className="text-2xl font-bold sm:text-3xl text-center mt-25">
        OUR SERVICES
      </h2>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <IconWithText src={AIImage}>AI and Machine Learning</IconWithText>
          <IconWithText src={CloudCompImage}>Cloud Computing</IconWithText>
          <IconWithText src={MobileDevImage}>Mobile development</IconWithText>
          <IconWithText src={BackendImage}>
            Backend and API Development
          </IconWithText>
          <IconWithText src={WebDevImage}>Wed developent</IconWithText>
          <IconWithText src={TechConsultImage}>Tech consultation</IconWithText>
          <IconWithText src={SolutionsImage}>Computing solutions</IconWithText>
          <IconWithText src={UiUxImage}>UI-UX</IconWithText>
        </div>
      </div>
    </div>
  );
}

export default Services;

function IconWithText({ src = "", children }) {
  return (
    <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">
      <div className="flex justify-center items-center size-12 bg-linear-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
        <img
          src={src}
          className="shrink-0 size-7 text-white"
          width="24"
          height="24"
        />
      </div>

      <div className="mt-3">
        <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
          {children}
        </h3>
      </div>
    </div>
  );
}
