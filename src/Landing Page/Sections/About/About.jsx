import React from 'react'
import { Segment, Card, Header, Icon, Grid } from 'semantic-ui-react'

const About = () => {  
  return (
    <div classname='about'>
      {/* Header for the about section */}
      <Header as='h3' textAlign='center'>
        Centered
      </Header>

      {/* Grid outline and specifications (First row) */}
      <Grid stackable columns={3}>
        <Grid.column>
          {/* Column 1 card */}
          <Card centered>
            <Segment textAlign='center'>
              <Header as='h3' icon>
                <Icon name='cogs' />
                <Header.Subheader>
                  Become a beta user (coming soon...)
                </Header.Subheader>
              </Header>
            </Segment>
          </Card>
        </Grid.column>
        <Grid.column>
          {/* Column 2 card */}
          <Card centered>
            <Segment textAlign='center'>
              <Header as='h3' icon>
                <Icon name='cogs' />
                <Header.Subheader>
                  Become a beta user (coming soon...)
                </Header.Subheader>
              </Header>
            </Segment>
          </Card>
        </Grid.column>
        <Grid.column>
          {/* Column 3 card */}
          <Card centered>
            <Segment textAlign='center'>
              <Header as='h3' icon>
                <Icon name='cogs' />
                <Header.Subheader>
                  Become a beta user (coming soon...)
                </Header.Subheader>
              </Header>
            </Segment>
          </Card>
        </Grid.column>
        <Grid.column>
          {/* Column 1 content */}
          <Card centered>
            <Segment textAlign='center'>
              <Header as='h3' icon>
                <Icon name='cogs' />
                <Header.Subheader>
                  Become a beta user (coming soon...)
                </Header.Subheader>
              </Header>
            </Segment>
          </Card>
        </Grid.column>
        <Grid.column>
          {/* Content 2 card */}
          <Card centered>
            <Segment textAlign='center'>
              <Header as='h3' icon>
                <Icon name='cogs' />
                <Header.Subheader>
                  Become a beta user (coming soon...)
                </Header.Subheader>
              </Header>
            </Segment>
          </Card>
        </Grid.column>
        <Grid.column>
          {/* Column 3 card */}
          <Card centered>
            <Segment textAlign='center'>
              <Header as='h3' icon>
                <Icon name='cogs' />
                <Header.Subheader>
                  Become a beta user (coming soon...)
                </Header.Subheader>
              </Header>
            </Segment>
          </Card>
        </Grid.column>
      </Grid>
    </div>
  )
}

export default About
