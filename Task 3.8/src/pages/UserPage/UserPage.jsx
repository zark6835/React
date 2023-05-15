import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { users } from "../../context/usersInformation";
import "./style.css";

import UserList from "../../components/UserList/UserList";
import Albums from "../../pages/Albums/Albums";
import Posts from "../../pages/Posts/Posts";
import Todos from "../../pages/Todos/Todos";
import UserDetails from "../../components/UserDetails/UserDetails";

const UserPage = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  const [albums, setAlbums] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`);
        const albumsData = await albumsResponse.json();
        setAlbums(albumsData);

        const todosResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`);
        const todosData = await todosResponse.json();
        setTodos(todosData);

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
        const postsData = await postsResponse.json();
        setPosts(postsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [user]);

  return (
    <>
      <div className="container">
        <UserList />
        <div className="user-container">
          <ul className="user-list">
            <img src={user.img} alt="" />
            <p className="user-information">{user.name}</p>
            <p className="user-information">{user.email}</p>
            <p className="user-information">{user.mobile}</p>
            <p className="user-information">{user.city}</p>
          </ul>
        </div>
        <UserDetails />
      </div>
      <Routes>
        <Route path="albums" element={<Albums albums={albums} />} />
        <Route path="posts" element={<Posts posts={posts} />} />
        <Route path="todos" element={<Todos todos={todos} />} />
      </Routes>
    </>
  );
};

export default UserPage;
