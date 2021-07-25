import React from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'

const ComponentTab = ({ content }) => {
    return (
        <div className='codetab'>
            <Menu position='right'>
                <Button floated='right' animated>
                    <Button.Content visible>
                        <Icon name="css3 alternate" />
                    </Button.Content>
                    <Button.Content hidden>
                        CSS
                    </Button.Content>
                </Button>
                <Button floated='right' animated='fade'>
                    <Button.Content visible>
                        <i class="react icon"></i>
                    </Button.Content>
                    <Button.Content hidden>
                        React
                    </Button.Content>
                </Button>
            </Menu>
            <div>
                {content}
            </div>
        </div>
    )
}

export default ComponentTab
