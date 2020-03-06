import React from 'react';

function ProjectPost(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </>
  );
}

export default ProjectPost;
