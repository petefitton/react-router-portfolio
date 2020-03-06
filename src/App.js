import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Homepage from './Homepage';
import Projects from './Projects';

let postArr = [
  {
    title: "My First Blog Post",
    content: "I wrote a blog post."
  },
  {
    title: "My Second Blog Post",
    content: "I wrote a second blog post."
  },
  {
    title: "My Highly Anticipated Third Blog Post",
    content: "I wrote yet again, another blog post."
  }
]

let projects = [
  {
    title: "My first Project",
    content: "My first project was this thing."
  },
  {
    title: "My second Project",
    content: "Second Proj was another thing that was this thing."
  },
  {
    title: "My third Project",
    content: "My third proj was a proj that was this thing."
  }
]

function App() {
  const [posts, setPosts] = useState(postArr);

  return (
    <Router>
    <div className="App">
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
        <Route exact path="/" render={() => <Homepage />} />
        <Route path="/about" component={About} />
        <Route path="/blog" render={() => <Blog posts={posts} />} />
        <Route path="/projects" render={() => <Projects projects={projects} />} />
        <Route path="/resume" />
    </div>
  </Router>
  );
}

export default App;
