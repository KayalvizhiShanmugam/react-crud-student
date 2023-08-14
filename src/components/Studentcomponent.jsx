/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ id: '', name: '', age: '' });
  const [editing, setEditing] = useState(null);

  const addStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({ id: '', name: '', age: '' });
  };

  const editStudent = (index) => {
    setEditing(index);
    setNewStudent(students[index]);
  };

  const updateStudent = () => {
    const updatedStudents = [...students];
    updatedStudents[editing] = newStudent;
    setStudents(updatedStudents);
    setEditing(null);
    setNewStudent({ id: '', name: '', age: '' });
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button onClick={() => editStudent(index)}>Edit</button>
                <button onClick={() => deleteStudent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={newStudent.id}
          onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Age"
          value={newStudent.age}
          onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
        />
        {editing !== null ? (
          <button onClick={updateStudent}>Update</button>
        ) : (
          <button onClick={addStudent}>Add</button>
        )}
      </div>
    </div>
  );
};

export default Student;