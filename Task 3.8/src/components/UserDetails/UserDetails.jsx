import { Link } from "react-router-dom";
import "./style.css";

const UserDetails = () => {
  return (
    <ul className="user-list">
        <h2 className="user-information">Information</h2>
        <Link to={"albums"} className="user-information__link">Albums</Link>
        <Link to={"posts"} className="user-information__link">Posts</Link>
        <Link to={"todos"} className="user-information__link">Todos</Link>
      </ul>
  );
};

export default UserDetails;