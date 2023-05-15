import { useParams } from "react-router-dom";
import { users } from "../../context/usersInformation";

import "./style.css";
import UserList from "../../components/UserList/UserList";

const UserPage = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));
  return (
    <div className="container">
      <UserList />
      <div className="user-container">
        <ul className="user-list">
          <img src={user.img} alt="" />
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.mobile}</p>
          <p>{user.city}</p>
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
