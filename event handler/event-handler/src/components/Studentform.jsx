import { useRef, useState } from "react";

function StudentForm({ addStudent }) {
  const inputRef = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = inputRef.current.value.trim();

    if (!name) {
      setError("Enter student name");
      inputRef.current.focus();
      return;
    }

    addStudent(name);
    setError("");

    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="card" style={{ marginBottom: "20px" }}>
      <form onSubmit={handleSubmit} className="form">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter student name"
        />

        <button type="submit">Add Student</button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default StudentForm;