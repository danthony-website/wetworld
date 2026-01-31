"use client";

import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useWorldStore } from "@/store/useWorldStore";

export const Atmosphere = () => {
    const ref = useRef<THREE.Mesh>(null);
    const { level } = useWorldStore();

    const atmosphereStyle = useMemo(() => {
        switch (level) {
            case 'DAMP': return { color: "#bc9060", opacity: 0.1, scale: 1.25 };
            case 'MOIST': return { color: "#77aaff", opacity: 0.15, scale: 1.3 };
            case 'WET': return { color: "#4488ff", opacity: 0.2, scale: 1.4 };
            case 'WATER': return { color: "#00ffff", opacity: 0.3, scale: 1.5 };
            default: return { color: "#d4a76a", opacity: 0.05, scale: 1.2 };
        }
    }, [level]);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.001;
            // Smoothly interpolate scale if needed, but for now simple update
        }
    });

    return (
        <mesh ref={ref} scale={atmosphereStyle.scale}>
            <sphereGeometry args={[8, 64, 64]} />
            <meshStandardMaterial
                color={atmosphereStyle.color}
                transparent
                opacity={atmosphereStyle.opacity}
                side={THREE.BackSide}
                depthWrite={false}
            />
        </mesh>
    );
};
