import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav className={theme === "dark" ? "light__navbar" : "dark__navbar"}>
      <div className="n__logo">
        <strong>musiur</strong>
      </div>
      <div className="n__links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="n__github">
        <a href="https://github.com/musiur/context-api-in-next-js">Github</a>
      </div>
    </nav>
  );
};

export default Navbar;
