import React from "react";

const Table = ({
  rows: students,
  data,
  addFunction,
  tableNames: assignments
}) => {
  // console.log("data", data, "rows", students, "tablenames", assignments);
  const getValue = (grades, assignment, student) => {
    if (assignment in grades && student in grades[assignment]) {
      return grades[assignment][student];
    } else {
      return "Add Score";
    }
  };

  const createRows = assignment => (
    <div>
      {students.map((student, index) => (
        <div key={index} className="Box-row d-flex flex-justify-between">
          {student}
          <input
            className="form-control input-sm"
            type="text"
            placeholder={getValue(data, assignment, student)}
            onChange={event =>
              addFunction(assignment, student, event.target.value)
            }
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="col-lg-4 col-md-6 mx-auto pt-5 px-3">
      <h2 className="mb-3">Grades</h2>
      {assignments.length > 0 ? (
        assignments.map((assignment, index) => (
          <div key={index} className="Box mb-4">
            <div className="Box-header Box-title text-uppercase">
              {assignment}
            </div>
            <div>{createRows(assignment)}</div>
          </div>
        ))
      ) : (
        <p>Grades will appear here</p>
      )}
    </div>
  );
};

export default Table;
