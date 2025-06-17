function Listlink({ children, href }) {
  return (
    <li>
      <a
        href={href}
        className="text-lg font-medium text-gray-700 hover:text-cloud-accent transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

export default Listlink;
