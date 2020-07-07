import React from "react";

const Nav = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Navbar</span>
      <span className="badge badge-pill badge-dark">{`${props.numActCounters}`}</span>
    </nav>
  );
};

export default Nav;
