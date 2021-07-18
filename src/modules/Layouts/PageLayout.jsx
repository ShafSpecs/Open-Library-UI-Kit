import React from 'react'
import MobileNavbar from '../unique imports/MobileNavbar'
import DesktopSidebar from '../unique imports/DesktopSidebar'
import ComponentTab from './ComponentTab'

const PageLayout = ({title='Page Title', description=`This page's description`, classname }) => {
    return (
        <div className='pagelayout'>
            {screen.availWidth > 759 ? <DesktopSidebar /> : <MobileNavbar />}
            <div className='mainpage'>
                <div className="pagetitle">
                    <h1 className='title'>{title}</h1>
                    <h5 className='desc'>{description}</h5>
                </div>
                <div class="ui divider"></div>
                <div class="pusher">
                    <div className={classname}>
                        <ComponentTab />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageLayout