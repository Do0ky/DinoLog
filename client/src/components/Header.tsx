/* STYLE */
import './Header.css';
/* REACT */
import { Link } from 'react-router-dom';
import { useState } from 'react';
/* CONTEXT */
import { useAuth } from '../context/AuthContext';
/* COMPONENT */
import AuthModal from './AuthModal';

function Header() {

    const { isLoggedIn, user, login, logout } = useAuth();

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
                    {/* Show My Fossils link only when logged in */}
                    {isLoggedIn && (
                        <Link to="/myfossils" className="header-discoveries-link">
                        My Fossils
                        </Link>
                    )}
                
                {/* User section */}
                    {!isLoggedIn ? (
                        <button className="header-login-btn" onClick={openAuthModal}>
                            Log In
                        </button>
                    ) : (
                        <div className="user-menu">
                            <img 
                                src={user?.avatarUrl || "/images/dinolog_default-avatar.jpg"}
                                alt="Avatar" 
                                className="user-avatar"
                            />
                            <span className="user-name">{user?.username}</span>
                            <div className="dropdown">
                                <Link to="/myfossils">My Fossils</Link>
                                <button onClick={logout}>Logout</button>
                            </div>
                        </div>
                    )}
                </div> 
            </div>
        </header>

        {/* Auth Modal */}
            {showAuthModal && (
                <AuthModal 
                    closeModal={ () => setShowAuthModal(false) }
                    onLoginSuccess={login} 
                />
            )}
        </>
    );
};

export default Header;