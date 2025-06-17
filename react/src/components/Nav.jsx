import Listlink from "./Listlink";
import NavButton from "./NavButton";
function Nav() {
  return (
    <nav className="fixed inset-0 top-[72px] bg-white z-40  md:hidden transition-transform duration-300 ease-in-out translate-x-full">
      <ul className="flex flex-col p-6 gap-6">
        <Listlink href="#solutions" children="Solutions" />
        <Listlink href="#features" children="Features" />
        <Listlink href="#testimonials" children="Testimonials" />
        <Listlink href="#pricing" children="Pricing" />

        <div className="flex flex-col gap-4 mt-4">
          <NavButton className=" hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-center">
            Log In
          </NavButton>
          <NavButton className=" shadow h-9 px-4 py-2 w-full justify-center bg-cloud-accent bg-blue-600 text-white">
            Get Started
          </NavButton>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
