import React from 'react';
import NavBanner from '../Pages/Components/Window/NavBanner/NavBanner.jsx'
export default function InfoScreen() {
  return (
    <div className='windowBox'>
        <NavBanner windowName='Stuck?' static={true}/>
        <div className='contentBox'>
        <section id='info'>
          <p>Hey there! Thanks for visiting my portfolio. This isn't just any ordinary portfolio, it's a 3D interactive adventure!</p>

          <h3>How to Navigate:</h3>
          <ul>
            <li><strong>Ducks:</strong> You'll notice various ducks scattered throughout the page. They're not just for decoration! Whether they're floating on the water or placed elsewhere, clicking on any duck will reveal more information about me or my projects.</li>
            <li><strong>Water:</strong> The water surface is interactive! Clicking on it will create ripples, thanks to some shader magic.</li>
          </ul>
        </section>
        </div>
      </div>
  )
}
