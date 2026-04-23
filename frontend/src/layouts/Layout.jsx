
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      
      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default Layout;