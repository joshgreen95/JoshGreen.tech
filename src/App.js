import './App.css';
import ThreeScene from './Three/ThreeScene.js';
import { CameraIndex } from './Three/Logic/CameraIndex';
function App() {
  return (
      <>
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
