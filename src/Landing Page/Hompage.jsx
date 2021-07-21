import React from 'react'
import MobileNavbar from '../modules/unique imports/MobileNavbar'
import Header from '../modules/components/Header'
import image from '../Images/landing-bg.jpg'
import Product from './Sections/Product'

const Hompage = () => {
    return (
        <div className='home'>
            {window.innerWidth < 760 ? 
            (<MobileNavbar />) 
            :
            (<Header />)}
            <div>
                <div className='sectiondesktopnav'>
                    <img src={image} className='bg-image'/>
                </div>
            </div>
            <br />
            <Product />
        </div>
    )
}

export default Hompage
