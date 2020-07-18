import React, { useState } from "react";

const List = ({ title, addFunction, placeholder, currList }) => {
  const [value, setValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    addFunction(value);
    setValue("");
  };

  return (
    <div className="col-5 mx-auto mt-5">
      {/*Replace the code below to call the title prop*/}
      <p className="h2">{title}</p>
      <form onSubmit={handleSubmit} className="mb-3">
        <label>
          <input
            className="form-control input-sm"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </label>
        <input className="btn btn-sm" type="submit" value="Submit" />
      </form>
      <ul className="Box">
        <div className="Box-header">{title}</div>
        {currList.map((item, index) => (
          <li className="Box-row" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
