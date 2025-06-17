import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 bg-[#ffffffaa] border-b-2 border-stone-100 backdrop-blur-[6px]">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
