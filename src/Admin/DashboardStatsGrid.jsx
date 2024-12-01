import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";

function DashboardStatsGrid() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalMessages, setTotalMessages] = useState(0); // New state for messages
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url, setState, property, description) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching ${description}: ${response.statusText}`);
        }
        const data = await response.json();
        setState(data[property]?.length || 0); // Set the state with the length of the array
      } catch (error) {
        console.error(error);
        setError(`Error fetching ${description}`);
      }
    };

    // Fetch messages
    fetchData(
      "https://seekconnect-backend-1.onrender.com/contactUs", 
      setTotalMessages, 
      "message", 
      "messages"
    );

    // Fetch users
    fetchData(
      "https://seekconnect-backend-1.onrender.com/users", 
      setTotalUsers, 
      "users", 
      "users"
    );

  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Total Users Box */}
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
          <FaUsers className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Users</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              {error ? "Error" : totalUsers}
            </strong>
          </div>
        </div>
      </BoxWrapper>

      {/* Total Messages Box */}
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-500">
          <FaUsers className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Messages</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              {error ? "Error" : totalMessages}
            </strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border-gray-200 flex items-center shadow-md">
      {children}
    </div>
  );
}

export default DashboardStatsGrid;
