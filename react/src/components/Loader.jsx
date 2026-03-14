import Logo from "./Logo";

function Loader() {
  return (
    <div className="flex flex-col gap-10 w-full h-screen flex items-center justify-center mx-auto my-auto animate-pulse [animation-duration:1.5s]">
      <div className="animate-pulse">
        <Logo />
      </div>
    </div>
  );
}

export default Loader;
