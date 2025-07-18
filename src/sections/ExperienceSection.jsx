import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef();
    const timelineRef = useRef();

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Timeline cards animation
            gsap.utils.toArray(".timeline-card").forEach((card) => {
                gsap.from(card, {
                    xPercent: -100,
                    opacity: 0,
                    transformOrigin: "left left",
                    duration: 1,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        once: true,
                    },
                });
            });

            // 🎯 ENHANCED TIMELINE ANIMATION: Properly implemented with direct property updates
            gsap.set(".timeline", {
                scaleY: 1,
                transformOrigin: "bottom bottom"
            });

            ScrollTrigger.create({
                trigger: ".timeline",
                start: "top center",
                end: "bottom center",
                scrub: 1,
                onUpdate: (self) => {
                    // ✅ SAFE: Use gsap.set() instead of gsap.to() to prevent infinite loops
                    gsap.set(".timeline", {
                        scaleY: 1 - self.progress,
                        transformOrigin: "bottom bottom"
                    });
                }
            });

            // Text animations
            gsap.utils.toArray(".expText").forEach((text) => {
                gsap.from(text, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 60%",
                        once: true,
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
        >
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Professional Work Experience"
                    sub="My Career Overview 💼"
                />
                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {expCards.map((card, index) => (
                            <div key={card.title} className="exp-card-wrapper">
                                <div className="xl:w-2/6">
                                    <GlowCard card={card} index={index}>
                                        <div className="timeline-card">
                                            <img src={card.imgPath} alt="exp-img" />
                                        </div>
                                    </GlowCard>
                                </div>
                                <div className="xl:w-4/6">
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className="timeline" ref={timelineRef} />
                                            <div className="gradient-line w-1 h-full" />
                                        </div>
                                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                            <div className="timeline-logo">
                                                <img src={card.logoPath} alt="logo" />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-3xl">{card.title}</h1>
                                                <p className="my-5 text-white-50">
                                                    🗓️&nbsp;{card.date}
                                                </p>
                                                <p className="text-[#839CB5] italic">
                                                    Responsibilities
                                                </p>
                                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                    {card.responsibilities.map(
                                                        (responsibility, index) => (
                                                            <li key={index} className="text-lg">
                                                                {responsibility}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;