import React, { useState, useEffect, useRef } from 'react'

const Header = () => {
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()

    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
          const show = window.scrollY > 400
          if (navRef.current !== show) {
            setNavBackground(show)
          }
        }
        document.addEventListener('scroll', handleScroll)

        return (() => {
          document.removeEventListener('scroll', handleScroll)
        })
    }, [])

    return (
        <div className='header'  style={{
        backgroundColor: `${navBackground ? 'transparent' : 'pink'}`, 
        color: `${navBackground ? 'black' : 'white'}`
        }}>
            OpenLibrary
        </div>
    )
}

export default Header
