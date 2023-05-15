import React from 'react';

import "./style.css"

const PostsList = () => {
  const posts = [
    { id: 1, title: 'First Post', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Second Post', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.' },
    { id: 3, title: 'Third Post', body: 'At vero eos et accusamus et iusto odio dignissimos.' },
  ];

  return (
    <div className='postsList-wrapper'>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;