import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Customers = () => {
  // Sample data for customers
  const [users, setUsers] = useState([
    { _id: "1", FirstName: "John", LastName: "Doe", Email: "john@example.com" },
    { _id: "2", FirstName: "Jane", LastName: "Smith", Email: "jane@example.com" },
    { _id: "3", FirstName: "Michael", LastName: "Johnson", Email: "michael@example.com" },
  ]);

  // Delete user handler
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
    toast.success("User has been deleted successfully");
  };

  // Update user handler
  const handleUpdate = (userId) => {
    console.log(`Update user with ID: ${userId}`);
  };

  return (
    <div className="rounded-lg border border-gray-200">
      <h2 className="px-4 py-2 text-lg font-bold">Customers</h2>
      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">First Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Last Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={user._id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="whitespace-nowrap px-4 py-2 text-gray-900">{user.FirstName}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-900">{user.LastName}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-900">{user.Email}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  <button
                    className="mr-2 text-blue-600"
                    onClick={() => handleUpdate(user._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="text-red-600"
                    onClick={() => handleDelete(user._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Customers;
