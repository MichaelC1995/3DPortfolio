import React, {useRef} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // 🔧 PERFORMANCE FIX: Use class selectors instead of individual refs
            const projects = gsap.utils.toArray(".showcase-project");

            projects.forEach((project, index) => {
                gsap.fromTo(
                    project,
                    {
                        y: 50,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8, // Reduced duration
                        delay: 0.1 * index, // Reduced delay
                        scrollTrigger: {
                            trigger: project,
                            start: 'top 80%', // Start earlier
                            once: true, // 🔧 CRITICAL: Only animate once
                        }
                    }
                );
            });

            // Section fade-in
            gsap.fromTo(sectionRef.current,
                {opacity: 0},
                {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        once: true,
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, {scope: sectionRef});

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div className="first-project-wrapper showcase-project">
                        <div className="image-wrapper">
                            <a href={"https://summarist-internship-one.vercel.app"} target={"_blank"}>
                                <img src="/images/project1.png" alt="Summarist"/>
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>Summarist: Your Ultimate Book Summary Companion</h2>
                            <p className="text-white-50 md:text-xl">Dive into the world of knowledge with Summarist,
                                the innovative app designed for busy book lovers who crave the essence of great reads
                                without the time commitment.</p>
                            <p className="text-white-50 md:text-xl">Framework: Next.js (version 13+, with App
                                Router).</p>
                            <p className="text-white-50 md:text-xl">Languages: JavaScript, TypeScript.</p>
                            <p className="text-white-50 md:text-xl">Styling: CSS Modules, Global CSS, PostCSS,
                                Tailwind CSS.</p>
                            <p className="text-white-50 md:text-xl">Build Tool: Turbopack.</p>
                            <p className="text-white-50 md:text-xl">Payment Processing: Stripe.</p>
                        </div>
                    </div>
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project showcase-project">
                            <div className="image-wrapper bg-[#ffefdb]">
                                <a href={"https://skinstric-a-i-internship.vercel.app"} target={"_blank"}>
                                    <img src="/images/project2.png" alt="Skinstric"/>
                                </a>
                            </div>
                            <h2>Skinstric: Revolutionize Your Skincare with AI-Powered Precision</h2>
                            <p>Skinstric is a cutting-edge web application that leverages artificial intelligence to
                                deliver personalized skincare insights through facial analysis. Built with a modern,
                                scalable tech stack, the app provides a seamless user experience, from capturing images
                                to presenting demographic predictions. Below is the technology stack that powers
                                Skinstric:</p>
                        </div>
                        <div className="project showcase-project">
                            <div className="image-wrapper bg-[#ffefdb]">
                                <a href={"https://michael-internship-eight.vercel.app"} target={"_blank"}>
                                    <img src="/images/project3.png" alt="Ultraverse"/>
                                </a>
                            </div>
                            <h2>Ultraverse: the Ultimate NFT Market</h2>
                            <p>Ultraverse creates a user-friendly environment designed to seamlessly create, sell, or
                                collect NFTs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection;