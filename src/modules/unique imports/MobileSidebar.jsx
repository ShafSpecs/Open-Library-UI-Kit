import React from 'react'
import { Link } from 'react-router-dom'

const MobileSidebar = ({ func }) => {
    return (
            <div className="mobile-sidebar">
          <div className='section'>
            <div className='header'>Welcome</div>
            <div className='menu'>
              <Link to='/introduction'><div className="item" onClick={func}>Introduction</div></Link>
              <Link to='/getting-started'><div className="item" onClick={func}>Getting started</div></Link>
              <Link to='/examples'><div className="item" onClick={func}>Examples</div></Link>
            </div>
          </div>
          <hr />
          <div className='section'>
            <div className='header'>Page Elements</div>
            <div className='menu'>
              <Link to='/button'><div className="item" onClick={func}>Buttons</div></Link>
              <Link to='/input'><div className="item" onClick={func}>Inputs</div></Link>
              <Link to='/checkboxes'><div className="item" onClick={func}>Checkboxes</div></Link>
            </div>
          </div>
          <hr />
          <div className='section'>
            <div className='header'>Components</div>
            <div className='menu'>
              <Link to='/menu'><div className="item" onClick={func}>Menu</div></Link>
              <Link to='/table'><div className="item" onClick={func}>Tables</div></Link>
              <Link to='/dropdown'><div className="item" onClick={func}>Dropdowns</div></Link>
            </div>
          </div>
          <hr />
        </div>
    )
}

export default MobileSidebar
