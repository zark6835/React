import '../pages-style/UserDetails.css'

const Posts = ({ posts }) => {
  return (
    <div>
      <div className="wrapper-albums">
        <h2 className="title">Posts</h2>
        <ul className="list">
          {posts.map((e) => (
            <li key={e.id} className="list-item">
              <p>{e.title}</p>
              <p>{e.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
