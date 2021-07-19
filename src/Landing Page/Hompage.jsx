import React from 'react'
import MobileNavbar from '../modules/unique imports/MobileNavbar'
import Header from '../modules/components/Header'
import image from '../Images/landing-bg.jpg'

const Hompage = () => {
    return (
        <div>
            {window.innerWidth < 760 ? 
            (<MobileNavbar />) 
            :
            (<Header />)}
            <div>
                <div className='sectiondesktopnav'>
                    <img src={image} className='bg-image'/>
                </div>
            </div>
        </div>
    )
}

export default Hompage
