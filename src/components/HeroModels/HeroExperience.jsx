import React, { useState, useEffect, useRef } from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {Room} from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";

const HeroExperience = () => {
    const containerRef = useRef();
    const isMobile = useMediaQuery({query: "(max-width: 768px)"});
    const isTablet = useMediaQuery({query: "(max-width: 1024px)"});
    const [isVisible, setIsVisible] = useState(true);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const [performanceMode, setPerformanceMode] = useState(false);

    // 🔧 ENHANCED: More sophisticated visibility and performance management
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const visible = entry.isIntersecting || entry.intersectionRatio > 0.05;
                const farAway = entry.intersectionRatio < 0.01;

                setIsVisible(visible);
                setPerformanceMode(farAway && hasBeenVisible);

                if (visible) {
                    setHasBeenVisible(true);
                }
            },
            {
                threshold: [0, 0.01, 0.05, 0.25, 0.5, 0.75, 1],
                rootMargin: '50px' // Reduced margin for tighter control
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [hasBeenVisible]);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                minHeight: '50vh'
            }}
        >
            {/* 🎯 ENHANCED: Smart rendering with performance modes */}
            {(isVisible || hasBeenVisible) ? (
                <Canvas
                    camera={{position: [0, 0, 15], fov: 45}}
                    style={{
                        opacity: isVisible ? 1 : 0.2,
                        transition: 'opacity 0.5s ease',
                        pointerEvents: isVisible ? 'auto' : 'none'
                    }}
                    frameloop={isVisible ? 'always' : performanceMode ? 'never' : 'demand'}
                    dpr={isVisible ? [1, 2] : 1} // Higher quality when visible
                    performance={{
                        min: performanceMode ? 0.1 : 0.5,
                        max: 1
                    }}
                    gl={{
                        antialias: isVisible && !isMobile, // Only antialias when visible and not mobile
                        powerPreference: "high-performance",
                        alpha: false,
                        stencil: false
                    }}
                >
                    <OrbitControls
                        enablePan={false}
                        enableZoom={!isTablet && isVisible}
                        maxDistance={20}
                        minDistance={5}
                        minPolarAngle={Math.PI / 5}
                        maxPolarAngle={Math.PI / 2}
                        enabled={isVisible}
                        enableDamping={true}
                        dampingFactor={0.05}
                    />

                    <HeroLights/>

                    <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]} rotation={[0, -Math.PI / 4, 0]}>
                        <Room/>
                    </group>
                </Canvas>
            ) : (
                // 🎨 ENHANCED: Beautiful loading placeholder
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, rgba(131, 56, 236, 0.1), rgba(13, 0, 164, 0.1))',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#d9ecff',
                        fontSize: '16px',
                        fontWeight: '500'
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ marginBottom: '8px' }}>🏠</div>
                        <div>3D Room Loading...</div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default HeroExperience