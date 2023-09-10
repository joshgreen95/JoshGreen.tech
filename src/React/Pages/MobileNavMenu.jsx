import React from 'react'
import { PageManager } from '../Logic/PageManager.js'

export default function MobileNavMenu() {
  return (
    <>
      <button onClick={() => { PageManager.UpdateSubScene(1)}}> Portfolio</button>
      <button onClick={() => { PageManager.UpdateSubScene(2)}}> About Me</button>
    </>
  )
}
