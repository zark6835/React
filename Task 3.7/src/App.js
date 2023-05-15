import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/reset.css";
import UserList from "./components/UserList/UserList";
import Heder from "./components/Heder";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <div className="Add">
      <Heder />
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:id" element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
