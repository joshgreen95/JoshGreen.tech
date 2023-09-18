import React from 'react';
import NavBanner from '../Components/Window/NavBanner/NavBanner.jsx';
import wowdlePic from './images/Wowdle.png';

export default function Wowdle() {
  return (
    <div className='windowBox'>
        <NavBanner windowName='Wowdle'/>
        <div className='contentBox'>
        <section id="wowdle-project">
          <h2>Wowdle - The Game of Guessing Azeroth's NPCs</h2>
          
          <div className='imgContainer'>
            <img className='imgHorizontal' src={wowdlePic} />
          </div>
          
          <ul>
            <li><a href="http://wowdle.web.app" target="_blank">Play Wowdle</a></li>
            <li><a href="https://github.com/joshgreen95/Wowdle-Web" target="_blank">GitHub Repo</a></li>
          </ul>

          <h3>Overview</h3>
          <p>Wowdle was my first extensive venture into the realms of React and web design. The game is a Wordle-esque challenge, but with a twist that's sure to en<i>thrall</i> fans of World of Warcraft. Each day, a new picture of an NPC (Non-Player Character) is displayed, and players have just four attempts to guess the NPC. With each incorrect guess, more hints are revealed to narrow down the possibilities.</p>

          <h3>Tech Stack</h3>
          <ul>
            <li>Front-End: React.js</li>
            <li>Back-End: Google Cloud Firestore</li>
            <li>State Management: Cookies (Local Storage)</li>
          </ul>

          <h3>Features</h3>
          <ul>
            <li><strong>Guessing Game:</strong> Players have 4 chances to guess a random NPC generated each day.</li>
            <li><strong>Dynamic Hints:</strong> Incorrect guesses unlock hints like the continent, zone, and faction to which the NPC belongs.</li>
            <li><strong>Local Player Stats:</strong> Statistics like win ratios and average guesses needed are stored locally via cookies and displayed via chart.js.</li>
          </ul>

          <h3>How It Works</h3>
          <p>The application queries a Google Cloud Firestore database to fetch a randomly selected NPC, with the weightage adjusted based on the current date to avoid repetition. The user data, like win ratios and average guesses, is stored locally using cookies. Here’s the simplified flow:</p>
          <ol>
            <li><strong>Fetching NPC:</strong> The app queries the Firestore database and selects an NPC based on weighted randomization.</li>
            <li><strong>User Guessing:</strong> Players make their guesses, receiving hints with each incorrect attempt.</li>
            <li><strong>Stat Tracking:</strong> Player statistics are updated and stored locally using cookies.</li>
          </ol>

          <h3>Challenges & Learnings</h3>
          <p>One of the most prominent challenges I faced was scalability. I needed a way to add new NPCs to the game without bloating the application size or requiring constant updates. Implementing Google Cloud Firestore enabled me to create a rudimentary back-end where I can upload NPC data and accompanying photos, solving the scalability issue.</p>

          <h3>Future Plans</h3>
          <ul>
            <li>Introduce multiplayer options for players to compete against each other.</li>
            <li>Add varying difficulty levels, impacting the number of hints revealed with incorrect guesses.</li>
          </ul>
        </section>

        </div>
      </div>
  )
}
