// src/components/HeroModels/HeroExperience.jsx
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, AdaptiveDpr, AdaptiveEvents, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights.jsx";
import { Room } from "./Room.jsx";
import { EffectComposer } from '@react-three/postprocessing';
import { Bloom } from '@react-three/postprocessing';

const PerformanceController = ({ quality }) => {
    const targetFPSRef = useRef(60);
    const lastRenderTime = useRef(0);

    useEffect(() => {
        switch (quality) {
            case 'high':
                targetFPSRef.current = 60;
                break;
            case 'low':
                targetFPSRef.current = 30;
                break;
            case 'paused':
                targetFPSRef.current = 1;
                break;
            default:
                targetFPSRef.current = 60;
        }
    }, [quality]);

    useFrame((state) => {
        if (quality === 'paused') {
            state.gl.render(state.scene, state.camera);
            return;
        }
        const currentTime = state.clock.getElapsedTime();
        const frameInterval = 1 / targetFPSRef.current;
        if (currentTime - lastRenderTime.current >= frameInterval) {
            state.gl.render(state.scene, state.camera);
            lastRenderTime.current = currentTime - (currentTime % frameInterval);
        }
    }, -1);

    return null;
};

const HeroExperience = ({ renderQuality = 'high', isPaused }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const canvasRef = useRef();

    useEffect(() => {
        useGLTF.preload("/models/optimized-room.glb");
        const webgl2Supported = !!document.createElement('canvas').getContext('webgl2');
        if (!webgl2Supported) {
            console.warn('HeroExperience.jsx: WebGL2 not supported, disabling 3D rendering');
        }
    }, []);

    const getDpr = () => {
        if (isMobile) return 0.5;
        switch (renderQuality) {
            case 'high': return [0.8, 1.2];
            case 'low': return [0.3, 0.6];
            case 'paused': return 0.3;
            default: return 0.8;
        }
    };

    return (
        <div className="w-full h-full relative" style={{ minHeight: "50vh" }}>
            <Canvas
                ref={canvasRef}
                camera={{ position: [0, 0, 15], fov: 45 }}
                dpr={getDpr()}
                gl={{
                    antialias: false, // Disable antialiasing for better performance
                    powerPreference: "high-performance",
                    alpha: false,
                    stencil: false,
                    depth: true,
                    preserveDrawingBuffer: false,
                    failIfMajorPerformanceCaveat: false,
                    premultipliedAlpha: false,
                    logarithmicDepthBuffer: false,
                    onContextLost: (event) => {
                        console.warn('WebGL context lost, preventing default');
                        event.preventDefault();
                        setTimeout(() => {
                            const context = canvasRef.current.getContext('webgl2');
                            if (context) {
                                const ext = context.getExtension('WEBGL_lose_context');
                                if (ext) ext.restoreContext();
                            }
                        }, 1000);
                    },
                    onContextRestored: () => console.log('WebGL context restored'),
                }}
                frameloop={isPaused ? "demand" : "always"}
                style={{ touchAction: 'pan-y' }}
                eventSource={canvasRef}
                eventPrefix="client"
                performance={{ min: 0.5 }}
                flat={isMobile}
                linear={isMobile}
            >
                <AdaptiveDpr pixelated />
                <AdaptiveEvents />

                <PerformanceController quality={renderQuality} />

                <OrbitControls
                    enablePan={false}
                    enableZoom={!isTablet}
                    minDistance={5}
                    maxDistance={20}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                    enableDamping={false}
                    rotateSpeed={0.5}
                    enabled={renderQuality !== 'paused' && !isPaused}
                    makeDefault
                />

                <HeroLights />

                <EffectComposer>
                    <Bloom
                        intensity={0.5}
                        radius={0.1}
                        threshold={0.95}
                        luminanceThreshold={0.95}
                        luminanceSmoothing={0.3}
                    />
                </EffectComposer>

                <Suspense
                    fallback={
                        <mesh>
                            <boxGeometry args={[2, 2, 2]} />
                            <meshStandardMaterial color="#4cc0f0" wireframe />
                        </mesh>
                    }
                >
                    <group
                        scale={isMobile ? 0.7 : 1}
                        position={[0, -3.5, 0]}
                        rotation={[0, -Math.PI / 4, 0]}
                    >
                        <Room />
                    </group>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default HeroExperience;