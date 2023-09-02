import './App.css';
import ThreeScene from './Three/ThreeScene.js';
import LoadingScreen from './React/Pages/LoadingScreen.jsx';

function App() {
  return (
    <>
      <LoadingScreen />
      <>
        <div className='mobileNavMenuContainer' id='mobileNavMenuContainer'>
          {/*Mobile Nav Menu gets appended here through createRoot function */}
        </div>

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
    </>
  );
}
export default App;