import React from "react";

const Table = ({ rows, data, addFunction, tableNames }) => {
  const getValue = (data, tableName, row) => {
    if (tableName in data && row in data[tableName]) {
      return data[tableName][row];
    } else {
      return "Add Score";
    }
  };

  const createRows = name => {
    return (
      <div>
        {rows.map((row, index) => (
          <div key={index} className="Box-row d-flex flex-justify-between">
            {row}
            <input
              className="form-control input-sm"
              type="text"
              placeholder={getValue(data, name, row)}
              onChange={event => addFunction(name, row, event.target.value)}
            />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="col-lg-4 col-md-6 mx-auto pt-5 px-3">
      <h2 className="mb-3">Grades</h2>
      {tableNames.length > 0 ? (
        tableNames.map((name, index) => (
          <div key={index} className="Box mb-4">
            <div className="Box-header Box-title">{name}</div>
            <div>{createRows(name)}</div>
          </div>
        ))
      ) : (
        <p>Grades will appear here</p>
      )}
    </div>
  );
};

export default Table;
