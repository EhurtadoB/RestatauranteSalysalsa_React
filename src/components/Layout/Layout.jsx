import React from "react";
import NavBar from "../Header/NavBar.jsx";
import Pie from "../Footer/Pie.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Pie />
    </>
  );
};

export default Layout;
