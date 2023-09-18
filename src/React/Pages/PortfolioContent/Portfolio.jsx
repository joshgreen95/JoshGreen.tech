import React from 'react';
import NavBanner from '../Components/Window/NavBanner/NavBanner.jsx';
import portfolioPic from './images/Portfolio.png';

export default function Portfolio() {
  return (
    <div className='windowBox'>
        <NavBanner windowName='Portfolio'/>
        <div className='contentBox'>
        <section id="portfolio">
          <h2>My Portfolio - A 3D Adventure with THREE.js</h2>

          <div className='imgContainer'>
            <img className='imgHorizontal' src={portfolioPic} />
          </div>
          
          <a href="https://github.com/joshgreen95/JoshGreen.tech" target="_blank">GitHub Repo</a>
          
          <h3>Overview</h3>

          <p>When it comes to portfolio websites, I wanted something that would stand out and showcase not just my skills but also my personality. My portfolio, made with THREE.js, embodies my quirky style. It also served as an excellent avenue to refine my skills in Blender and Object-Oriented Programming (OOP).</p>

          <h3>Tech Stack</h3>
          <ul>
            <li><strong>Front-End:</strong> THREE.js, React</li>
            <li><strong>Modeling:</strong> Blender</li>
            <li><strong>Shaders:</strong> GLSL</li>
            <li><strong>Hosting:</strong> AWS Amplify</li>
            <li>Object-Oriented Programming (OOP)</li>
          </ul>

          <h3>Features</h3>
          <ul>
            <li><strong>Interactive 3D Elements:</strong> The portfolio includes various interactive ducks floating on water, each representing a past project.</li>
            <li><strong>Scene Manager:</strong> This manages overlay windows using React's createRoot functionality.</li>
            <li><strong>Custom Shaders:</strong> The water vertex shader, written in GLSL, creates water ripples based on UV Raycast intersect coordinates.</li>
            <li><strong>Class-Based Ducks:</strong> Ducks in the scene are class objects containing references to their model and React JSX components for displaying content.</li>
          </ul>

          <h3>How It Works</h3>
          <ol>
            <li><strong>Scene Manager:</strong> Manages and displays various overlay windows.</li>
            <li><strong>Object-Oriented Design:</strong> Ducks and other floatable elements are class objects, making it easy to add or modify components.</li>
            <li><strong>Shader Magic:</strong> The water vertex shader uses UV Raycast intersect coordinates to create ripples, and the ducks are updated in a similar fashion.</li>
          </ol>

          <h3>Why AWS Amplify?</h3>
          <p>AWS Amplify was the perfect choice for hosting my single-page web app built with React. Amplify provides features that effortlessly integrate with React, offers an easy deployment process, and allows for scalability that suits the requirements of this project.</p>

          <h3>Challenges & Learnings</h3>
          <p>The most challenging part was the designing a unique 3D portfolio that truly encapsulated my quirky style and showcased my capabilities. This endeavor forced me to dig deep into THREE.js and Blender, refining my skills and understanding of 3D web development.</p>

          <h3>Scalability</h3>
          <p>The website is designed to be as scalable as possible. If I ever need to add more projects or features, I can simply instantiate new Floatable objects without having to do a complete rewrite of the existing code.</p>

          <h3>Future Plans</h3>
          <ul>
            <li>Add more interactive elements to the portfolio.</li>
            <li>Incorporate a blog section where I can share tutorials and project updates.</li>
          </ul>
        </section>
        </div>
      </div>
  )
}
