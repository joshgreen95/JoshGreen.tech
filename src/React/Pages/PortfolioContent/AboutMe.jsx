import React from 'react';
import NavBanner from '../Components/Window/NavBanner/NavBanner.jsx';

export default function Portfolio() {
  return (
    <div className='windowBox'>
        <NavBanner windowName='About Me!'/>
        <div className='contentBox'>
          <h1>*Hi*</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
  )
}