import './App.css';
import ThreeScene from './Three/ThreeScene.js';
import { CameraIndex } from './Three/Camera/CameraIndex.js';
import { PageManager } from './React/Logic/PageManager.js';
import { useState } from 'react';

var activePage, setActivePage;
var isPageShown, setIsPageShown;
function App() {
  return (
      <>
        <div className='buttonContainer'>
          <button onClick={() => { CameraIndex.index = 0; }}>Home</button>
          <button onClick={() => { CameraIndex.index = 1; }}>Bath</button>
          <button onClick={() => { CameraIndex.index = 2; }}>Toilet</button>
        </div>
      
        <div className='infoBox' id='infoBox'>
          {/*Info box gets appended here through createRoot fuction*/}
        </div>

        <ThreeScene />
      </>
  );
}
export default App;