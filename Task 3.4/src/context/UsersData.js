import { createContext, useEffect, useState } from "react";

export const UserContext = createContext([]);

const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function UsersList() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setData(data);
      } catch {
        console.error();
      }
    }
    UsersList();
  }, []);

  return(
    <UserContext.Provider value={data}>
      { children }
    </UserContext.Provider>
    )
};

export default UserProvider