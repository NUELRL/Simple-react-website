import LogoImage from "../assets/LogoIcon.svg";
import Logo from "./Logo";

function Loader() {
  return (
    <div class="flex-col gap-10 w-full h-screen flex items-center justify-center mx-auto my-auto ">
      <Logo />
      <div class="w-14 h-14 border-4 text-violet-500 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-indigo-800 rounded-full">
        {/* <img src={LogoImage} height="16" width="16" class="animate-ping" alt="" /> */}
      </div>
    </div>
  );
}

export default Loader;
