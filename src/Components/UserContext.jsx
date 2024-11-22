import { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext();

// Custom hook to access the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// UserProvider component to wrap the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
