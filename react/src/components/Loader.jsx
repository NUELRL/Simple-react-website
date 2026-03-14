import Logo from "./Logo";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="animate-pulse [animation-duration:1.5s]">
        <Logo />
      </div>
    </div>
  );
}

export default Loader;