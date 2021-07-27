// import react and hooks from the react library
import React, { useEffect, useState } from 'react'

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

// create a `viewportContext` to store state of page dimensions.
const viewportContext = React.createContext({});

// function to create a state for the width and height of page.
const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // function to change the current width and height to an updated one.
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
}

// Component for the Top navbar of the page (depending on the page width)
const Navbar = () => {
  const { width } = useViewport();
  const breakpoint = 760;

  return width < breakpoint ? <MobileNavbar /> : <Header />;
};


const Hompage = () => {
    const classes = useStyles();

    return (
      <ViewportProvider>
        <div className='home'>
            <Navbar />
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
                      <Button as={Link} to='/introduction' animated style={{backgroundColor: '#fe9526', color: 'white'}}>
                          <Button.Content visible style={{color: 'white'}}>Browse our Library</Button.Content>
                          <Button.Content hidden style={{color: 'white'}}>
                            <Icon name='arrow right'/>
                          </Button.Content>
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
      </ViewportProvider>
    )
}

export default Hompage
