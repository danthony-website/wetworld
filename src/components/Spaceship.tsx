"use client";

import { useRef, useState } from "react";
import * as THREE from "three";
import { Float, useKeyboardControls, KeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useWorldStore } from "@/store/useWorldStore";

export const Spaceship = () => {
    const meshRef = useRef<THREE.Group>(null);
    const groupRef = useRef<THREE.Group>(null);
    const jetRef = useRef<THREE.Mesh>(null);
    const addWater = useWorldStore((state) => state.addWater);

    const [isBlasting, setIsBlasting] = useState(false);
    const [, get] = useKeyboardControls();

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            // Orbiting logic
            groupRef.current.rotation.y = time * 0.2;
            groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
        }

        const { blast } = get();
        if (blast) {
            setIsBlasting(true);
            addWater(delta * 50); // Add water over time
        } else {
            setIsBlasting(false);
        }

        if (jetRef.current) {
            jetRef.current.visible = isBlasting;
            // Animate the jet length or scale
            jetRef.current.scale.y = 1 + Math.sin(time * 20) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <group ref={meshRef} position={[0, 0, 15]} rotation={[Math.PI / 2, 0, 0]}>
                    {/* Main Body */}
                    <mesh castShadow>
                        <capsuleGeometry args={[0.5, 1.5, 4, 16]} />
                        <meshStandardMaterial color="#333" roughness={0.2} metalness={0.8} />
                    </mesh>

                    {/* Cockpit */}
                    <mesh position={[0, 0.5, 0.5]} castShadow>
                        <sphereGeometry args={[0.4, 16, 16]} />
                        <meshStandardMaterial color="#44ddff" transparent opacity={0.6} />
                    </mesh>

                    {/* Wings */}
                    <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0, -0.2]} castShadow>
                        <boxGeometry args={[0.1, 3, 0.8]} />
                        <meshStandardMaterial color="#555" />
                    </mesh>

                    {/* Engines/Thrusters */}
                    <mesh position={[0, -0.8, -0.2]}>
                        <cylinderGeometry args={[0.3, 0.2, 0.5, 16]} />
                        <meshStandardMaterial color="#111" />
                    </mesh>

                    {/* Water Jet */}
                    <mesh ref={jetRef} position={[0, 1, 0]} rotation={[0, 0, 0]} visible={false}>
                        <cylinderGeometry args={[0.1, 0.3, 10, 8]} />
                        <meshStandardMaterial
                            color="#2a6fd4"
                            transparent
                            opacity={0.7}
                            emissive="#2a6fd4"
                            emissiveIntensity={2}
                        />
                    </mesh>

                    {/* Light from engines */}
                    <pointLight position={[0, -1, 0]} color="#44ddff" intensity={2} distance={5} />
                </group>
            </Float>
        </group>
    );
};
