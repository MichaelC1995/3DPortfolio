import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        const cards = [firstRef.current, secondRef.current, thirdRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div className="first-project-wrapper showcase-project" ref={firstRef}>
                        <div className="image-wrapper">
                            <a
                                href="https://summarist-internship-one.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/images/project1.png" alt="Summarist" />
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>Summarist: Your Ultimate Book Summary Companion</h2>
                            <p className="text-white-50 md:text-xl">
                                Dive into the world of knowledge with Summarist, the innovative app
                                designed for busy book lovers who crave the essence of great reads
                                without the time commitment.
                            </p>
                            <p className="text-white-50 md:text-xl">
                                Framework: Next.js (version 13+, with App Router).
                            </p>
                            <p className="text-white-50 md:text-xl">
                                Languages: JavaScript, TypeScript.
                            </p>
                            <p className="text-white-50 md:text-xl">
                                Styling: CSS Modules, Global CSS, PostCSS, Tailwind CSS.
                            </p>
                            <p className="text-white-50 md:text-xl">Build Tool: Turbopack.</p>
                            <p className="text-white-50 md:text-xl">
                                Payment Processing: Stripe.
                            </p>
                        </div>
                    </div>
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project showcase-project" ref={secondRef}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <a
                                    href="https://skinstric-a-i-internship.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/images/project2.png" alt="Skinstric" />
                                </a>
                            </div>
                            <h2>Skinstric: Revolutionize Your Skincare with AI-Powered Precision</h2>
                            <p>
                                Skinstric is a cutting-edge web application that leverages
                                artificial intelligence to deliver personalized skincare insights
                                through facial analysis. Built with a modern, scalable tech stack,
                                the app provides a seamless user experience, from capturing images
                                to presenting demographic predictions.
                            </p>
                        </div>
                        <div className="project showcase-project" ref={thirdRef}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <a
                                    href="https://michael-internship-eight.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/images/project3.png" alt="Ultraverse" />
                                </a>
                            </div>
                            <h2>Ultraverse: the Ultimate NFT Market</h2>
                            <p>
                                Ultraverse creates a user-friendly environment designed to
                                seamlessly create, sell, or collect NFTs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;