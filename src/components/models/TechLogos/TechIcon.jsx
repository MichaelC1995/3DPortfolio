import React, { useEffect, useRef } from 'react'
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath);
    const materialRef = useRef(null);

    useEffect(() => {
        if (model.name === 'Interactive Developer') {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === 'Object_5') {
                    materialRef.current = new THREE.MeshStandardMaterial({ color: 'white' });
                    child.material = materialRef.current;
                }
            })
        }

        return () => {
            if (materialRef.current) {
                materialRef.current.dispose();
            }

            scene.scene.traverse((child) => {
                if (child.isMesh) {
                    if (child.geometry) child.geometry.dispose();
                    if (child.material) {
                        if (Array.isArray(child.material)) {
                            child.material.forEach(material => material.dispose());
                        } else {
                            child.material.dispose();
                        }
                    }
                }
            });
        };
    }, [model.name, scene.scene]);

    return (
        <Canvas
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
            gl={{
                antialias: false,
                alpha: true,
                powerPreference: "high-performance"
            }}
        >
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />

            <OrbitControls enableZoom={false} />

            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    )
}

export default TechIcon