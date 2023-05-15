import { NavLink } from "react-router-dom";

import "./style.css";

const Navigation = () => {
  return (
    <ul className="wrapper-navigation">
      <li>
        <NavLink className="NavLink" to="/">
          <h2>PostsList</h2>
        </NavLink>
      </li>
      <li>
        <NavLink className="NavLink" to="/todolist">
          <h2>TodoList</h2>
        </NavLink>
      </li>
      <li>
        <NavLink className="NavLink" to="/userlist">
          <h2>UserList</h2>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
