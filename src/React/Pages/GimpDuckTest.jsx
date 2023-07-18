import React from 'react'
import CloseButton from './Components/CloseButton'

export default function GimpDuckTest() {
  return (
    <div className='projectBox'>
      <h1>*Muffled Quack*</h1>
      <img src='/images/Gimp_Duck.png' />
      <CloseButton />
    </div>
  )
}
