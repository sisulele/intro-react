import React from "react";

const Button = ({ children, onClick }) => (
  <button
    className="btn BtnGroup-item"
    style={{ textTransform: "capitalize" }}
    onClick={() => onClick(children.toLowerCase())}
  >
    {children}
  </button>
);

export default Button;
