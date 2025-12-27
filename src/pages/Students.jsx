import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/students";

const Students = () => {
  const token = localStorage.getItem("token");

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [editId, setEditId] = useState(null);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // Fetch students
  const fetchStudents = async () => {
    const res = await axios.get(API, { headers });
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Add or Update student
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      // UPDATE
      await axios.put(
        `${API}/${editId}`,
        { name, email, course },
        { headers }
      );
      setEditId(null);
    } else {
      // CREATE
      await axios.post(
        API,
        { name, email, course },
        { headers }
      );
    }

    setName("");
    setEmail("");
    setCourse("");
    fetchStudents();
  };

  // Delete student
  const deleteStudent = async (id) => {
    await axios.delete(`${API}/${id}`, { headers });
    fetchStudents();
  };

  // Edit student
  const editStudent = (student) => {
    setEditId(student._id);
    setName(student.name);
    setEmail(student.email);
    setCourse(student.course);
  };

  return (
    <>
      <h2>Students Dashboard</h2>

      {/* FORM */}
      <form className="student-form" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <button type="submit">
          {editId ? "Update Student" : "Add Student"}
        </button>
      </form>

      {/* LIST */}
      <ul className="student-list">
        {students.map((s) => (
          <li key={s._id}>
            <span>
              {s.name} ({s.course})
            </span>

            <div className="student-actions">
              <button
                className="edit-btn"
                onClick={() => editStudent(s)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteStudent(s._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Students;
