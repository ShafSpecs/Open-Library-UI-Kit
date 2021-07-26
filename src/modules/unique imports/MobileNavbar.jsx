import React, { useState } from 'react'
import MobileSidebar from './MobileSidebar'
import { Icon, Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
                <Link to='/'>
                    <Menu.Item>
                      OpenLibrary UI Kit
                    </Menu.Item>
                </Link>
            </Menu>
            <div className='modal'>
                {open ? <MobileSidebar /> : ''}
            </div>
        </div>
    )
}

export default MobileNavbar
