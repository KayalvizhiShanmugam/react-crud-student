/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({ id: '', name: '', subject: '' });
  const [editing, setEditing] = useState(null);

  const addTeacher = () => {
    setTeachers([...teachers, newTeacher]);
    setNewTeacher({ id: '', name: '', subject: '' });
  };

  const editTeacher = (index) => {
    setEditing(index);
    setNewTeacher(teachers[index]);
  };

  const updateTeacher = () => {
    const updatedTeachers = [...teachers];
    updatedTeachers[editing] = newTeacher;
    setTeachers(updatedTeachers);
    setEditing(null);
    setNewTeacher({ id: '', name: '', subject: '' });
  };

  const deleteTeacher = (index) => {
    const updatedTeachers = teachers.filter((_, i) => i !== index);
    setTeachers(updatedTeachers);
  };

  return (
    <div>
      <h1>Teacher Management System</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
              <td>
                <button onClick={() => editTeacher(index)}>Edit</button>
                <button onClick={() => deleteTeacher(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={newTeacher.id}
          onChange={(e) => setNewTeacher({ ...newTeacher, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newTeacher.name}
          onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Subject"
          value={newTeacher.subject}
          onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
        />
        {editing !== null ? (
          <button onClick={updateTeacher}>Update</button>
        ) : (
          <button onClick={addTeacher}>Add</button>
        )}
      </div>
    </div>
  );
};

export default Teacher;