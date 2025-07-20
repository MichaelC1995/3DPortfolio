import React, { useRef, useState, useEffect } from 'react';
import { words } from '../constants/index.js';
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
    const heroRef = useRef();
    const wrapperRef = useRef();
    const [show3D, setShow3D] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [renderQuality, setRenderQuality] = useState('high');
    const scrollTimeoutRef = useRef();

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Only animate text, not the 3D canvas
            gsap.fromTo('.hero-text h1', {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut',
                force3D: true // Force hardware acceleration
            });

            if (window.innerWidth <= 767 && wrapperRef.current) {
                gsap.to(wrapperRef.current, {
                    y: -280,
                    duration: 21,
                    repeat: -1,
                    ease: 'power1.inOut',
                    force3D: true,
                    modifiers: {
                        y: gsap.utils.unitize((y) => {
                            const steps = [0, -40, -80, -120, -160, -200, -240, -280];
                            return steps[Math.round((-y / 280) * 7)];
                        }, 'px')
                    },

                });
            }
        }, heroRef);

        return () => ctx.revert();
    }, { scope: heroRef });

    useEffect(() => {
        const handleScroll = () => {
            // Pause rendering during scroll on desktop
            if (window.innerWidth >= 1280) {
                setRenderQuality('low');
                clearTimeout(scrollTimeoutRef.current);
                scrollTimeoutRef.current = setTimeout(() => {
                    setRenderQuality('high');
                }, 150);
            }
        };

        const handleVisibility = () => {
            const heroSection = heroRef.current;
            if (!heroSection) return;

            const rect = heroSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const isVisible = rect.bottom > -windowHeight && rect.top < windowHeight * 2;

            if (isVisible && !show3D) {
                setShow3D(true);
                setIsPaused(false);
            } else if (!isVisible && show3D) {
                setIsPaused(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        let scrollTimeout;
        const debouncedScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(handleVisibility, 100);
        };

        window.addEventListener('scroll', debouncedScroll, { passive: true });
        window.addEventListener('resize', debouncedScroll, { passive: true });
        handleVisibility();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', debouncedScroll);
            window.removeEventListener('resize', debouncedScroll);
            clearTimeout(scrollTimeout);
            clearTimeout(scrollTimeoutRef.current);
        };
    }, [show3D]);

    return (
        <section ref={heroRef} id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background"/>
            </div>

            <div className="hero-layout">
                <header className="flex flex-col justify-center md:full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Shaping
                                <span className="slide">
                                    <span className="wrapper" ref={wrapperRef}>
                                        {words.map((word, index) => (
                                            <span key={`${word.text}-${index}`} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img src={word.imgPath} alt={word.text}
                                                     className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>That Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hello, I'm Michael, a developer with a passion for code
                        </p>
                        <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See my Work"/>
                    </div>
                </header>
                <figure className="xl:absolute xl:inset-y-0 xl:right-0 xl:w-[50%] relative w-full">
                    <div className="hero-3d-layout xl:relative xl:w-full xl:h-full">
                        {show3D && <HeroExperience isPaused={isPaused} renderQuality={renderQuality} />}
                    </div>
                </figure>
            </div>

            <AnimatedCounter />
        </section>
    );
};

export default Hero;