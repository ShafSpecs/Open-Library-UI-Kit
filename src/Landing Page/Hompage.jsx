// import react from it's library
import React from 'react'

// import Senatic-UI components
import { Button, Icon } from 'semantic-ui-react'

// import React Router
import { Link } from 'react-router-dom';

// import needed packages from material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// import miscellaneous packages from their respective diectory
import classNames from "classnames";
import LazyLoad from 'react-lazyload'

// import styles
import styles from "./Sections/landingPage";

// import required components
import MobileNavbar from '../modules/unique imports/MobileNavbar'
import Header from '../modules/components/Header'
import imageBg from '../Images/landing-bg.webp'
import GridContainer from './Sections/Grid/GridContainer'
import GridItem from './Sections/Grid/GridItem'
import Parallax from './Sections/Parallax/Parallax'
import About from './Sections/About/About';

const useStyles = makeStyles(styles);

const Hompage = () => {
    const classes = useStyles();

    return (
        <div className='home'>
            {window.innerWidth < 760 ? 
            (<MobileNavbar />) 
            :
            (<Header />)}
            <LazyLoad placeholder={<Icon loading name='spinner'/>}>
            <Parallax filter image={`${imageBg}`}>
                <div className={classes.desc}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <h1 className={classes.title}>Your ever-growing React UI Kit.</h1>
                      <h4>
                        Every landing page needs a small description after the big bold
                        title, that{"'"}s why we added this text here.
                      </h4>
                      <Button animated style={{backgroundColor: '#fe9526', color: 'white'}}>
                        <Link to='/introduction'>
                          <Button.Content visible style={{color: 'white'}}>Browse our Library</Button.Content>
                          <Button.Content hidden style={{color: 'white'}}>
                            <Icon name='arrow right'/>
                          </Button.Content>
                        </Link>
                      </Button>
                    </GridItem>
                  </GridContainer>
                </div>
            </Parallax>
            </LazyLoad>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <About />
              </div>
            </div>   
        </div>
    )
}

export default Hompage
