import React from "react";

const Header = ({ title = "React App" }) => (
  <div className="Box Box--spacious f4">
    <header className="Box-header">
      <h1 className="text-center">{title}</h1>
    </header>
  </div>
);

export default Header;
