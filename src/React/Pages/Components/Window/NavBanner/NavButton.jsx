import React from 'react'
import { PageManager } from '../../../../Logic/PageManager';

export default function NavButton() {
    return (
        <i className="fa-solid fa-reply-all fa-3x backButton"  onClick={() => { PageManager.CloseSubScene(); }}></i>
    )
}
