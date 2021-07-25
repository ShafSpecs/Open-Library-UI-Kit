import React, { useState } from 'react'
import MobileSidebar from './MobileSidebar'
import { Icon, Button } from 'semantic-ui-react'
import { Menu } from '@material-ui/core'

const MobileNavbar = () => {
    const [open, setOpen] = useState(false)

    const openSidebar = () => {
        setOpen((initial) => initial = !initial)
    }
    
    return (
        <div className='navbar'>
            <Menu borderless inverted>
                <Menu.item>
                    <Button icon basic inverted onClick={openSidebar}>
                        <Icon name={`${open ? 'close' : 'bars'} icon`} />
                    </Button>
                </Menu.item>
                <Menu.item>
                  OpenLibrary UI Kit
                </Menu.item>
            </Menu>
            <div className='modal'>
                {open ? <MobileSidebar /> : ''}
            </div>
        </div>
    )
}

export default MobileNavbar
