const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
    {
        name: "My Resume",
        link: "/documents/Michael%20Chatellier%20-%20Frontend%20Developer%20Resume.pdf",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 2, suffix:"", label: "Professional Frontend Certifications" },
    { value: 3, suffix:"", label: "Internships Completed" },
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 100, suffix: "%", label: "Committed to Learning" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Responsive & Adaptive Design",
        desc: "Building pixel-perfect, cross-device interfaces with Tailwind CSS and Next.js, delivering seamless user experiences on all platforms.",
    },
    {
        imgPath: "/images/person.png",
        title: "Dynamic User Interfaces",
        desc: "Creating real-time, API-driven UIs with React and NextJS.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
];

const techStackImgs = [
    {
        name: "React",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Vite",
        imgPath: "/images/logos/vite.png",
    },
    {
        name: "Next.JS",
        imgPath: "/images/logos/nextjs.png",
    },
    {
        name: "Node.JS",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "TypeScript",
        imgPath: "/images/logos/typescript.png",
    },
    {
        name: "Tailwind CSS",
        imgPath: "/images/logos/tailwindcss.png",
    },
    {
        name: "Git",
        imgPath: "/images/logos/git.svg",
    },
    {
        name: "Figma",
        imgPath: "/images/logos/figma.png",
    },
    {
        name: "Three.JS",
        imgPath: "/images/logos/threejs.png",
    },
    {
        name: "Redux",
        imgPath: "/images/logos/redux.png",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "TypeScript",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Created a sophisticated NFT marketplace that provides users with seamless discovery experiences. Focused on intuitive design and smooth user interactions.",
        imgPath: "/images/exp1.jfif",
        logoPath: "/images/logo1.png",
        title: "Frontend Simplified Intern",
        date: "September 2024 - January 2025",
        responsibilities: [
            "Designed intuitive exploration interface with category-based browsing for art, music, domain names, and collectibles",
            "Developed author profile system displaying NFT collections, verification status, and social metrics",
            "Implemented smooth animations using Animate On Scroll library for engaging user interactions",
            "Optimized component architecture with reusable UI components reducing code redundancy",
            "Implemented lazy loading strategies for images and components improving initial page load.",
        ],
    },
    {
        review: "Developed an innovative AI-powered skincare application that leverages machine learning for personalized beauty recommendations. Successfully integrated third-party AI services and created an intuitive user experience.",
        imgPath: "/images/exp1.jfif",
        logoPath: "/images/logo2.png",
        title: "Skinstric A.I. Intern",
        date: "January 2025 - April 2025",
        responsibilities: [
            "Architected a responsive skincare recommendation platform using React, through AI-driven personalized routines",
            "Integrated third-party AI API for real-time skin analysis using Axios, streamlining personalized routine generation for users",
            "Crafted reusable UI components, improving development efficiency and ensuring consistent user interface across the application",
            "Implemented advanced form validation and user input handling for accurate skin analysis data collection",
        ],
    },
    {
        review: "Built a full-stack book summary application with Next.js 14, implementing Stripe payments and audio playback features that enhanced user engagement.",
        imgPath: "/images/exp1.jfif",
        logoPath: "/images/logo3.png",
        title: "Frontend Simplified Intern",
        date: "April 2025 - Current",
        responsibilities: [
            "Architected and deployed a full-stack Next.js 14 application with Stripe payment integration, serving book summaries with audio playback functionality",
            "Implemented secure subscription management with Stripe webhooks, handling real-time payment verification and user authentication flows",
            "Engineered responsive UI with dynamic routing, reducing load times by implementing Next.js chunking strategy and server-side rendering",
            "Built comprehensive library management system with personalized recommendations, allowing users to save and organize their book collections",
            "Integrated RESTful APIs for seamless data management and optimized database queries for improved performance"
        ]
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Mohamed Zreika - Mentor at Frontend Simplified",
        mentions: "https://www.linkedin.com/in/mohamed-zreika-27b2b6242/",
        review:
            "Michael’s portfolio is a great reflection of his skills - clean, responsive, and thoughtfully built. He consistently demonstrated reliability, attention to detail, and a strong commitment to growth throughout the program. It was a pleasure supporting him!",
        imgPath: "/images/client1.png",
    },
    {
        name: "Hannah Mitri",
        mentions: "Mentor at SkinstricAI",
        review:
            "Michael has done outstanding work on this project — it’s truly impressive. The quality and execution are spot-on.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Adrian Garbowski",
        mentions: "Mentor at Frontend Simplified",
        review:
            "I had the opportunity to review Michael’s project, and it was very well-executed. His attention to detail and overall quality of work stood out. Based on his performance, I was happy to advance him to the next stage. I’m confident he will continue to bring the same level of excellence to future projects.",
        imgPath: "/images/client2.png",
    },
];

const socialImgs = [
    {
        name: "github",
        imgPath: "/images/github.png",
        link: "https://github.com",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        link: "https://www.linkedin.com",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};