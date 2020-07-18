import React, { useState } from "react";

import Header from "./components/Header";
import Table from "./components/Table";
import List from "./components/List";
import Button from "./components/Button";

const App = () => {
  const [buttonClicked, setButtonClicked] = useState("assignments");
  const [assignments, setAssigments] = useState([]);
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});

  const handleButtonClicked = buttonName => {
    setButtonClicked(buttonName);
  };

  const addAssignment = assignmentName => {
    if (assignmentName.trim().length < 1) return;
    setAssigments(assignments.concat(assignmentName));
  };

  const addStudent = studentName => {
    if (studentName.trim().length < 1) return;
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
    <>
      <Header title="GradeBook" />

      <nav className="UnderlineNav d-flex flex-justify-center">
        <div className="UnderlineNav-body BtnGroup mr-2 py-4">
          <Button onClick={handleButtonClicked}>assignments</Button>
          <Button onClick={handleButtonClicked}>students</Button>
          <Button onClick={handleButtonClicked}>grades</Button>
        </div>
      </nav>
      {tabChoice}
    </>
  );
};

export default App;
