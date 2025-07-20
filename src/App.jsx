import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGLTF } from "@react-three/drei";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import { usePassiveScroll } from "./hooks/usePassiveScroll.js";

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload("/models/optimized-room.glb");
useGLTF.preload("/models/computer-optimized-transformed.glb");

const App = () => {
    usePassiveScroll();

    useEffect(() => {
        ScrollTrigger.config({ autoRefreshEvents: "resize,load,visibilitychange" });
        ScrollTrigger.refresh();
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            gsap.killTweensOf("*");
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
            <Testimonials />
            <Contact />
        </>
    );
};

export default App;