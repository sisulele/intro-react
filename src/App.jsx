import React, { useState } from "react";
import Table from "./components/Table";
import List from "./components/List";

const App = () => {
  const [buttonClicked, setButtonClicked] = useState("none");
  const [assignments, setAssigments] = useState([]);
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});

  const handleButtonClicked = buttonName => {
    setButtonClicked(buttonName);
  };

  /*Check out this addAssignment method*/
  const addAssignment = assignmentName => {
    setAssigments(assignments.concat(assignmentName));
  };

  /*Write an addStudent method here*/
  const addStudent = studentName => {
    setStudents(students.concat(studentName));
  };

  const addGrade = (assignment, student, score) => {
    let newGrades = { ...grades };
    let assignmentName = assignment;
    let studentName = student;
    if (!(assignment in newGrades)) {
      newGrades[assignmentName] = {};
    }
    newGrades[assignmentName][studentName] = score;
    // setState({ grades: grades });
    setGrades(newGrades);
  };

  let tabChoice = <h4 className="text-center mt-3">gradebook is empty</h4>;

  /*Uncomment below to render assignments*/
  if (buttonClicked === "assignments") {
    tabChoice = (
      <List
        placeholder="Add Assignment..."
        currList={assignments}
        addFunction={addAssignment}
        title="Assignments"
      />
    );
  } else if (buttonClicked === "students") {
    tabChoice = (
      <List
        placeholder="Add Student..."
        currList={students}
        addFunction={addStudent}
        title="Student Roster"
      />
    );
  } else if (buttonClicked === "grades") {
    tabChoice = (
      <Table
        tableNames={assignments}
        rows={students}
        addFunction={addGrade}
        data={grades}
      />
    );
  }

  return (
    <div>
      <div className="Box Box--spacious f4">
        <header className="py-4 bg-gray-light">
          <h1 className="text-center">GradeBook</h1>
        </header>
      </div>
      <nav className="UnderlineNav d-flex flex-justify-center">
        <div className="UnderlineNav-body BtnGroup mr-2 py-4">
          <Button onClick={handleButtonClicked}>assignments</Button>
          <Button onClick={handleButtonClicked}>students</Button>
          <Button onClick={handleButtonClicked}>grades</Button>
        </div>
      </nav>
      {tabChoice}
    </div>
  );
};

const Button = ({ children, onClick }) => (
  <button
    className="btn BtnGroup-item"
    style={{ textTransform: "capitalize" }}
    onClick={() => onClick(children.toLowerCase())}
  >
    {children}
  </button>
);

export default App;
