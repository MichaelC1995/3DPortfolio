import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ExperienceSection: ErrorBoundary caught:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="text-white p-5">
                    Error rendering Experience section: {this.state.error?.message || "Unknown error"}. Check console.
                </div>
            );
        }
        return this.props.children;
    }
}

const Experience = () => {
    const sectionRef = useRef(null);

    // Using CSS animations with Intersection Observer instead of GSAP for this section
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all animated elements
        const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        animatedElements?.forEach(el => observer.observe(el));

        return () => {
            animatedElements?.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <ErrorBoundary>
            <section
                id="experience"
                className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
                ref={sectionRef}
            >
                <div className="w-full h-full md:px-20 px-5">
                    <TitleHeader
                        title="Professional Work Experience"
                        sub="💼 My Career Overview"
                    />
                    <div className="mt-32 relative">
                        {/* Desktop Layout */}
                        <div className="hidden xl:block relative">
                            <div className="timeline-container absolute left-1/2 -translate-x-1/2 top-0 h-full pointer-events-none">
                                <div className="continuous-timeline relative h-full">
                                    <div className="bg-black" />
                                    <div className="gradient-line-continuous" data-testid="gradient-line" />
                                </div>
                            </div>
                            <div className="relative z-50 xl:space-y-32 space-y-10">
                                {expCards.map((card, index) => (
                                    <div key={`${card.title}-${index}`} className="xl:grid xl:grid-cols-12 xl:gap-10">
                                        {index % 2 === 0 ? (
                                            <>
                                                {/* Left side card */}
                                                <div className="xl:col-span-5 timeline-card animate-on-scroll slide-from-left">
                                                    <GlowCard card={card}>
                                                        <div>
                                                            <img src={card.imgPath} alt="exp-img" loading="lazy" />
                                                        </div>
                                                    </GlowCard>
                                                </div>
                                                {/* Center logo */}
                                                <div className="xl:col-span-2 relative flex justify-center">
                                                    <div className="timeline-logo animate-on-scroll scale-in">
                                                        <img src={card.logoPath} alt="logo" loading="lazy" />
                                                    </div>
                                                </div>
                                                {/* Right side text */}
                                                <div className="xl:col-span-5 expText animate-on-scroll slide-from-right">
                                                    <h1 className="font-semibold text-3xl">{card.title}</h1>
                                                    <p className="my-5 text-white-50">📅 {card.date}</p>
                                                    <p className="text-[#839CB5] italic">Responsibilities</p>
                                                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                        {card.responsibilities.map((responsibility, idx) => (
                                                            <li key={idx} className="text-lg">{responsibility}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {/* Left side text */}
                                                <div className="xl:col-span-5 expText animate-on-scroll slide-from-left">
                                                    <h1 className="font-semibold text-3xl">{card.title}</h1>
                                                    <p className="my-5 text-white-50">📅 {card.date}</p>
                                                    <p className="text-[#839CB5] italic">Responsibilities</p>
                                                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                        {card.responsibilities.map((responsibility, idx) => (
                                                            <li key={idx} className="text-lg">{responsibility}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {/* Center logo */}
                                                <div className="xl:col-span-2 relative flex justify-center">
                                                    <div className="timeline-logo animate-on-scroll scale-in">
                                                        <img src={card.logoPath} alt="logo" loading="lazy" />
                                                    </div>
                                                </div>
                                                {/* Right side card */}
                                                <div className="xl:col-span-5 timeline-card animate-on-scroll slide-from-right">
                                                    <GlowCard card={card}>
                                                        <div>
                                                            <img src={card.imgPath} alt="exp-img" loading="lazy" />
                                                        </div>
                                                    </GlowCard>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile/Tablet Layout */}
                        <div className="xl:hidden relative">
                            <div className="timeline-container absolute left-1/2 -translate-x-1/2 top-0 h-full pointer-events-none">
                                <div className="continuous-timeline relative h-full">
                                    <div className="bg-black" />
                                    <div className="gradient-line-continuous" data-testid="gradient-line" />
                                </div>
                            </div>
                            <div className="relative z-50 space-y-10">
                                {expCards.map((card, index) => (
                                    <div key={`${card.title}-${index}`}>
                                        <div className="timeline-card animate-on-scroll slide-from-bottom">
                                            <GlowCard card={card}>
                                                <div>
                                                    <img src={card.imgPath} alt="exp-img" loading="lazy" />
                                                </div>
                                            </GlowCard>
                                        </div>
                                        <div className="flex gap-5 md:gap-10 mt-10">
                                            <div className="relative flex flex-col items-center flex-shrink-0">
                                                <div className="timeline-logo animate-on-scroll scale-in">
                                                    <img src={card.logoPath} alt="logo" loading="lazy" />
                                                </div>
                                            </div>
                                            <div className="flex-1 expText animate-on-scroll slide-from-bottom">
                                                <h1 className="font-semibold text-2xl md:text-3xl">{card.title}</h1>
                                                <p className="my-3 md:my-5 text-white-50 text-sm md:text-base">
                                                    📅 {card.date}
                                                </p>
                                                <p className="text-[#839CB5] italic text-sm md:text-base">
                                                    Responsibilities
                                                </p>
                                                <ul className="list-disc ms-5 mt-3 md:mt-5 flex flex-col gap-3 md:gap-5 text-white-50">
                                                    {card.responsibilities.map((responsibility, idx) => (
                                                        <li key={idx} className="text-sm md:text-lg">{responsibility}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>
    );
};

export default Experience;