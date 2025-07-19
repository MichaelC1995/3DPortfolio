import React, { useEffect, Component } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import { Suspense } from "react";

// Error Boundary Component
class HeroExperienceErrorBoundary extends Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("HeroExperienceErrorBoundary: Caught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ color: "red", padding: "20px" }}>
                    Error loading 3D scene: {this.state.error?.message || "Unknown error"}
                </div>
            );
        }
        return this.props.children;
    }
}

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    useEffect(() => {
        console.log("HeroExperience: Mounted");
        const canvas = document.querySelector("canvas");
        if (!canvas) {
            console.error("HeroExperience: Canvas not found");
            return;
        }
        const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
        if (!gl) {
            console.error("HeroExperience: WebGL not supported");
            return;
        }

        const handleContextLost = (event) => {
            event.preventDefault();
            console.warn("HeroExperience: WebGL context lost, attempting to restore");
            gl.getExtension("WEBGL_lose_context")?.restoreContext();
        };

        canvas.addEventListener("webglcontextlost", handleContextLost, { passive: true });
        return () => {
            console.log("HeroExperience: Unmounted");
            canvas.removeEventListener("webglcontextlost", handleContextLost);
        };
    }, []);

    return (
        <HeroExperienceErrorBoundary>
            <div className="w-full h-full relative" style={{ minHeight: "50vh" }}>
                <Canvas
                    camera={{ position: [0, 0, 15], fov: 45 }}
                    dpr={[1, 2]}
                    gl={{ antialias: true, powerPreference: "default" }}
                    frameloop="demand"
                    onCreated={({ gl }) => {
                        console.log("HeroExperience: Canvas created");
                        gl.setClearColor("#000000");
                    }}
                    onError={(error) => {
                        console.error("HeroExperience: Canvas creation error:", error);
                    }}
                >
                    <Suspense
                        fallback={
                            <mesh>
                                <boxGeometry args={[1, 1, 1]} />
                                <meshStandardMaterial color="gray" />
                            </mesh>
                        }
                    >
                        <HeroLights />
                        <group
                            scale={isMobile ? 0.7 : 1}
                            position={[0, -3.5, 0]}
                            rotation={[0, -Math.PI / 4, 0]}
                        >
                            <Room />
                        </group>
                    </Suspense>
                    <OrbitControls
                        enablePan={false}
                        enableZoom={!isTablet}
                        maxDistance={20}
                        minDistance={5}
                        minPolarAngle={Math.PI / 5}
                        maxPolarAngle={Math.PI / 2}
                        enableDamping={false}
                        rotateSpeed={0.5}
                        makeDefault
                        addEventListener={(event, fn) => {
                            window.addEventListener(event, fn, { passive: true });
                        }}
                    />
                </Canvas>
            </div>
        </HeroExperienceErrorBoundary>
    );
};

export default HeroExperience;