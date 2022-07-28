import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const About = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  
  return (
    <div className={`${theme} about`}>
      <h1>About</h1>
      <button onClick={toggleTheme}>
        Change theme to {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default About;
