import React from "react";
//import NavBar from "../Header/NavBar.jsx";
import NavBar from "../Header/navBar.jsx";
//import Pie from "../Footer/Pie.jsx";
import Pie from "../Footer/pie.jsx";
import NosotrosProvider from "../../contexts/Nosotros/NosotrosProvider";

const Layout = ({ children }) => {
  return (
    <>
      <div className="Wrapper">
        <NosotrosProvider>
          <NavBar />
          {children}
          <Pie />
        </NosotrosProvider>
      </div>
    </>
  );
};

export default Layout; 
