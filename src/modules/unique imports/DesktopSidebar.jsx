import React from 'react'
import { Link } from 'react-router-dom'

const DesktopSidebar = () => {
    return (
      <div className='sidebar'>
        <Link to='/'>
          <div style={{color: '#fe9526', display: 'inline-block', fontSize: '1.5rem', lineHeight: '1.6rem', paddingBottom: '10px'}}>
            Open Library
            <span style={{color: '#00194c', display: 'block'}}>
              UI Kit
            </span>
          </div>
        </Link>
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
