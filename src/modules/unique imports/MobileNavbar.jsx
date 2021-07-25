import React, { useState } from 'react'
import MobileSidebar from './MobileSidebar'
import { Icon, Button, Menu } from 'semantic-ui-react'

const MobileNavbar = () => {
    const [open, setOpen] = useState(false)

    const openSidebar = () => {
        setOpen((initial) => initial = !initial)
    }
    
    return (
        <div className='navbar'>
            <Menu borderless inverted>
                <Menu.Item>
                    <Button icon basic inverted onClick={openSidebar}>
                        <Icon name={`${open ? 'close' : 'bars'} icon`} />
                    </Button>
                </Menu.Item>
                <Menu.Item>
                  OpenLibrary UI Kit
                </Menu.Item>
            </Menu>
            <div className='modal'>
                {open ? <MobileSidebar /> : ''}
            </div>
        </div>
    )
}

export default MobileNavbar
