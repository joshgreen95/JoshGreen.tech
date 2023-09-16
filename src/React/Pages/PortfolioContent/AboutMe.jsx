import React from 'react';
import NavBanner from '../Components/Window/NavBanner/NavBanner.jsx';

export default function Portfolio() {
  return (
    <div className='windowBox'>
        <NavBanner windowName='About Me!'/>
        <div className='contentBox'>
        
        <h2>About Me!</h2>

        <p>
          Hey I’m Josh, I'm a Mixologist turned Web Developer and Software Engineer based in London.
        </p>

        <h3>My Tech Stack</h3>
        <ul>
          <li>Javascript; React, Nodejs, Mocha. <i>Wizardly +++ </i></li>
          <li>C#        <i>Wizardly +++ </i></li>
          <li>Git       <i>Wizardly +++</i></li>
          <li>SQL       <i>Codeprentice ++ </i></li>
          <li>C++       <i>Codeprentice ++ </i></li>
          <li>Java      <i>Jester +</i></li>

        </ul>

        <h3>What I'm Up To</h3>
        <p>Right now, I'm wrapping up Google's Cyber Security Professional Certificate.</p>

        <h3>What's on the Horizon?</h3>
        <p>My eyes are set on some pretty ambitious goals. I plan to dive back into academia part-time for a Computer Science degree. The immediate aim? Land a front-end role with the aim of moving into devops further down the road.</p>

        <h3>Looking Back</h3>
        <p>
          I've been honing my people skills in the hospitality industry for a decade, two years of which I’ve spent in management. Trust me, it’s a crash course in multitasking and effective communication.
        </p>

        <p>
          I've been coding for quite a while now but for most of the time, I’ve been unguided and just kind of winging it. I started out by making Racing Gamemodes for 'Grand Theft Auto: SA Multiplayer' using a typeless C sublanguage called 'Pawn' and creating registry tools in Visual Basic to help people recover 'DayZ' accounts.
        </p>

        <p>
          In University I used Python and SQL to perform corpus linguistic analysis and quickly realised the thrill of fixing a difficult bug captivated me more than the rest of my university experience, so I decided to change my heading and focus on programming as a career.
        </p>

        <h3>My Coding Milestones</h3>
        <ul>
          <li><strong>Start of a Journey:</strong> I took the plunge with Codecademy's Full Stack Developer Course. I got familiar with React and JavaScript testing frameworks like Mocha. At this time I also completed Harvard's CS50, which was a desperately needed intro to DSA.</li>
          <li><strong>Game Development:</strong> My current labour of love is a Unity-based VR version of 'Knightmare,' the retro British game show.</li>
          <li><strong>Wowdle and ALAN:</strong> Rolled out my own React project—Wowdle—and had a blast creating ALAN with NODEjs. For the full details, check out the Projects section.</li>
          <li><strong>Three.js and This Portfolio:</strong> I levelled up my skills with Bruno Simon's Three.js course and built this eclectic portfolio, hosted on AWS Amplify.</li>
        </ul>

        <p>
          Feel like snooping through my code? My Git repo is just a click away at the top-right corner of this page.
        </p>

        <h3>Hobbies and Interests</h3>
        <p>
          Once I’ve closed all my Stack Overflow tabs, you'll find me:
        </p>
        <ul>
          <li>Always at Concerts, I'm a big fan of metal music.</li>
          <li>Competing in Gamejams, I've been getting a lot more joy from making games than playing them recently.</li>
          <li>Running a weekly DnD game.</li>
          <li>Building Custom Keyboards.</li>
          <li>Entering cocktail competitions with my own creations, and curating a collection of obscure liquors.</li>
          <li>I'm a history buff with a particular obsession for all things related to Ancient Rome. I love the complex world of Roman emperors and their legions.</li>
          <li>I really like 'Red Dwarf'... like, really like.</li>
        </ul>

        <p>
          Interested in collaborating or just up for a chat about anything from coding to cocktails? Let's connect!
        </p>

        <a href="mailto:me@joshgreen.tech">For any work related enquiries, Send me an email!</a> 

        </div>
      </div>
  )
}
