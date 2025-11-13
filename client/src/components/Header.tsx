/* STYLE */
import './Header.css';
/* REACT */
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {

    // If not logged: display "Log In". If logged in: display "Log Out" + Dropdown menu
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //Click opens the modal for user auth
    const handleLoginClick = () => {
        // Later: trigger login modal
        console.log("Open login modal");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <header className="header">
            <div className="header_container">

                {/* Left: Logo */}
                <div className="header-logo">
                    <Link to="/" className="logo-link">
                        <img 
                            src="/images/dinolog_logo-light.png" 
                            alt="DinoLog logo" 
                            className="logo-img"
                        />
                    </Link>
                </div>
                
                {/* Center: Navigation */}
                <nav className="header-nav">
                    <a href="#discoveries">Discoveries</a>
                </nav>

                {/* Right: User section */}
                <div className="header-user">
                    {!isLoggedIn ? (
                        <button className="header-login-btn" onClick={handleLoginClick}>
                            Log In
                        </button>
                    ) : (
                        <div className="user-menu">
                            <img 
                                src="/images/dinolog_default-avatar.jpg" 
                                alt="User avatar" 
                                className="user-avatar"
                            />
                            <div className="dropdown">
                                <Link to="/myfossils">My Fossils</Link>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    )}
                </div> 
            </div>
        </header>
    );
};
/*
Add scroll detection to make header more or less opaque when the user scrolls down?
*/
export default Header;