import './App.css';
import ThreeScene from './Three/ThreeScene.js';
import BackButton from './React/Pages/Components/BackButton.jsx'
import { CameraIndex } from './Three/Camera/CameraIndex.js';
import { PageManager } from './React/Logic/PageManager.js';

function App() {
  return (
      <>
        <div className='buttonContainer'>
          <button onClick={() => { CameraIndex.index = 0; }}>Home</button>
          <button onClick={() => { CameraIndex.index = 1; }}>Bath</button>
          <button onClick={() => { CameraIndex.index = 2; }}>Toilet</button>
        </div>
      {!PageManager.isHomeScreenActive ? <div className='navButton' id='backButton'>
        <BackButton />
      </div> : <></>} 
        
      
        <div className='windowBox' id='windowBox'>
          {/*Info box gets appended here through createRoot fuction*/}
        </div>
        <>
          <ThreeScene />
        </>
        
      </>
  );
}
export default App;