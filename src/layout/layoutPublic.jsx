import Footer from "@/components/footer";
import MainNavbar from "@/components/navBar/mainNavbar";

import React from "react";
import { Outlet } from "react-router-dom";
const LayoutPublic = () => {
  return (
    <>
    <MainNavbar/>
    
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutPublic;
