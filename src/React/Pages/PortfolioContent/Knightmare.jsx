import React from 'react';
import NavBanner from '../Components/Window/NavBanner/NavBanner.jsx';

export default function Knightmare() {
  return (
    <div className='windowBox'>
        <NavBanner windowName='Knightmare - VR'/>
        <div className='contentBox'>
        <section id="knightmare-vr">
          <h2>Knightmare VR: The Modern Revival of an '80s Classic</h2>
          <a href="" target="">{'[Coming Soon]'}</a>
          <h3>Tech Stack</h3>
          <ul>
            <li>Game Engine: Unity</li>
            <li>Programming Language: C#</li>
            <li>Multiplayer: Unity MP API, fomerly Photon</li>
          </ul>

          <h3>Overview</h3>
          <p>
            As a passionate game developer and a fan of retro television, I couldn't resist the temptation to resurrect the iconic '80s British TV show "Knightmare" in a modern gaming format. Knightmare VR is my ambitious venture into Unity game development, focusing on multiplayer interactions allowing for emergent storytelling.
          </p>

          <h3>Features</h3>
          <ul>
            <li><strong>Multiplayer Dynamics</strong>: The game offers a unique multiplayer interaction where one player, the "guide," helps navigate another player who is wearing a VR headset. The VR player is essentially "blindfolded" and relies on the guide for navigation, closely mimicking the mechanics of the original TV show.</li>
            <li><strong>Procedural Mazes</strong>: The VR player navigates through procedurally generated mazes filled with challenges, traps, and NPCs to interact with. Every game session offers a new, unpredictable adventure.</li>
            <li><strong>NPC Interactions</strong>: Faithful to the original show, the mazes include various NPCs who provide riddles, trade items, or pose challenges. The interactions are crucial for the player to advance and add layers of complexity to the gameplay making it true to the original tv show.</li>
          </ul>

          <h3>How It Works</h3>
          <ul>
            <li><strong>Unity & C#</strong>: The core game logic, networking for multiplayer, and procedural maze generation are all handled through Unity, leveraging the C# programming language.</li>
            <li><strong>Player Roles</strong>: One player dons the VR headset and takes on the "adventurer" role, navigating through the maze. The other player takes on the "guide" role, directing the adventurer through the maze, helping solve riddles, and negotiating with NPCs.</li>
          </ul>

          <h3>Challenges & Learnings</h3>
          <p>
            Recreating a beloved classic in a modern, interactive format presented multiple challenges. The most demanding parts are designing the multiplayer mechanics in a way that offered both players a rewarding experience. Implementing procedurally generated mazes and managing real-time multiplayer interactions was a huge learning curves that significantly advanced my skills in Unity and C#.
          </p>
        </section>
        </div>
      </div>
  )
}
