import { Link } from "react-router-dom";
import "./style.css";

import { users } from "../../context/usersInformation";

const UserList = () => {
  return (
    <div className="wrapper">
      <h2 className="title">Users</h2>
      <ul className="list-wrapper">
        {users.map((user) => (
          <li className="list-item" key={user.id}>
            <Link to={`/users/${user.id}`} className="list-content">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
