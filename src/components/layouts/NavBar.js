import React from "react";
import "./NavBar.css";

function NavBar() {
  function scrollTop() {
    console.log(">>>>>>>>hiii");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="container">
      <div className="nav fixed-top " onClick={scrollTop()}>
        <span className="textt">PokéDex</span>
      </div>
    </div>
  );
}

export default NavBar;
