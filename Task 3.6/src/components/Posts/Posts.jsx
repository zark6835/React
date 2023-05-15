import { useContext } from "react";
import { PostContext } from "../../context/PostProvider";

const Posts = () => {
  const { data } = useContext(PostContext);

  return (
    <ul style={{ textAlign: "center" }}>
      {data.map((post) => (
        <li
          key={post.id}
          style={{ margin: "100px", border: "2px solid black" }}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
