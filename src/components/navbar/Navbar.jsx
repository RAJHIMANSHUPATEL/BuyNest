import React, { useState } from 'react'
import '../../styles/styles.css'
import { Link, useLocation } from 'react-router-dom' // ✅ use 'react-router-dom'

function Navbar() {
    const [activeLink, setActiveLink] = useState('home')
    const location = useLocation() // optional: for URL-based highlighting

    const navLinks = [
        { displayName: 'Home', path: '/' },
        { displayName: 'About', path: '/about' },
        { displayName: 'Products', path: '/products' },
        { displayName: 'Contact', path: '/contact' },
        { displayName: 'Blogs', path: '/blogs' },
    ]

    return (
        <header>
            <nav className="main-navbar container">
                <div className="logo">
                    <h2>BuyNest</h2>
                </div>
                <ul className="nav-list">
                    {navLinks.map((link, index) => {
                        const isActive =
                            activeLink === link.displayName.toLowerCase()
                        return (
                            <li
                                key={index}
                                className={isActive ? 'active-link' : ''}
                                onClick={() =>
                                    setActiveLink(link.displayName.toLowerCase())
                                }
                            >
                                <Link className="nav-link" to={link.path}>{link.displayName}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className='secondary-nav'>
                <div className='secondary-nav-con container'>
                    <h4>Stores</h4>
                    <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, autem.
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
