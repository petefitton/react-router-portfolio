import React from 'react';

function About() {
  return (
    <div className="About">
      <h1>About Me:</h1>
      <p>Former AV support technician pivoting into a career in Software Development, with skills including React, Javascript, Node.js, Express.js, HTML, and CSS. My previous professional experiences as a contractor at both Boeing and Amazon equipped me with the confidence to navigate business settings while strengthening my customer service skills.</p>
        <button>
        <a className="resumeLink" type="text/plain" href="PFittonResume.text" download>
          Download my Resume
        </a>
        </button>
    </div>
  );
}

export default About;
