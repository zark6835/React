import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import PostsList from "./pages/PostsList/PostsList";
import TodoList from "./pages/TodoList/TodoList";
import UserList from "./pages/UserList/UserList";

import "./style/reset.css";

function App() {
  return (
    <div className="Add">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
