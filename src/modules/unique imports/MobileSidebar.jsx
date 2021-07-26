import React from 'react'
import { Link } from 'react-router-dom'

const MobileSidebar = () => {
    return (
            <div className="mobile-sidebar">
          <div className='section'>
            <div className='header'>Welcome</div>
            <div className='menu'>
              <Link to='/introduction'><div className="item">Introduction</div></Link>
              <Link to='/getting-started'><div className="item">Getting started</div></Link>
              <Link to='/examples'><div className="item">Examples</div></Link>
            </div>
          </div>
          <hr />
          <div className='section'>
            <div className='header'>Page Elements</div>
            <div className='menu'>
              <Link to='/button'><div className="item">Buttons</div></Link>
              <Link to='/input'><div className="item">Inputs</div></Link>
              <Link to='/checkboxes'><div className="item">Checkboxes</div></Link>
            </div>
          </div>
          <hr />
          <div className='section'>
            <div className='header'>Components</div>
            <div className='menu'>
              <Link to='/menu'><div className="item">Menu</div></Link>
              <Link to='/table'><div className="item">Tables</div></Link>
              <Link to='/dropdown'><div className="item">Dropdowns</div></Link>
            </div>
          </div>
          <hr />
        </div>
    )
}

export default MobileSidebar
