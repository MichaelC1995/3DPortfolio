import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ShowcaseSection />
            <FeatureCards />
            <ExperienceSection />
        </>
    )
}
export default App
