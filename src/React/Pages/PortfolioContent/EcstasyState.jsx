import React from 'react';
import NavBanner from '../Components/Window/NavBanner/NavBanner.jsx';

export default function EcstasyState() {
  return (
    <div className='windowBox'>
        <NavBanner windowName='Ecstasy State'/>
        <div className='contentBox'>
          <h2>Ecstasy-State: A Digital Realm for a Techno Record Label</h2>
          <a href="" target="">{'[Coming Soon]'}</a>
          <h3>Overview</h3>
          <p>
            For my first paid commission, I'm developing an expansive digital presence for a Techno Record Label based out of London: Ecstasy-State. The project merges React's flexibility with Three.js' visual impact, crafting a minimalist yet immersive environment that embodies the label's ethos.
          </p>

          <h3>Tech Stack</h3>
          <ul>
            <li>Front-End: React and Three.js</li>
            <li>Custom Content Management System: Firebase as Backend</li>
          </ul>

          <h3>Custom CMS & Admin Backend: Why Firebase?</h3>
          <p>
            I'm creating a custom Content Management System (CMS) using Firebase as the backend. This goes beyond just using Firebase for data storage; I'm architecting an entire admin backend tailored for Ecstasy-State. This will give the team an unprecedented level of control for managing blog posts and other content, all jumping into the code.
          </p>

          <h3>Features</h3>
          <ul>
            <li>Minimalist Three.js Background</li>
            <li>Custom-Built Firebase-Based CMS</li>
            <li>Bespoke Admin Backend</li>
          </ul>

          <h3>How It Works</h3>
          <ul>
            <li>Three.js Background: Sets the mood with an immersive experience.</li>
            <li>Custom CMS with Firebase Backend: Enables seamless content management from an admin panel I'm custom-building.</li>
            <li>React Front-End: Ensures a responsive and dynamic UI/UX.</li>
          </ul>

          <h3>Challenges & Learnings</h3>
          <p>
            Balancing client expectations with my personal quality benchmarks poses a unique challenge. The project allows me to stretch my capabilities in both React and Firebase, especially with the customized CMS and admin backend.
          </p>

          <h3>Scalability</h3>
          <p>
            React's modular nature and Firebase's scalability ensure that as the record label grows, the website can adapt easily—no complete overhauls required.
          </p>

          <h3>Future Plans</h3>
          <ul>
            <li>More interactive elements specific to the music industry.</li>
            <li>A 3D visual equalizer.</li>
            <li>E-commerce section for merchandise.</li>
            <li>Rollout of the custom-built admin backend for straightforward content management.</li>
          </ul>
        </div>
      </div>
  )
}
