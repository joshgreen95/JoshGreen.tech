import React from 'react'
import { PageManager } from '../../../../Logic/PageManager';

export default function CloseButton(props) {
  return (
      <button onClick={() => { 
        console.log(props);
        PageManager.CloseOverlay(); 
        
        if(props.static){
          PageManager.CloseSubScene();
        }
        }}>x</button>
  )
}
