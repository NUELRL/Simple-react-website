import Button from "./Button";

function NavButton({ className = "", children }) {
  return (
    <Button
      className={
        "inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0" +
        className
      }
    >
      {children}
    </Button>
  );
}

export default NavButton;
