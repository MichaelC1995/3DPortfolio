import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export const Room = (props) => {
    let gltf;
    try {
        gltf = useGLTF("/models/optimized-room.glb");
        console.log("Room: Loaded model nodes:", Object.keys(gltf.nodes));
        console.log("Room: Loaded model materials:", Object.keys(gltf.materials));
    } catch (error) {
        console.error("Room: Failed to load model:", error);
        return (
            <mesh {...props}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="blue" />
            </mesh>
        );
    }

    const { nodes, materials, scene } = gltf;

    return (
        <group {...props} dispose={null}>
            <primitive object={scene} />
        </group>
    );
};