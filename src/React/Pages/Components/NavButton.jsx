import React from 'react'
import { PageManager } from '../../Logic/PageManager';

export default function NavButton() {
    return (
        <button onClick={() => { PageManager.CloseSubScene(); }}>Back</button>
    )
}
