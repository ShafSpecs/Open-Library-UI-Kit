import React from 'react'
import DesktopSidebar from './DesktopSidebar'
import MobileSidebar from './MobileSidebar'

const Sidebar = () => {
  const windowScreen = screen.availWidth

  if (windowScreen < 760) {
    return(
    { /*<MobileSidebar/> */ }
    )
  } else if (windowScreen > 759) {
    return(
    <DesktopSidebar />
    )
  }
}

window.addEventListener('resize', () => {
  location.reload()
})

export default Sidebar