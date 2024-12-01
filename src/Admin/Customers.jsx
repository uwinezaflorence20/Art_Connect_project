import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Customers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); // Number of users per page

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://seekconnect-backend-1.onrender.com/users"
      );
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else if (response.data && Array.isArray(response.data.users)) {
        setUsers(response.data.users);
      } else {
        throw new Error("API response is not an array");
      }
    } catch (error) {
      setError(error);
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(
        `https://seekconnect-backend-1.onrender.com/user?id=${userId}`
      );
      setUsers(users.filter((user) => user._id !== userId));
      toast.success("User has been deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user");
    }
  };

  const handleUpdate = (userId) => {
    console.log(`Update user with ID: ${userId}`);
    // Add update logic or navigate to an update page here
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="rounded-lg border border-gray-200">
      <h2 className="px-4 py-2 text-lg font-bold">Customers</h2>
      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 text-gray-900">First Name</th>
              <th className="px-4 py-2 text-gray-900">Last Name</th>
              <th className="px-4 py-2 text-gray-900">Email</th>
              <th className="px-4 py-2 text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentUsers.map((user, index) => (
              <tr key={user._id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-4 py-2 text-gray-900">{user.FirstName}</td>
                <td className="px-4 py-2 text-gray-900">{user.LastName}</td>
                <td className="px-4 py-2 text-gray-900">{user.Email}</td>
                <td className="px-4 py-2">
                  <button className="text-red-600" onClick={() => handleDelete(user._id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center gap-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 rounded-full ${currentPage === 1 ? "bg-gray-300" : "bg-orange-500 text-white"}`}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-2 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 rounded-full ${currentPage === totalPages ? "bg-gray-300" : "bg-orange-500 text-white"}`}
        >
          &gt;
        </button>
      </div>

      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Customers;
