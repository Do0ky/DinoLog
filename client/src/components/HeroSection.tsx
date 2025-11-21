/* STYLE */
import './HeroSection.css';
/* REACT */
import { useState } from 'react';
/* CONTEXT */
import { useAuth } from '../context/AuthContext';
/* COMPONENT */
import AuthModal from './AuthModal';

function HeroSection() {

    const { isLoggedIn, login, logout } = useAuth();

    // Modal visibility
    const [showAuthModal, setShowAuthModal] = useState(false);

    // Scrolls smoothly to discoveries/map section
    const handleScrollToDiscoveries = () => {
        const discoverMap = document.querySelector('#discoveries');
        if (discoverMap) { discoverMap.scrollIntoView({ behavior: 'smooth' }); }
    };

    //Open modal for user auth
    const openAuthModal = () => setShowAuthModal(true);

    return(
        <section className="hero" aria-label="DinoLog hero section">

            {/* Background overlay */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="hero-content">
                <h1 className="hero-title">Dino<em>Log</em></h1>
                <p className="hero-subtitle">Logging the past,<br/>one fossil at a time.</p>
                
                <div className="hero-buttons">
                    <button className="hero-btn explore-btn" aria-label="Scroll to discoveries map" onClick={handleScrollToDiscoveries}>
                        Explore Discoveries
                    </button>
                    {!isLoggedIn ? (
                        <button className="hero-btn login-btn" aria-label="Open login modal" onClick={openAuthModal}>
                            Log In
                        </button>
                    ) : (
                        <button className="hero-btn login-btn" aria-label="Logout" onClick={logout}>
                            Logout
                        </button>
                    )}
                </div>
            </div>

            {/* Auth Modal */}
            {showAuthModal && (
                <AuthModal 
                    closeModal={ () => setShowAuthModal(false) }
                    onLoginSuccess={login}  
                />
            )}

        </section>
    );
}

export default HeroSection;