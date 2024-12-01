import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 5;

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("https://seekconnect-backend-1.onrender.com/contactUs");
      if (response.data && Array.isArray(response.data.message)) {
        setMessages(response.data.message);
      } else {
        throw new Error("API response is not an array");
      }
      setLoading(false);
    } catch (error) {
      setError("Error loading messages: " + error.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://seekconnect-backend-1.onrender.com/contactUs/${id}`);
      setMessages(messages.filter((message) => message._id !== id));
    } catch (error) {
      setError("Error deleting message: " + error.message);
    }
  };

  const lastMessageIndex = currentPage * messagesPerPage;
  const firstMessageIndex = lastMessageIndex - messagesPerPage;
  const currentMessages = messages.slice(firstMessageIndex, lastMessageIndex);

  const totalPages = Math.ceil(messages.length / messagesPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="rounded-lg border border-gray-200 p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">Messages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Email</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Tel</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Message</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentMessages.map((message, index) => (
              <tr
                key={message._id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2 text-gray-700 border-b">{message.Name}</td>
                <td className="px-4 py-2 text-gray-700 border-b">{message.Email}</td>
                <td className="px-4 py-2 text-gray-700 border-b">{message.Tel}</td>
                <td className="px-4 py-2 text-gray-700 border-b">{message.Message}</td>
                <td className="px-4 py-2 text-gray-700 border-b">
                  <button onClick={() => handleDelete(message._id)} className="text-red-500 hover:text-red-700">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end items-center gap-2 mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-2 py-1 rounded-full ${
            currentPage === 1 ? "bg-gray-300" : "bg-white border"
          }`}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-2 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-orange-500 text-white" : "bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 rounded-full ${
            currentPage === totalPages ? "bg-gray-300" : "bg-white border"
          }`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Messages;
