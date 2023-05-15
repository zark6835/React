import React from "react";

import Posts from "./components/Posts/Posts";
import Todo from "./components/Todo/Todo";
import Users from "./components/Users/Users";
import PostProvider from "./context/PostProvider";
import TodoContext from "./context/TodoData";
import UserContext from "./context/UsersData";

import "./assets/global-style/reset.css";
import "./assets/global-style/style.css";

function App() {
  return (
    <div className="Add">
      <p className="font">Posts</p>
      <PostProvider>
        <Posts />
      </PostProvider>
      <p className="font">Todo</p>
      <TodoContext>
        <Todo />
      </TodoContext>
      <p className="font">Users</p>
      <UserContext>
        <Users />
      </UserContext>
    </div>
  );
}

export default App;
