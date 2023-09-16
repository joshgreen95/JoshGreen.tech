import React from 'react';
import NavBanner from './Components/Window/NavBanner/NavBanner.jsx'
export default function InfoScreen() {
  return (
    <div className='windowBox'>
        <NavBanner windowName='Me' static={true}/>
        <div className='contentBox'>
          <img src='/images/me.jpg'/>
          <h2>This is me (the man not the monkey).</h2>
        </div>
      </div>
  )
}
