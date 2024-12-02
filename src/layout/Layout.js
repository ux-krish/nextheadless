import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
