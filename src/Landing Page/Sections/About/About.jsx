import React from 'react'

const About = () => {
  return (
    <div classname='about'>
      <div class='ui basic center aligned segment'>
        <h2>Extra things to do around here</h2>
      </div>
      <div class="ui stackable three column grid">
        <div class="column">
          <div class='ui link card'>
            <div class='ui center aligned segment'>
              <div class='ui icon headr'>
                <i class="github icon"></i>
              </div>
              <br />
              <div style={{color: '#b1b1b1'}}>
                Contribute to our github.
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class='ui link card'>
            <div class='ui center aligned segment'>
              <div class='ui icon headr'>
                <i class="file alternate icon"></i>
              </div>
              <br />
              <div style={{color: '#b1b1b1'}}>
                Get ready-made components for your project
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class='ui link card'>
            <div class='ui center aligned segment'>
              <div class='ui icon headr'>
                <i class="coffee icon"></i>
              </div>
              <br />
              <div style={{color: '#b1b1b1'}}>
                Buy me a cup of coffee on buymeacoffee.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui stackable three column grid">
        <div class="column">
          <div class='ui link card'>
            <div class='ui center aligned segment'>
              <div class='ui icon headr'>
                <i class="github icon"></i>
              </div>
              <br />
              <div style={{color: '#b1b1b1'}}>
                Contribute to our github.
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class='ui link card'>
            <div class='ui center aligned segment'>
              <div class='ui icon headr'>
                <i class="share alternate icon"></i>
              </div>
              <br />
              <div style={{color: '#b1b1b1'}}>
                Share with friends and co-developers.
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class='ui link card'>
            <div class='ui center aligned segment'>
              <div class='ui icon headr'>
                <i class="github icon"></i>
              </div>
              <br />
              <div style={{color: '#b1b1b1'}}>
                Contribute to our github.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
