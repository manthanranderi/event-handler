function StudentCard({ student, deleteStudent, toggleDetails, markStatus }) {
  const { id, name, status, showDetails } = student;

  return (
    <div className="card student-card">
      <h3>  
        {name}
        <span className={status === "present" ? "present" : "absent"}>
          {status}
        </span>
      </h3>

      <div className="btn-group">
        <button onClick={() => toggleDetails(id)}>
          {showDetails ? "Hide" : "Details"}
        </button>

        <button className="delete" onClick={() => deleteStudent(id)}>
          Delete
        </button>
      </div>

      {showDetails && (
        <div className="status-btns">
          <button className="present-btn" onClick={() => markStatus(id, "present")}>
            Present
          </button>

          <button className="absent-btn" onClick={() => markStatus(id, "absent")}>
            Absent
          </button>
        </div>
      )}
    </div>
  );
}

export default StudentCard;