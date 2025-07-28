import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/Navbar.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => (
    <>
        <Navbar />
        <Hero />
        <ShowcaseSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
    </>
);

export default App;