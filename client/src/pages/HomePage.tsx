import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import { useState } from 'react'; 

function HomePage() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <HeroSection />
            <MapSection />
        </>
    );
}

export default HomePage;