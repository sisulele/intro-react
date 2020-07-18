import React from "react";

const Nav = ({ handleView }) => (
  <nav className="UnderlineNav d-flex flex-justify-center">
    <div className="UnderlineNav-body BtnGroup mr-2 py-4">
      <Button onClick={handleView}>assignments</Button>
      <Button onClick={handleView}>students</Button>
      <Button onClick={handleView}>grades</Button>
    </div>
  </nav>
);

const Button = ({ children, onClick }) => (
  <button
    className="btn BtnGroup-item"
    style={{ textTransform: "capitalize" }}
    onClick={() => onClick(children.toLowerCase())}
  >
    {children}
  </button>
);

export default Nav;
