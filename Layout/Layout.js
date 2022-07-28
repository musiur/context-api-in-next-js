import Navbar from "../components/Navbar";
import Contexts from "../contexts/Contexts";

const Layout = ({ children }) => {
  return (
    <Contexts>
      <>
        <Navbar />
        {children}
      </>
    </Contexts>
  );
};

export default Layout;
