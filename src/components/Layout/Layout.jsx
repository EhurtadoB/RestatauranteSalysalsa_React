import React from "react";
//import NavBar from "../Header/NavBar.jsx";
import NavBar from "../Header/navBar.jsx";
//import Pie from "../Footer/Pie.jsx";
import Pie from "../Footer/pie.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <div className="Wrapper">
        <NavBar />
        {children}
        <Pie />
      </div>
    </>
  );
};

export default Layout; 
