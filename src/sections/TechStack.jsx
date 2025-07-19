import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
    const sectionRef = useRef();

    useGSAP(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const ctx = gsap.context(() => {
            const skillsElement = document.querySelector("#skills");
            if (!skillsElement) {
                console.warn("TechStack: #skills element not found, skipping animation");
                return;
            }
            gsap.fromTo(
                ".tech-card",
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.inOut",
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: skillsElement,
                        start: "top 80%",
                        once: true,
                        onEnter: () => console.log("TechStack: ScrollTrigger entered"),
                        onLeave: () => console.log("TechStack: ScrollTrigger left"),
                    },
                }
            );
        }, sectionRef);
        return () => {
            console.log("TechStack: Cleaning up GSAP context");
            ctx.revert();
        };
    }, { scope: sectionRef });

    // Refresh ScrollTrigger after DOM is rendered
    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
            console.log("TechStack: ScrollTrigger refreshed");
        }, 100);
        return () => clearTimeout(timer);
    }, []);

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
                            key={`${icon.name}-${index}`}
                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                        >
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <img src={icon.imgPath} alt={icon.name} loading="lazy" />
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