import React from 'react'
import { Segment, Card, Header, Icon, Grid } from 'semantic-ui-react'

const About = () => {  
  return (
    <div className='about'>
      {/* Header for the about section */}
      <Header as='h2' textAlign='center' style={{padding: '1rem', color: '#6d6b6c'}}>
        Extra things you can do
      </Header>

      {/* Grid outline and specifications (First row) */}
      <Grid stackable columns={3}>
        <Grid.Column>
          {/* Column 1 card */}
          <Card centered>
            <Segment textAlign='center'>
              <Header as='h6' icon>
                <Icon name='github' />
                <Header.Subheader>
                  Contribute on github.
                </Header.Subheader>
              </Header>
            </Segment>
          </Card>
        </Grid.Column>
        <Grid.Column>
          {/* Column 2 card */}
          <Card centered>
            <Segment textAlign='center'>
              <Header as='h6' icon>
                <Icon name='file alternate' />
                <Header.Subheader>
                  Get ready-made components
                </Header.Subheader>
              </Header>
            </Segment>
          </Card>
        </Grid.Column>
        <Grid.Column>
          {/* Column 3 card */}
          <Card centered>
            <Segment textAlign='center'>
              <Header as='h6' icon>
                <Icon name='coffee' />
                <Header.Subheader>
                  Buy me a coffee on buymeacoffee.com
                </Header.Subheader>
              </Header>
            </Segment>
          </Card>
        </Grid.Column>
        <Grid.Column>
          {/* Column 1 content */}
          <Card centered>
            <Segment textAlign='center'>
              <Header as='h6' icon>
                <Icon name='heart' />
                <Header.Subheader>
                  Donate to the project
                </Header.Subheader>
              </Header>
            </Segment>
          </Card>
        </Grid.Column>
        <Grid.Column>
          {/* Content 2 card */}
          <Card centered>
            <Segment textAlign='center'>
              <Header as='h6' icon>
                <Icon name='share' />
                <Header.Subheader>
                  Share with friends and co-developers
                </Header.Subheader>
              </Header>
            </Segment>
          </Card>
        </Grid.Column>
        <Grid.Column>
          {/* Column 3 card */}
          <Card centered>
            <Segment disabled textAlign='center'>
              <Header as='h6' icon>
                <Icon name='cogs' />
                <Header.Subheader>
                  Become a beta user (coming soon...)
                </Header.Subheader>
              </Header>
            </Segment>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default About
