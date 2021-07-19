import React from 'react'
import Header from '../modules/components/Header'

const Hompage = () => {

    return (
        <div>
            {window.innerWidth < 760 ? 
            <MobileNavbar /> 
            :
            <Header />}
        </div>
    )
}

export default Hompage
