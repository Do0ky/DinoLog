/* STYLE */
import './Header.css';
/* REACT */
import { Link } from 'react-router-dom';
import { useState } from 'react';
/* COMPONENT */
import AuthModal from './AuthModal';

function Header() {

    // If not logged: display "Log In". If logged in: display "Log Out" + Dropdown menu
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Log in Modal not visible
    const [showAuthModal, setShowAuthModal] = useState(false);

    // Scrolls smoothly to discoveries/map section
    const handleScrollToDiscoveries = (e: React.MouseEvent) => {
        e.preventDefault(); // prevent jump
        const discoverMap = document.querySelector('#discoveries');
        if (discoverMap) { discoverMap.scrollIntoView({ behavior: "smooth" }); }
    };

    //Click opens the AuthModal
    const openAuthModal = () => setShowAuthModal(true);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
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
                
                {/* Navigation */}
                <div className="header-user">
                    <a 
                        href="#discoveries" 
                        className="header-discoveries-link" 
                        onClick={handleScrollToDiscoveries}
                    >
                        Discoveries
                    </a>
                
                {/* User section */}
                    {!isLoggedIn ? (
                        <button className="header-login-btn" onClick={openAuthModal}>
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

        {/* Auth Modal */}
            {showAuthModal && (
                <AuthModal closeModal={ () => setShowAuthModal(false) } />
            )}
        </>
    );
};

export default Header;