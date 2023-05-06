import React, { useState } from 'react';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const scrolling = () => {
        (window.scrollY >= 2) ? setScroll(true) : setScroll(false);
    }
    window.addEventListener('scroll', scrolling);
    return (
        <nav className={`navbar ${scroll ? 'active' : ''}`}>
            <div className="container-fluid">
                <div className="links col-4">
                    <ul className="list-unstyled d-flex flex-row justify-content-evenly mb-0">
                        <li>
                            <Link className={`navbar-brand col-1 text-white fw-semibold ${scroll ? 'scrolled' : ''}`} to="/">Navbar</Link>
                        </li>
                        <li>
                            <Link className={`nav-link active text-white mt-1 ${scroll ? 'scrolled' : ''}`} aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex offset-md-1 col-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <button className="btn btn-primary offset-lg-3 col-1 loginBtn">Login</button>
            </div>
        </nav>
    )
}

export default Navbar