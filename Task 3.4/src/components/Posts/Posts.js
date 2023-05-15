import { useContext } from "react";
import { PostContext } from "../../context/PostProvider";

const Posts = () => {
  const posts = useContext(PostContext);
 
  return (
    <ul style={{ textAlign: "center" }}>
      {posts.map((post) => (
        <li key={post.id} style={{ padding: "10px" }}>
          <h2>{post.title}</h2>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
