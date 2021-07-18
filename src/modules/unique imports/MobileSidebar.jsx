import React from 'react'

const MobileSidebar = () => {
    return (
      <div className='mobile-navbar'>
        <div class="ui menu">
          <button class="ui icon button">
            <i class="bars icon"></i>
          </button>
          <div class="header item">
            Open Library UI Kit
          </div>
        </div>


        <div className="mobile-sidebar">
          <div className='section'>
            <div className='header'>Welcome</div>
            <div className='menu'>
              <div className="item">Introduction</div>
              <div className="item">Getting started</div>
              <div className="item">Examples</div>
            </div>
          </div>
          <hr />
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
      </div>
    )
}

export default MobileSidebar
