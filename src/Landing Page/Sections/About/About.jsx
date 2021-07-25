import React from 'react'
import { Segment } from 'semantic-ui-react'

const About = () => {  
  return (
    <div classname='about'>
      {/* Header for the about section */}
      <Segment basic textAlign='center'>
        <h2 style={{color: '#5c5c5c'}}>Extra things to do around here</h2>
      </Segment>

      {/* Grid outline and specifications (First row) */}
      <div class="ui stackable three column grid">
        <div class="column">
          {/* Column 1 card */}
          <div class='ui centered link card'>
            <Segment textAlign='center'>
              {/* Icon */}
              <div class='ui icon headr'>
                <i class="github icon"></i>
              </div>
              <br />
              {/* Content */}
              <div style={{color: '#b1b1b1'}}>
                Contribute to our github.
              </div>
            </Segment>
          </div>
        </div>
        <div class="column">
          {/* Column 2 card */}
          <div class='ui centered link card'>
            <Segment textAlign='center'>
              {/* Icon */}
              <div class='ui icon headr'>
                <i class="file alternate icon"></i>
              </div>
              <br />
              {/* Content */}
              <div style={{color: '#b1b1b1'}}>
                Get ready-made components for your project
              </div>
            </Segment>
          </div>
        </div>
        <div class="column">
          {/* Column 3 card */}
          <div class='ui centered link card'>
            <Segment textAlign='center'>
              {/* Icon */}
              <div class='ui icon headr'>
                <i class="coffee icon"></i>
              </div>
              <br />
              {/* Content */}
              <div style={{color: '#b1b1b1'}}>
                Buy me a cup of coffee on buymeacoffee.com
              </div>
            </Segment>
          </div>
        </div>
      </div>

      {/* Grid outline and specifications (Second row) */}
      <div class="ui stackable three column grid">
        <div class="column">
          {/* Column 1 content */}
          <div class='ui centered link card'>
            <div class='ui center aligned segment'>
              {/* Icon */}
              <div class='ui icon headr'>
                <i class="heart icon"></i>
              </div>
              <br />
              {/* Content */}
              <div style={{color: '#b1b1b1'}}>
                Donate to the project
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          {/* Content 2 card */}
          <div class='ui centered link card'>
            <div class='ui center aligned segment'>
              {/* Icon */}
              <div class='ui icon headr'>
                <i class="share alternate icon"></i>
              </div>
              <br />
              {/* Content */}
              <div style={{color: '#b1b1b1'}}>
                Share with friends and co-developers.
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          {/* Column 3 card */}
          <div class='ui centered card'>
            <div class='ui disabled center aligned segment'>
              {/* Icon */}
              <div class='ui icon headr'>
                <i class="cogs icon"></i>
              </div>
              <br />
              {/* Content */}
              <div style={{color: '#b1b1b1'}}>
                Become a beta user (coming soon...)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
