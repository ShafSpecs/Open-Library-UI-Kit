import React, { useState, useEffect } from 'react'
import { Divider } from 'semantic-ui-react'
import MobileNavbar from '../unique imports/MobileNavbar'
import DesktopSidebar from '../unique imports/DesktopSidebar'
import ComponentTab from './ComponentTab'


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
  const breakpoint = 759;

  return width > breakpoint ? <DesktopSidebar /> : <MobileNavbar />;
};


const PageLayout = ({title='Page Title', description=`This page's description`, classname, children=`This page's description` }) => {
    return (
        <ViewportProvider>
        <div className='pagelayout'>
            <Navbar />
            <div className='mainpage'>
                <div className="pagetitle">
                    <h2 className='title'>{title}</h2>
                    <h5 className='desc'>{description}</h5>
                </div>
                <Divider />
                <div className={classname}>
                  {children}
                </div>
            </div>
        </div>
        </ViewportProvider>
    )
}

export default PageLayout
