import React, { Component } from "react";
import NavBar from "./Header/NavBar.jsx";
import Pie from "./Footer/Pie.jsx";

class Layout extends Component {
  render() {
    return (
      <>
        <div>
          <NavBar />
          <div className="container">{this.props.children}</div>
          <Pie />
        </div>
      </>
    );
  }
}

export default Layout;
