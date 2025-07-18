import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";

const App = () => {
    // 🔧 GLOBAL CLEANUP: Prevent memory leaks on app unmount
    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <ShowcaseSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
        </>
    )
}

export default App