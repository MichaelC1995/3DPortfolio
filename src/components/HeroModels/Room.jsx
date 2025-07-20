import React, { useRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room(props) {
        const { nodes, materials } = useGLTF("/models/optimized-room.glb");
        const matcapTexture = useTexture("/images/textures/mat1.png");
        const screensRef = useRef();

        const roomMaterials = useMemo(() => ({
                curtain: new THREE.MeshPhongMaterial({ color: "#d90429" }),
                body: new THREE.MeshPhongMaterial({ map: matcapTexture }),
                table: new THREE.MeshPhongMaterial({ color: "#582f0e" }),
                radiator: new THREE.MeshPhongMaterial({ color: "#fff" }),
                comp: new THREE.MeshStandardMaterial({ color: "#fff" }),
                pillow: new THREE.MeshPhongMaterial({ color: "#8338ec" }),
                chair: new THREE.MeshPhongMaterial({ color: "#000" }),
        }), [matcapTexture]);

        return (
            <group {...props} dispose={null}>
                    <EffectComposer
                        multisampling={0}
                        renderPriority={1}
                        disableNormalPass
                    >
                    </EffectComposer>

                    <mesh
                        geometry={nodes._________6_blinn1_0.geometry}
                        material={roomMaterials.curtain}
                    />
                    <mesh geometry={nodes.body1_blinn1_0.geometry} material={roomMaterials.body} />
                    <mesh geometry={nodes.cabin_blinn1_0.geometry} material={roomMaterials.table} />
                    <mesh
                        geometry={nodes.chair_body_blinn1_0.geometry}
                        material={roomMaterials.chair}
                    />
                    <mesh geometry={nodes.comp_blinn1_0.geometry} material={roomMaterials.comp} />
                    <mesh
                        ref={screensRef}
                        geometry={nodes.emis_lambert1_0.geometry}
                        material={materials.lambert1}
                    />
                    <mesh
                        geometry={nodes.handls_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.keyboard_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.kovrik_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.lamp_bl_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.lamp_white_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.miuse_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.monitor2_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.monitor3_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.pCylinder5_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.pillows_blinn1_0.geometry}
                        material={roomMaterials.pillow}
                    />
                    <mesh
                        geometry={nodes.polySurface53_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.radiator_blinn1_0.geometry}
                        material={roomMaterials.radiator}
                    />
                    <mesh
                        geometry={nodes.radiator_blinn1_0001.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.railing_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.red_bttns_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.red_vac_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.stylus_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh geometry={nodes.table_blinn1_0.geometry} material={roomMaterials.table} />
                    <mesh
                        geometry={nodes.tablet_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.triangle_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.vac_black_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.vacuum1_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.vacuumgrey_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.vires_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.window_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        geometry={nodes.window4_phong1_0.geometry}
                        material={materials.phong1}
                    />
            </group>
        );
}

useGLTF.preload("/models/optimized-room.glb");