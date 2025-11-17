/* STYLE */
import './HeroSection.css';

function HeroSection() {

    // Scrolls smoothly to discoveries/map section
    const handleScrollToDiscoveries = () => {
        const discoverMap = document.querySelector('#discoveries');
        if (discoverMap) { discoverMap.scrollIntoView({ behavior: 'smooth' }); }
    };

    //Click opens the modal for user auth
    const handleLoginClick = () => {
        // Later: trigger login modal
        console.log("Open login modal");
    };

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
                    <button className="hero-btn login-btn" aria-label="Open login modal" onClick={handleLoginClick}>
                        Log In
                    </button>
                </div>
            </div>

        </section>
    );
}

export default HeroSection;