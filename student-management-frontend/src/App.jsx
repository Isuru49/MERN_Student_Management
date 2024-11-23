import './App.css';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const sampleStudentData = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
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
          {sampleStudentData.map((std, index) => (
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
