import React from 'react';
import NavBanner from '../Components/Window/NavBanner/NavBanner.jsx';

export default function DiscordBot() {
  return (
    <div className='windowBox'>
        <NavBanner windowName='ALAN: Depressed Discord Bot'/>
        <div className='contentBox'>

        <section id="alan-project">
          <h2>ALAN - The Discord Bot That's Never Happy</h2>

          <div className='imgContainer'>
            <img className='imgHorizontal' src='/images/alan.jpg' />
          </div>

          <h3>Overview</h3>
          <p>Meet ALAN, my first JavaScript project that breathes life—or should I say, sadness—into your Discord server. ALAN is an interactive chatbot inspired by my real-life friend Alan, who has the uncanny ability to find something to complain about.</p>

          <h3>Tech Stack</h3>
          <ul>
            <li>Language: JavaScript</li>
            <li>Framework: Discord.js</li>
            <li>Database: mySQL (hosted locally)</li>
            <li>Environment: Node.js</li>
          </ul>

          <h3>Features</h3>
          <ul>
            <li><strong>Mad-Libs-Esque Responses:</strong> Ask ALAN why he's upset today, and you'll get a dynamically generated phrase filled with woe and despair.</li>
            <li><strong>User Contributions:</strong> The fun part is, you can contribute to ALAN's misery! Use specific <code>!</code> commands to feed new complaints into his database.</li>
            <li><strong>Community Engagement:</strong> ALAN not only provides a unique element of interactivity but also encourages user participation to enrich his vocabulary of sadness.</li>
          </ul>

          <h3>How It Works</h3>
          <p>At its core, ALAN utilizes the Discord.js API to interact with Discord servers, then uses its SQL database of user-contributed answers to tell you why he's miserable. Here’s the simplified flow:</p>
          <ol>
            <li><strong>Query:</strong> A user asks ALAN why he's sad.</li>
            <li><strong>Response Generation:</strong> ALAN replies with one of dozens of preset phrases like "I’m sad today because...", followed by a randomly selected user-contributed complaint.</li>
            <li><strong>User Contribution:</strong> Users can add to ALAN’s pool of complaints through <code>!</code> commands, which are then stored in the SQL database.</li>
          </ol>

          <h3>Challenges & Learnings</h3>
          <p>This project was a great introduction to JavaScript, Node.js, and SQL. I learned how to create dynamic interactions within a Discord server, how Javascript Async works, and how to manage a local SQL database.</p>

          <h3>Future Plans</h3>
          <ul>
            <li>Implement a ranking system for the most creative user-contributed complaints.</li>
            <li>Clean up my code. It was my first javascript project 3 years ago and looking back over the code, it's clear my skills have developed since.</li>
            <li>Data Hygiene: to stop SQL injection and naughty words.</li>
          </ul>
        </section>

        </div>
      </div>
  )
}
