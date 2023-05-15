import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext([]);

const TodoProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function UsersList() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setData(data);
      } catch {
        console.error();
      }
    }
    UsersList();
  }, []);

  return(
    <TodoContext.Provider value={data}>
      { children }
    </TodoContext.Provider>
    )
};

export default TodoProvider