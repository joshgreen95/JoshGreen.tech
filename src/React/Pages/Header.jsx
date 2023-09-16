import React from 'react'
import { PageManager } from '../Logic/PageManager.js';
import meScreen from '../Pages/meScreen.jsx'
import { links } from '../../Resources/Links.js';

export default function Header() {
  return (
    <>
        <i className="fa-regular fa-file fa-2x fixedButton" onClick={() => { window.open('/files/Resume.pdf'); }}></i>
        <i className="fa-brands fa-github fa-2x fixedButton" onClick={() => { window.open(links['github'], '_blank').focus(); }}></i>
        <i className="fa-brands fa-twitter fa-2x fixedButton" onClick={() => { window.open(links['twitter'], '_blank').focus(); }}></i>
        <i className="fa-regular fa-face-smile-beam fa-2x fixedButton" onClick={() => { PageManager.ShowOverlay(meScreen, PageManager.activeCamera, 'ui'); }}></i>
    </>
  )
}
