import React from 'react';

function Post(props) {
  return (
    <div className="Post">
      <h1>{props.postTitle}</h1>
      <p>{props.postContent}</p>
    </div>
  );
}

export default Post;
