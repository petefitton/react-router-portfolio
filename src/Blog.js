import React from 'react';
import Post from './Post';

function Blog(props) {
  return (
    <div className="Blog">
      {props.posts.map((post, index) => (
        <li key={`in-${index}`}>
          <Post postTitle={post.title} postContent={post.content} />
        </li>
      ))}
    </div>
  );
}

export default Blog;
