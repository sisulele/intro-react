import React, { useState } from "react";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Table from "./components/Table";
import FormWithList from "./components/FormWithList";

const App = () => {
  const [view, setView] = useState("assignments");
  const [assignments, setAssigments] = useState([]);
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});

  const handleNav = viewTab => {
    setView(viewTab);
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

  if (view === "assignments") {
    tabChoice = (
      <FormWithList
        placeholder="Add Assignment..."
        currList={assignments}
        addFunction={addAssignment}
        title="Assignments"
      />
    );
  } else if (view === "students") {
    tabChoice = (
      <FormWithList
        placeholder="Add Student..."
        currList={students}
        addFunction={addStudent}
        title="Student Roster"
      />
    );
  } else if (view === "grades") {
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
      <Nav handleView={handleNav} />

      {tabChoice}
    </>
  );
};

export default App;
