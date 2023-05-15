import React from "react";

import "./assets/global-syle/reset.css";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import PostProvider from "./context/PostProvider";

function App() {
  return (
    <div className="Add">
      <PostProvider>
      <Form />
        <Posts />
      </PostProvider>
    </div>
  );
}

export default App;
