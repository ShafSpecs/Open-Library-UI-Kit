import React from 'react'
import Sidebar from './Sidebar'

const PageLayout = ({title='Page Title', description=`This page's description`, classname, children}) => {
    return (
        <div className='pagelayout'>
            <Sidebar />
            <div className="pagetitle">
                <h2 className='title'>{title}</h2>
                <h5 className='desc'>{description}</h5>
            </div>
            <div className={classname}>children</div>
        </div>
    )
}

export default PageLayout
