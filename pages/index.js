import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1>Welcome!</h1>
      <p>Here we have implemented Context API in next js</p>
      <p>
        Basically, here we can switch our theme from dark to light and vice
        verca
      </p>
      <p>
        Visit <Link href="/about">About</Link> in order to switch theme.
      </p>
    </div>
  );
};

export default Home;
