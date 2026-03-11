import { useState } from "react";
import StudentForm from "./components/Studentform";
import StudentList from "./components/Studentlist";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (name) => {
    const newStudent = {
      id: Date.now(),
      name,
      showDetails: false,
      status: "absent"
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const toggleDetails = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, showDetails: !s.showDetails } : s
      )
    );
  };

  const markStatus = (id, value) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: value } : s
      )
    );
  };

  return (
    <div className="container">
      <h1>Student Attendance</h1>

      <StudentForm addStudent={addStudent} />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        toggleDetails={toggleDetails}
        markStatus={markStatus}
      />
    </div>
  );
}

export default App;