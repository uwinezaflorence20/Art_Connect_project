import  { useEffect, useState } from "react";
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
      const response = await axios.get(
        "https://seekconnect-backend-1.onrender.com/contactUs"
      );
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
    <div className="rounded-lg border border-gray-200">
      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tel</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Message</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentMessages.map((message) => (
              <tr key={message._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{message.Name}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{message.Email}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{message.Tel}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{message.Message}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <button
                    onClick={() => handleDelete(message._id)}
                    style={{ border: "none", background: "none", cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
        <ol className="flex justify-end gap-1 text-xs font-medium">
          <li>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => setCurrentPage(index + 1)}
                className={`block size-8 rounded border ${
                  currentPage === index + 1 ? "border-blue-600 bg-blue-600 text-white" : "border-gray-100 bg-white text-gray-900"
                } text-center leading-8`}
              >
                {index + 1}
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Messages;
