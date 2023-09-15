import ThreeScene from './Three/ThreeScene.js';
import LoadingScreen from './React/Pages/LoadingScreen.jsx';

import Header from './React/Pages/Header.jsx';
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
          {/*Writeup box gets appended here through createRoot fuction*/}
        </div>
        
        <div className='header' id='header'>
          <Header />
        </div>

      <>
        <ThreeScene />
      </>
        
      </>
    </>
  );
}
export default App;