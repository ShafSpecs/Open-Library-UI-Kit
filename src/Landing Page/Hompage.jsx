// import react from it's library
import React from 'react'

// import React Router
import { Link } from 'react-router-dom';

// import needed packages from material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// import miscellaneous packages from their respective diectory
import classNames from "classnames";

// import styles
import styles from "./Sections/landingPage";

// import required components
import MobileNavbar from '../modules/unique imports/MobileNavbar'
import Header from '../modules/components/Header'
import imageBg from '../Images/landing-bg.jpg'
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
            <Parallax filter image={`${imageBg}`}>
                <div className={classes.desc}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <h1 className={classes.title}>Your ever-growing React UI Kit.</h1>
                      <h4>
                        Every landing page needs a small description after the big bold
                        title, that{"'"}s why we added this text here. Add here all the
                        information that can make you or your product create the first
                        impression.
                      </h4>
                      <div class="ui animated button" tabindex="0" style={{backgroundColor: '#fe9526', color: 'white'}}>
                        <Link to='/introduction'>
                          <div class="visible content" style={{color: 'white'}}>Browse our Library</div>
                          <div class="hidden content" style={{color: 'white'}}>
                            <i class="right arrow icon"></i>
                          </div>
                        </Link>
                      </div>
                    </GridItem>
                  </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <About />
              </div>
            </div>   
        </div>
    )
}

export default Hompage
