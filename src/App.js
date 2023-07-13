import './App.css';
import ThreeScene from './Three/ThreeScene.js';
import { CameraIndex } from './Three/Camera/CameraIndex';
import { PageManager } from './Three/React/Logic/PageManager';
import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState();
  const [isPageShown, setIsPageShown] = useState(false);

  const beep = () => setActivePage(PageManager.activePage);
  const boop = () => console.log(activePage);
  return (
      <>
        <>
        {isPageShown ? <h1>{"YaY"}</h1> : <h1>{"BOO"}</h1>}
        </>

      <div className='buttonContainer'>
        <button onClick={() => { CameraIndex.index = 0; }}>Home</button>
        <button onClick={() => { CameraIndex.index = 1; }}>Bath</button>
        <button onClick={() => { CameraIndex.index = 2; }}>Toilet</button>
      </div>
      
      <ThreeScene />
      </>
  );
}

export default App;


