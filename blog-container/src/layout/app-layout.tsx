import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const AppLayout = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
