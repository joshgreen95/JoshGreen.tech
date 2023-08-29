import React from 'react'
import CloseButton from './CloseButton.jsx'

export default function NavBanner(props) {
  return (
    <div className='navBanner'>
        <h1>{`${props.windowName}`}</h1>
        <CloseButton />
    </div>
  )
}
