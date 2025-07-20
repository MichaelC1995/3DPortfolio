import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);
    const gradientLineRef = useRef(null);
    const observerRef = useRef(null);

    useGSAP(() => {
        const isMobileLayout = window.innerWidth < 1280;
        if (isMobileLayout || !gradientLineRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const logos = sectionRef.current.querySelectorAll('.timeline-logo');


                    logos.forEach((logo, index) => {
                        if (index === 0) return;

                        const startGlow = index / logos.length;

                        if (progress >= startGlow) {
                            logo.classList.add('logo-glow');
                        } else {
                            logo.classList.remove('logo-glow');
                        }
                    });
                }
            }
        });

        tl.fromTo(gradientLineRef.current,
            {
                scaleY: 0,
                transformOrigin: "top center"
            },
            {
                scaleY: 1,
                ease: "none",
                duration: 1
            }
        );

        const logos = sectionRef.current.querySelectorAll('.timeline-logo');
        logos.forEach((logo) => {
            gsap.fromTo(logo,
                {
                    scale: 0,
                    opacity: 0
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: logo,
                        start: "top 85%",
                        once: true
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, { scope: sectionRef });

    useEffect(() => {
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        const observerOptions = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        observerRef.current = new IntersectionObserver((entries) => {
            const isMobileLayout = window.innerWidth < 1280;

            entries.forEach((entry, index) => {
                if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
                    const delay = isMobileLayout ? index * 150 : 50;

                    setTimeout(() => {
                        requestAnimationFrame(() => {
                            entry.target.classList.add('animate-in');
                        });
                        observerRef.current?.unobserve(entry.target);
                    }, delay);
                }
            });
        }, observerOptions);

        const timer = setTimeout(() => {
            const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
            animatedElements?.forEach(el => observerRef.current?.observe(el));
        }, 100);

        return () => {
            clearTimeout(timer);
            observerRef.current?.disconnect();
        };
    }, []);

    return (
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
                    <div className="hidden xl:block relative">
                        <div className="timeline-container absolute left-1/2 -translate-x-1/2 top-0 h-full pointer-events-none">
                            <div className="continuous-timeline relative h-full">
                                <div className="bg-black" />
                                <div
                                    ref={gradientLineRef}
                                    className="gradient-line-continuous gradient-line-animated"
                                    data-testid="gradient-line"
                                />
                            </div>
                        </div>
                        <div className="relative z-50 xl:space-y-32 space-y-10">
                            {expCards.map((card, index) => (
                                <div key={`${card.title}-${index}`} className="xl:grid xl:grid-cols-12 xl:gap-10">
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="xl:col-span-5 timeline-card animate-on-scroll slide-from-left">
                                                <GlowCard card={card} index={index}>
                                                    <div>
                                                        <img src={card.imgPath} alt="exp-img" loading="lazy" />
                                                    </div>
                                                </GlowCard>
                                            </div>
                                            <div className="xl:col-span-2 relative flex justify-center">
                                                <div className="timeline-logo">
                                                    <img src={card.logoPath} alt="logo" loading="lazy" />
                                                </div>
                                            </div>
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
                                            <div className="xl:col-span-2 relative flex justify-center">
                                                <div className="timeline-logo">
                                                    <img src={card.logoPath} alt="logo" loading="lazy" />
                                                </div>
                                            </div>
                                            <div className="xl:col-span-5 timeline-card animate-on-scroll slide-from-right">
                                                <GlowCard card={card} index={index}>
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

                    <div className="xl:hidden relative">
                        <div className="relative z-50 space-y-10">
                            {expCards.map((card, index) => (
                                <div key={`${card.title}-${index}`}>
                                    <div className="timeline-card animate-on-scroll slide-from-bottom">
                                        <GlowCard card={card} index={index}>
                                            <div>
                                                <img src={card.imgPath} alt="exp-img" loading="lazy" />
                                            </div>
                                        </GlowCard>
                                    </div>
                                    <div className="flex gap-5 md:gap-10 mt-10">
                                        <div className="relative flex flex-col items-center flex-shrink-0">
                                            <div className="timeline-logo-mobile animate-on-scroll scale-in">
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
    );
};

export default Experience;