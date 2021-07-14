import React from 'react'

const Homepage = () => {
    return (
        <div className='sidebar'>
            <div className='section'>
              <div className='header'>Welcome</div>
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
    )
}

const Sidebar = () => {
    return (
        <div>
            <div class="ui vertical menu">
  <div class="item">
    <div class="header">Welcome</div>
    <div class="menu">
      <a class="item">Introduction</a>
      <a class="item">Getting started</a>
      <a class="item">Examples</a>
    </div>
  </div>
  <div class="item">
    <div class="header">Page Elements</div>
    <div class="menu">
      <a class="item">Buttons</a>
      <a class="item">Links</a>
      <a class="item">Inputs</a>
    </div>
  </div>
  <div class="item">
    <div class="header">Components</div>
    <div class="menu">
      <a class="item">Table</a>
      <a class="item">Dialogs</a>
    </div>
  </div>
  <div class="item">
    <div class="header">Support</div>
    <div class="menu">
      <a class="item">E-mail Support</a>
      <a class="item">FAQs</a>
    </div>
  </div>
</div>
        </div>
    )
}

export default Homepage