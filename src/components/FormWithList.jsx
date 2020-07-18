import React, { useState } from "react";

const FormWithList = ({ title, addFunction, placeholder, currList }) => {
  const [value, setValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    addFunction(value);
    setValue("");
  };

  return (
    <div className="col-lg-4 col-md-6 mx-auto mt-5 px-3">
      <h2 className="mb-3">{title}</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <span className="input-group-button">
            <input className="btn" type="submit" value="Submit" />
          </span>
        </div>
      </form>
      {currList.length > 0 && (
        <ul className="Box">
          <div className="Box-header">{title}</div>
          {currList.map((item, index) => (
            <li className="Box-row" key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormWithList;
