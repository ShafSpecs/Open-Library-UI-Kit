import React from 'react'

const Sidebar = () => {
    const windowScreen = screen.availWidth

    if (windowScreen < 768) {
      return(
        <div>
          {windowScreen}
        </div>
      )
    } else if (windowScreen > 767) {
    return (
        <div className='sidebar'>
            <div className='section'>
              <div className='header'>{windowScreen} Welcome</div>
              <div className='menu'>
                <div className="item">Introduction</div>
                <div className="item">Getting started</div>
                <div className="item">Examples</div>
              </div>
            </div>
            <hr/>
            <div className='section'>
              <div className='header'>Page Elements</div>
              <div className='menu'>
                <div className="item">Buttons</div>
                <div className="item">Inputs</div>
                <div className="item">Checkboxes</div>
              </div>
            </div>
            <hr />
            <div className='section'>
              <div className='header'>Components</div>
              <div className='menu'>
                <div className="item">Menu</div>
                <div className="item">Tables</div>
                <div className="item">Dropdowns</div>
              </div>
            </div>
            <hr />
        </div>
    )}
}

window.addEventListener('resize', () => {
  location.reload()
})

export default Sidebar