"use client";

import { OrbitControls, PerspectiveCamera, Environment, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Planet } from "./Planet";
import { Spaceship } from "./Spaceship";
import { Atmosphere } from "./Atmosphere";
import { useWorldStore } from "@/store/useWorldStore";

export const Experience = () => {
    const evaporate = useWorldStore((state) => state.evaporate);

    useFrame((state, delta) => {
        evaporate(delta * 10); // Slowly evaporate water in WATER WORLD
    });

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 15, 30]} fov={45} />
            <OrbitControls makeDefault enablePan={false} minDistance={15} maxDistance={50} />

            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1.5}
                castShadow
                shadow-mapSize={[1024, 1024]}
            />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Environment preset="night" />

            <Planet />
            <Spaceship />
            <Atmosphere />
        </>
    );
};
