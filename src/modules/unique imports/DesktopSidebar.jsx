import React from 'react'

const DesktopSidebar = () => {
    return (
        <div className='sidebar'>
        <div className='section'>
          <div className='header'>Welcome</div>
          <div className='menu'>
            <a className="item">Introduction</a>
            <a className="item">Getting started</a>
            <a className="item">Examples</a>
          </div>
        </div>
        <hr />
        <div className='section'>
          <div className='header'>Page Elements</div>
          <div className='menu'>
            <a className="item">Buttons</a>
            <a className="item">Inputs</a>
            <a className="item">Checkboxes</a>
          </div>
        </div>
        <hr />
        <div className='section'>
          <div className='header'>Components</div>
          <div className='menu'>
            <a className="item">Menu</a>
            <a className="item">Tables</a>
            <a className="item">Dropdowns</a>
          </div>
        </div>
        <hr />
      </div>
    )
}

export default DesktopSidebar
