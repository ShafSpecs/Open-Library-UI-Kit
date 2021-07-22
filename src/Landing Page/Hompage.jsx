import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import MobileNavbar from '../modules/unique imports/MobileNavbar'
import Header from '../modules/components/Header'
import imageBg from '../Images/landing-bg.jpg'
import GridContainer from './Sections/Grid/GridContainer'
import GridItem from './Sections/Grid/GridItem'
import Parallax from './Sections/Parallax/Parallax'
import styles from "./Sections/landingPage";

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
                <div className={classes.container}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <h1 className={classes.title}>Your Story Starts With Us.</h1>
                      <h4>
                        Every landing page needs a small description after the big bold
                        title, that{"'"}s why we added this text here. Add here all the
                        information that can make you or your product create the first
                        impression.
                      </h4>
                    </GridItem>
                  </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                fghjhgfghj
              </div>
            </div>   
        </div>
    )
}

export default Hompage
