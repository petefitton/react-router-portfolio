import React from 'react';
import ProjectPost from './ProjectPost'

function Projects(props) {
  return (
    <div className="Projects">
      {props.projects.map((project, index) => (
        <li key={`in-${index}`}>
          <ProjectPost title={project.title} content={project.content} />
        </li>
      ))}
    </div>
  );
}

export default Projects;
