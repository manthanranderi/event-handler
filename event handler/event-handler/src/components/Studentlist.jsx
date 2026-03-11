import StudentCard from "./Studentcard";

function StudentList({ students, deleteStudent, toggleDetails, markStatus }) {
  if (!students.length) {
    return <p className="no-data">No Students Yet</p>;
  }

  return (
    <div className="student-list" >
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
          toggleDetails={toggleDetails}
          markStatus={markStatus}
        />
      ))}
    </div>
  );
}

export default StudentList;