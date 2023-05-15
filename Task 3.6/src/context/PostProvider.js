import { createContext, useEffect, useState } from "react";

export const PostContext = createContext([]);

const PostProvider = ({ children }) => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    async function UsersList() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setData(data);
      } catch {
        console.error();
      }
    }
    UsersList();
  }, []);

  return (
    <PostContext.Provider value={{ data, setData }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
