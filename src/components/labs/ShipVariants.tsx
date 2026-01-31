"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Torus } from "@react-three/drei";
import * as THREE from "three";

// 1. The Obsidian Monolith (Geometric/Static/Intimidating)
export const MonolithShip = () => (
    <group>
        <mesh castShadow>
            <boxGeometry args={[0.5, 4, 0.5]} />
            <meshStandardMaterial color="#050505" roughness={0} metalness={1} />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
            <boxGeometry args={[1.5, 0.2, 1.5]} />
            <meshStandardMaterial color="#111" />
        </mesh>
        <pointLight position={[0, 2, 0.5]} color="#ff0000" intensity={2} />
    </group>
);

// 2. The Spore (Organic/Soft/Biological)
export const SporeShip = () => (
    <group>
        <mesh castShadow>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial color="#bc9060" speed={2} distort={0.4} radius={1} />
        </mesh>
        {[...Array(8)].map((_, i) => (
            <mesh key={i} position={[Math.cos(i) * 1.2, Math.sin(i) * 1.2, 0]} rotation={[0, 0, i]}>
                <cylinderGeometry args={[0.1, 0.05, 0.8]} />
                <meshStandardMaterial color="#8b5a2b" />
            </mesh>
        ))}
    </group>
);

// 3. The Kinetic Ring (Technical/Dynamic/Advanced)
export const RingShip = () => {
    const ringRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (ringRef.current) {
            ringRef.current.rotation.z += 0.05;
            ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.5;
        }
    });
    return (
        <group>
            <mesh>
                <sphereGeometry args={[0.4, 16, 16]} />
                <meshStandardMaterial color="#44ddff" emissive="#44ddff" emissiveIntensity={2} />
            </mesh>
            <group ref={ringRef}>
                <Torus args={[1.5, 0.1, 16, 100]}>
                    <meshStandardMaterial color="#888" metalness={1} roughness={0} />
                </Torus>
                {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, i) => (
                    <mesh key={i} position={[Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0]}>
                        <boxGeometry args={[0.3, 0.3, 0.3]} />
                        <meshStandardMaterial color="#555" />
                    </mesh>
                ))}
            </group>
        </group>
    );
};

// 4. The Voxel Tetris (Modular/Retro/Playful)
export const VoxelShip = () => (
    <group>
        {[
            [0, 0, 0], [0, 1, 0], [1, 0, 0], [-1, 0, 0],
            [0, -1, 0], [0, 0, 1], [0, 0, -1]
        ].map((pos, i) => (
            <mesh key={i} position={pos as [number, number, number]} castShadow>
                <boxGeometry args={[0.9, 0.9, 0.9]} />
                <meshStandardMaterial color={`hsl(${i * 40}, 70%, 50%)`} roughness={0.5} />
            </mesh>
        ))}
    </group>
);

// 5. The Silver Needle (Sleek/Aerodynamic/Speed)
export const NeedleShip = () => (
    <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow>
            <cylinderGeometry args={[0.05, 0.2, 5, 16]} />
            <meshStandardMaterial color="#fff" metalness={1} roughness={0} />
        </mesh>
        <mesh position={[0, -2, 0]}>
            <sphereGeometry args={[0.4, 16, 16]} />
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={5} />
        </mesh>
    </group>
);

// 6. The Clay Crab (Asymmetrical/Rugged/Primitive)
export const CrabShip = () => (
    <group>
        <mesh castShadow>
            <capsuleGeometry args={[0.8, 1, 4, 16]} />
            <MeshWobbleMaterial color="#d4a76a" factor={0.5} speed={1} />
        </mesh>
        <mesh position={[1.2, 0.4, 0]} rotation={[0, 0, -0.5]}>
            <boxGeometry args={[1, 0.2, 0.5]} />
            <meshStandardMaterial color="#bc9060" />
        </mesh>
        <mesh position={[-1.2, -0.4, 0]} rotation={[0, 0, 0.5]}>
            <boxGeometry args={[1, 0.2, 0.5]} />
            <meshStandardMaterial color="#bc9060" />
        </mesh>
    </group>
);

// 7. The Crystal Cluster (Magical/Ethereal/Fractured)
export const CrystalShip = () => (
    <group>
        {[...Array(5)].map((_, i) => (
            <mesh
                key={i}
                position={[Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]}
                rotation={[Math.random(), Math.random(), Math.random()]}
                castShadow
            >
                <boxGeometry args={[0.4, 1.5, 0.4]} />
                <meshStandardMaterial
                    color="#aa00ff"
                    transparent
                    opacity={0.8}
                    emissive="#aa00ff"
                    emissiveIntensity={0.5}
                />
            </mesh>
        ))}
        <pointLight color="#aa00ff" intensity={5} />
    </group>
);

// 8. The Brass Explorer (Steampunk/Industrial/Heavy)
export const BrassShip = () => (
    <group>
        <mesh castShadow>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#b8860b" metalness={0.9} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 1]}>
            <cylinderGeometry args={[0.5, 0.5, 0.2, 16]} />
            <meshStandardMaterial color="#555" />
        </mesh>
        {[...Array(12)].map((_, i) => (
            <mesh key={i} rotation={[0, 0, (i / 12) * Math.PI * 2]} position={[0, 1, 0]}>
                <sphereGeometry args={[0.1, 8, 8]} />
                <meshStandardMaterial color="#444" />
            </mesh>
        ))}
    </group>
);

// 9. The Fractal Cloud (Surreal/Complex/Abstract)
export const FractalShip = () => {
    const group = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (group.current) {
            group.current.children.forEach((child, i) => {
                child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5;
                child.rotation.x += 0.01;
            });
        }
    });
    return (
        <group ref={group}>
            {[...Array(10)].map((_, i) => (
                <mesh key={i} position={[Math.cos(i) * 1.5, 0, Math.sin(i) * 1.5]}>
                    <octahedronGeometry args={[0.3]} />
                    <meshStandardMaterial color="#fff" wireframe />
                </mesh>
            ))}
        </group>
    );
};

// 10. The Mercury Blob (Fluid/Futuristic/Alien)
export const BlobShip = () => (
    <group>
        <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial
                color="#888"
                metalness={1}
                roughness={0}
                distort={0.6}
                speed={5}
            />
        </mesh>
        <mesh position={[0, 0, 1.2]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color="#ff0044" emissive="#ff0044" emissiveIntensity={2} />
        </mesh>
    </group>
);

// 11. The Solar Sail (Elegant/Light/Glimmering)
export const SailShip = () => (
    <group>
        <mesh position={[0, 0, -1]}>
            <cylinderGeometry args={[0.2, 0.2, 3, 16]} />
            <meshStandardMaterial color="#333" />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 4]} position={[0, 0, 1]}>
            <boxGeometry args={[4, 4, 0.01]} />
            <meshStandardMaterial color="#fff" emissive="#ffffff" emissiveIntensity={0.5} transparent opacity={0.8} />
        </mesh>
    </group>
);

// 12. The Steam Turbine (Rotating/Mechanical/Industrial)
export const TurbineShip = () => {
    const turbineRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (turbineRef.current) turbineRef.current.rotation.y += 0.1;
    });
    return (
        <group>
            <mesh castShadow>
                <cylinderGeometry args={[0.8, 0.8, 2, 32]} />
                <meshStandardMaterial color="#554433" metalness={1} roughness={0.3} />
            </mesh>
            <group ref={turbineRef} position={[0, 0, 0]}>
                {[...Array(8)].map((_, i) => (
                    <mesh key={i} rotation={[0, (i / 8) * Math.PI * 2, 0]} position={[1, 0, 0]}>
                        <boxGeometry args={[0.5, 1.8, 0.1]} />
                        <meshStandardMaterial color="#443322" />
                    </mesh>
                ))}
            </group>
        </group>
    );
};

// 13. The Plasma Coil (Energy/Vibrant/Scientific)
export const CoilShip = () => (
    <group>
        {[...Array(5)].map((_, i) => (
            <Torus key={i} args={[0.5 + i * 0.3, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={2} />
            </Torus>
        ))}
        <mesh>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#fff" emissive="#ffffff" emissiveIntensity={5} />
        </mesh>
    </group>
);

// 14. The Origami Scout (Folded/Thin/Sharp)
export const OrigamiShip = () => (
    <group rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <mesh castShadow>
            <coneGeometry args={[1.5, 3, 3]} />
            <meshStandardMaterial color="#eee" side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, -1, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[1.5, 1, 3]} />
            <meshStandardMaterial color="#ccc" side={THREE.DoubleSide} />
        </mesh>
    </group>
);

// 15. The Meteor Driller (Rocky/Aggressive/Heavy)
export const DrillerShip = () => (
    <group>
        <mesh castShadow>
            <sphereGeometry args={[1.2, 8, 8]} />
            <meshStandardMaterial color="#444" roughness={1} />
        </mesh>
        <mesh position={[0, 1.5, 0]}>
            <cylinderGeometry args={[0.2, 0.8, 1.5, 8]} />
            <meshStandardMaterial color="#ffaa00" metalness={1} />
        </mesh>
    </group>
);

// 16. The Magnetic Float (Fragmented/Mysterious/Magical)
export const FloatShip = () => {
    const group = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (group.current) {
            group.current.children.forEach((c, i) => {
                c.position.y += Math.sin(state.clock.elapsedTime + i) * 0.01;
            });
        }
    });
    return (
        <group ref={group}>
            <mesh castShadow>
                <sphereGeometry args={[0.5, 16, 16]} />
                <meshStandardMaterial color="#fff" emissive="#00ccff" />
            </mesh>
            {[...Array(6)].map((_, i) => (
                <mesh key={i} position={[Math.cos(i) * 1.5, Math.sin(i) * 1.5, 0]}>
                    <boxGeometry args={[0.4, 0.4, 0.4]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
            ))}
        </group>
    );
};

// 17. The Ancient Obelisk (Stonework/Mystic/Old)
export const ObeliskShip = () => (
    <group>
        <mesh castShadow>
            <cylinderGeometry args={[0.4, 0.6, 4, 4]} />
            <meshStandardMaterial color="#222" roughness={1} />
        </mesh>
        <pointLight color="#00ffff" intensity={2} position={[0, 1.8, 0]} />
        <mesh position={[0, 2, 0]}>
            <octahedronGeometry args={[0.3]} />
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
        </mesh>
    </group>
);

// 18. The Jellyfish (Fluid/Tentacles/Ethereal)
export const JellyShip = () => (
    <group>
        <mesh castShadow>
            <sphereGeometry args={[1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#ff99ff" transparent opacity={0.6} />
        </mesh>
        {[...Array(10)].map((_, i) => (
            <mesh key={i} position={[Math.cos(i) * 0.8, -1, Math.sin(i) * 0.8]}>
                <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                <meshStandardMaterial color="#ffccff" transparent opacity={0.4} />
            </mesh>
        ))}
    </group>
);

// 19. The X-Wing Clay (Fighter/Classic/Chunky)
export const XShip = () => (
    <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow>
            <capsuleGeometry args={[0.4, 2, 4, 16]} />
            <meshStandardMaterial color="#d4a76a" />
        </mesh>
        {[1, -1].map((s) => (
            <group key={s} rotation={[0, 0, s * 0.4]}>
                <mesh position={[1.5, 0, 0]}>
                    <boxGeometry args={[3, 0.1, 0.5]} />
                    <meshStandardMaterial color="#bc9060" />
                </mesh>
            </group>
        ))}
    </group>
);

// 20. The Warp Tunnel (Geometric/Kinetic/Hole)
export const WarpShip = () => {
    const ringRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (ringRef.current) ringRef.current.rotation.y += 0.05;
    });
    return (
        <group>
            <Torus args={[1.5, 0.3, 16, 100]}>
                <meshStandardMaterial color="#111" />
            </Torus>
            <group ref={ringRef}>
                {[...Array(20)].map((_, i) => (
                    <mesh key={i} position={[Math.cos((i / 20) * Math.PI * 2) * 1.5, Math.sin((i / 20) * Math.PI * 2) * 1.5, 0]}>
                        <sphereGeometry args={[0.1, 8, 8]} />
                        <meshStandardMaterial color="#0088ff" emissive="#0088ff" emissiveIntensity={2} />
                    </mesh>
                ))}
            </group>
        </group>
    );
};

export const ShipPreview = ({ type }: { type: number }) => {
    switch (type) {
        case 1: return <MonolithShip />;
        case 2: return <SporeShip />;
        case 3: return <RingShip />;
        case 4: return <VoxelShip />;
        case 5: return <NeedleShip />;
        case 6: return <CrabShip />;
        case 7: return <CrystalShip />;
        case 8: return <BrassShip />;
        case 9: return <FractalShip />;
        case 10: return <BlobShip />;
        case 11: return <SailShip />;
        case 12: return <TurbineShip />;
        case 13: return <CoilShip />;
        case 14: return <OrigamiShip />;
        case 15: return <DrillerShip />;
        case 16: return <FloatShip />;
        case 17: return <ObeliskShip />;
        case 18: return <JellyShip />;
        case 19: return <XShip />;
        case 20: return <WarpShip />;
        default: return <MonolithShip />;
    }
};
