import React from 'react'
import { PageManager } from '../Logic/PageManager.js'

export default function MobileNavMenu() {
  return (
    <>
      <button onClick={() => { PageManager.UpdateSubScene(1)}}> Bath Camera</button>
      <button onClick={() => { PageManager.UpdateSubScene(2)}}> Toilet Camera</button>
    </>
  )
}
