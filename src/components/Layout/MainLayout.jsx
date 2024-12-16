import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          toggleSidebar(true);
        } else {
          toggleSidebar(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
      handleResize();
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className="flex w-screen h-screen overflow-hidden bg-body_color">
      <div className={`w-0 md:w-[21rem]  h-full`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="">
          <div className="w-full h-[5rem]">
            <Header toggleSidebar={toggleSidebar} />
          </div>
          <div className="w-full h-[calc(100vh-8rem)] overflow-y-auto hidescroll">
            <Outlet />
          </div>
        </div>

        <div className="w-full h-[3rem] ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
