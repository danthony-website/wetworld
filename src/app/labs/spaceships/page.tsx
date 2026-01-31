"use client";

import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { View, OrbitControls, Stage } from "@react-three/drei";
import { ShipPreview } from "@/components/labs/ShipVariants";

const concepts = [
    {
        id: 1,
        name: "The Obsidian Monolith",
        description: "Angular, towering, and silent. A monolith of dark clay with a single glowing eye. Intimidating and geometric.",
        type: 1
    },
    {
        id: 2,
        name: "The Spore",
        description: "Biological and pulsating. A mushroom-like organic vessel that 'grows' through the atmosphere.",
        type: 2
    },
    {
        id: 3,
        name: "The Kinetic Ring",
        description: "A feat of engineering. A spinning gravity ring surrounding a core with high-precision movement.",
        type: 3
    },
    {
        id: 4,
        name: "The Voxel Tetris",
        description: "Modular and playful. Built from mismatched clay cubes, suggesting a ship that can be rebuilt on the fly.",
        type: 4
    },
    {
        id: 5,
        name: "The Silver Needle",
        description: "Pure speed. A hyper-aerodynamic needle designed to pierce through the thickest atmospheres.",
        type: 5
    },
    {
        id: 6,
        name: "The Clay Crab",
        description: "Rugged and multi-limbed. An asymmetrical crawler designed for both space flight and harsh landings.",
        type: 6
    },
    {
        id: 7,
        name: "The Crystal Cluster",
        description: "Ethereal and magical. A series of levitating jagged crystals powered by an internal purple core.",
        type: 7
    },
    {
        id: 8,
        name: "The Brass Explorer",
        description: "Industrial and heavy. A spherical riveted vessel reminiscent of deep-sea bathyscaphes and steampunk tech.",
        type: 8
    },
    {
        id: 9,
        name: "The Fractal Cloud",
        description: "Abstract and complex. A series of recursive octahedrons that shift and rotate independently.",
        type: 9
    },
    {
        id: 10,
        name: "The Mercury Blob",
        description: "Fluid and alien. A shapeless mass of liquid metal that morphs and ripples as it moves.",
        type: 10
    },
    {
        id: 11,
        name: "The Solar Sail",
        description: "Elegant and light. A massive glowing sail designed to capture stellar winds with minimal mass.",
        type: 11
    },
    {
        id: 12,
        name: "The Steam Turbine",
        description: "Mechanical and industrial. A heavy vessel with a massive rotating turbine core for raw power.",
        type: 12
    },
    {
        id: 13,
        name: "The Plasma Coil",
        description: "Scientific and vibrant. Concentric energy rings that pulse with intense green plasma.",
        type: 13
    },
    {
        id: 14,
        name: "The Origami Scout",
        description: "Sharp and precise. A vessel folded from thin ceramic sheets into a complex aerodynamic geometry.",
        type: 14
    },
    {
        id: 15,
        name: "The Meteor Driller",
        description: "Rocky and aggressive. A reinforced vessel designed to smash into asteroids and extract core minerals.",
        type: 15
    },
    {
        id: 16,
        name: "The Magnetic Float",
        description: "Mysterious and magical. A series of disconnected fragments held together by powerful gravitational locks.",
        type: 16
    },
    {
        id: 17,
        name: "The Ancient Obelisk",
        description: "Stonework and mystic. A dark obsidian monument that levitates through ancient, forgotten tech.",
        type: 17
    },
    {
        id: 18,
        name: "The Jellyfish",
        description: "Ethereal and fluid. A translucent dome with trailing energy filaments for sensitive nebula exploration.",
        type: 18
    },
    {
        id: 19,
        name: "The X-Wing Clay",
        description: "An iconic silhouette rebuilt with chunky, raw clay for a primitive yet capable fighter aesthetic.",
        type: 19
    },
    {
        id: 20,
        name: "The Warp Tunnel",
        description: "Geometric and kinetic. A ship built as a hollow ring, capable of folding space-time through its center.",
        type: 20
    }
];

export default function SpaceshipLabs() {
    const containerRef = React.useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="bg-[#050505] text-white p-8 font-sans overflow-y-auto min-h-screen relative">
            {/* Single persistent Canvas for all ships */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <Canvas eventSource={containerRef as any} className="w-full h-full">
                    <View.Port />
                </Canvas>
            </div>

            <header className="max-w-6xl mx-auto mb-16 text-center relative z-10">
                <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 uppercase tracking-[0.2em]">
                    3D SPACESHIP LABS
                </h1>
                <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                    20 code-generated 3D variants. All rendering through a single WebGL context for maximum performance.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                {concepts.map((ship) => (
                    <div
                        key={ship.id}
                        className="group relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col"
                    >
                        {/* The View component will 'tunnel' its contents into the single Canvas above */}
                        <div className="aspect-square bg-[#0a0a0a] relative overflow-hidden">
                            <View className="w-full h-full">
                                <Suspense fallback={null}>
                                    <Stage intensity={0.5} environment="city" shadows={{ type: 'contact', opacity: 0.2 }}>
                                        <ShipPreview type={ship.id} />
                                    </Stage>
                                    <OrbitControls makeDefault enableZoom={false} autoRotate autoRotateSpeed={2} />
                                </Suspense>
                            </View>
                            <div className="absolute top-4 left-4 z-10">
                                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full border border-cyan-500/30 font-mono">
                                    CODE_GEN_{ship.id.toString().padStart(2, '0')}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 bg-[#161616] flex-grow shadow-inner">
                            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tighter">
                                {ship.name}
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4 italic">
                                {ship.description}
                            </p>
                            <button
                                className="w-full py-2 bg-white/5 hover:bg-cyan-600 border border-white/10 hover:border-cyan-400 text-white text-xs font-bold transition-all duration-300 rounded uppercase tracking-widest active:scale-95"
                                onClick={() => alert(`Selected ${ship.name}. Ready for deployment.`)}
                            >
                                Select Direction
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="mt-20 text-center text-gray-600 text-sm border-t border-white/5 pt-8 relative z-10">
                <p>Wet World 3D Prototype // View.Port Optimization v3.0</p>
                <div className="mt-4 flex justify-center gap-6">
                    <a href="/" className="text-cyan-500/50 hover:text-cyan-400 transition-colors">
                        ← Back to Experience
                    </a>
                </div>
            </footer>
        </div>
    );
}
