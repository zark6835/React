import { useContext } from "react";
import { UserContext } from "../../context/UsersData";


const Users = () => {
  const users = useContext(UserContext);

  return (
    <ul style={{textAlign: 'center'}}>
        {users.map(name => (
            <li style={{padding: '10px'}}>
                <p>{name.name}</p>
                <p>{name.username}</p>
            </li>
        ))}
    </ul>
  );
};

export default Users;
