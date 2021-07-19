import React, { useState } from 'react'
import MobileSidebar from './MobileSidebar'

const MobileNavbar = () => {
    const [open, setOpen] = useState(false)

    const openSidebar = () => {
        setOpen((initial) => initial = !initial)
    }

    return (
        <div className='navbar'>
            <div class="ui borderless inverted menu">
                <div class="item">
                    <button class="ui inverted basic icon button" onClick={openSidebar}>
                        <i class="bars icon"></i>
                    </button>
                </div>
                <span class="item">
                  OpenLibrary UI Kit
                </span>
            </div>
            {open ? <MobileSidebar /> : ''}
        </div>
    )
}

export default MobileNavbar
