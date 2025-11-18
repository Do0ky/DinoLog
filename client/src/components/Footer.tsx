/* STYLE */
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Left: Navigation or external links */}
                <nav className="footer-nav">
                <a href="/">Home</a>
                <a href="https://github.com/Do0ky/DinoLog" target="_blank">GitHub</a>
                </nav>

                {/* Center: Branding */}
                <div className="footer-brand">
                <img 
                    src="/images/dinolog_logo-light.png" 
                    alt="DinoLog logo" 
                    className="footer-logo"
                />
                <p className="footer-tagline">Logging the past, one fossil at a time.</p>
                </div>

                {/* Right: Credits */}
                <div className="footer-credits">
                <p>© {new Date().getFullYear()} DinoLog</p>
                <p>Made with ❤ and science</p>
                <p><em>By Claire Peyre</em></p>
                </div>
            </div>
        </footer>
  );
}

export default Footer;