import './App.css';
import { useState } from 'react';
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([
    {
      name: "Ansala Gunawardana",
      date: "16-09-2024",
      reg: "20IT0468"
    },
    {
      name: "Isuru Sandeepa",
      date: "16-09-2024",
      reg: "20IT0496"
    },
    {
      name: "Sankapla Fernando",
      date: "16-09-2024",
      reg: "20IT0466"
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: '', date: '', reg: '' });

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.date && newStudent.reg) {
      setStudents([...students, newStudent]);

      axios.post("http://localhost:5000/students",newStudent).
      then((res)=>{
        alert("Student Added")
      }).catch((err)=>{
        alert(err)
      })
      setNewStudent({ name: '', date: '', reg: '' });

      
      setShowModal(false);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Add Student Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
        onClick={() => setShowModal(true)}
      >
        <FaPlus size={20} />
      </button>

      {/* Modal for Adding Student */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Student</h2>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Name</label>
              <input
                type="text"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Date</label>
              <input
                type="date"
                value={newStudent.date}
                onChange={(e) => setNewStudent({ ...newStudent, date: e.target.value })}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Registration No</label>
              <input
                type="text"
                value={newStudent.reg}
                onChange={(e) => setNewStudent({ ...newStudent, reg: e.target.value })}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleAddStudent}
              >
                Add Student
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Student List */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-center py-4 border-b border-gray-200">
          Student List
        </h1>
        {/* Table Header */}
        <div className="flex items-center justify-between bg-gray-200 p-4 rounded-t-lg font-semibold text-gray-700">
          <div className="flex-1">Registration No</div>
          <div className="flex-1">Name</div>
          <div className="flex-1">Date</div>
          <div className="w-20 text-center">Actions</div>
        </div>
        {/* Table Body */}
        <div className="p-4">
          {students.map((std, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-4 rounded-md mb-2 shadow-sm"
            >
              <div className="text-gray-700 flex-1">{std.reg}</div>
              <div className="text-gray-800 flex-1">{std.name}</div>
              <div className="text-gray-600 flex-1">{std.date}</div>
              <div className="flex gap-4 w-20 justify-center">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;