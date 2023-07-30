import React from 'react'
import { PageManager } from '../../Logic/PageManager';

export default function CloseButton() {
  return (
      <button onClick={() => { PageManager.CloseOverlay(); }}>x</button>
  )
}
