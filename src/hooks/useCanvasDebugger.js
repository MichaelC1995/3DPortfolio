// src/hooks/useCanvasDebugger.js
import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

export const useCanvasDebugger = () => {
    const { gl, scene } = useThree();
    const stats = useRef({
        fps: 0,
        drawCalls: 0,
        triangles: 0,
        geometries: 0,
        textures: 0,
        programs: 0,
        lastTime: performance.now(),
        frames: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const info = gl.info;
            console.log('Canvas Performance:', {
                FPS: Math.round(stats.current.fps),
                DrawCalls: info.render.calls,
                Triangles: info.render.triangles,
                Geometries: info.memory.geometries,
                Textures: info.memory.textures,
                Programs: info.programs?.length || 0,
                CanvasSize: `${gl.domElement.width}x${gl.domElement.height}`
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [gl]);

    useFrame(() => {
        stats.current.frames++;
        const currentTime = performance.now();
        const delta = currentTime - stats.current.lastTime;

        if (delta >= 1000) {
            stats.current.fps = (stats.current.frames * 1000) / delta;
            stats.current.frames = 0;
            stats.current.lastTime = currentTime;
        }
    });
};