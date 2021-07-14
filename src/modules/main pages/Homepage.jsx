import React from 'react'

const Homepage = () => {
    return (
        //Sidebar
        <div className='sidebar'>

          //A segment in the nav bar
            <div className='section'>

              //The main header/title of each segment
              <div className='header'>Welcome</div>

              //A selection of sub-menus
              <div className='menu'>
                <div className="item">Introduction</div>
                <div className="item">Getting started</div>
                <div className="item">Examples</div>
              </div>
            </div>

            //Horizontal line
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

export default Homepage