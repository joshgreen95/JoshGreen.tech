import './App.css';
import ThreeScene from './Three/ThreeScene.js';
import { CameraIndex } from './Three/Camera/CameraIndex.js';

function App() {
  return (
      <>
        <div className='navButtonContainer' id='navButtonContainer'>
          {/*Back Button gets appended here through createRoot fuction*/}
        </div>
      
        <div className='windowBoxContainer' id='windowBoxContainer'>
          {/*Info box gets appended here through createRoot fuction*/}
        </div>
        
        <>
          <ThreeScene />
        </>
        
      </>
  );
}
export default App;