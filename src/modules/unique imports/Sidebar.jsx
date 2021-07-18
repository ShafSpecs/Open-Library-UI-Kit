import React from 'react'
import DesktopSidebar from './DesktopSidebar'
import MobileSidebar from './MobileSidebar'

const Sidebar = () => {
  const windowScreen = screen.availWidth

  if (windowScreen < 768) {
    return(
    <MobileSidebar/>
    )
  } else if (windowScreen > 767) {
    return(
    <DesktopSidebar />
    )
  }
}

window.addEventListener('resize', () => {
  location.reload()
})

export default Sidebar