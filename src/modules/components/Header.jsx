import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

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
      <Link to='/'>
        <div className='landing-page-header'  style={{
        backgroundColor: `${navBackground ? 'white' : 'transparent'}`, 
        color: `${navBackground ? 'black' : 'white'}`,
        }}>
            OpenLibrary UI Kit
        </div>
      </Link>
    )
}

export default Header
