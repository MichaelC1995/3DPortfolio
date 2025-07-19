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

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload("/models/optimized-room.glb");
useGLTF.preload("/models/computer-optimized-transformed.glb");

const App = () => {
    useEffect(() => {
        ScrollTrigger.config({ autoRefreshEvents: "resize,load,visibilitychange" });
        ScrollTrigger.refresh();
        console.log("App: Active ScrollTriggers:", ScrollTrigger.getAll().length);
        return () => {
            console.log("App: Active ScrollTriggers before cleanup:", ScrollTrigger.getAll().length);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            gsap.killTweensOf("*");
            console.log("App: Active ScrollTriggers after cleanup:", ScrollTrigger.getAll().length);
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