import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

const TechStack = () => {
    const sectionRef = useRef();

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // 🔧 PERFORMANCE FIX: Batch animations instead of individual triggers
            gsap.from(".tech-card", {
                y: 50,
                opacity: 0,
                duration: 0.8, // Reduced duration for better performance
                ease: "power2.inOut",
                stagger: 0.1, // Reduced stagger
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top 70%", // Start earlier to reduce simultaneous animations
                    once: true, // 🔧 CRITICAL: Only animate once to prevent re-triggers
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, { scope: sectionRef });

    return (
        <div ref={sectionRef} id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="How I Can Contribute & My Key Skills"
                    sub="What I Bring to the Table 🤝"
                />
                <div className="tech-grid">
                    {techStackImgs.map((icon, index) => (
                        <div
                            key={`${icon.name}-${index}`} // Fixed key prop
                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                        >
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <img src={icon.imgPath} alt={icon.name} />
                                </div>
                                <div className="padding-x w-full">
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;