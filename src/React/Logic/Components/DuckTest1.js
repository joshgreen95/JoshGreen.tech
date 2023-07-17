import React from 'react'
import { PageManager } from '../PageManager'

export default function DuckTest1() {
  return (
    <div className='projectBox'>
        <h1>Duck Test 1</h1>
        <button onClick={() => { PageManager.Close(); }}>x</button>
        </div>
  )
}
