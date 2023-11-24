import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import React from "react";
import { Outlet } from "react-router-dom";
const LayoutPublic = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutPublic;
