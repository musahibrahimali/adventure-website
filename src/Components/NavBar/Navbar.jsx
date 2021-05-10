import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { MenuItems } from '../MenuItems';
import './Navbar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    useEffect(() => { showButton() }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRLV <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {
                            MenuItems.map((item, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <Link to={item.url} className={item.cName} onClick={closeMobileMenu} >{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavBar;
