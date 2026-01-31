"use client";

import { Canvas } from "@react-three/fiber";
import { Experience } from "@/components/Experience";
import { Interface } from "@/components/Interface";
import { PostProcessing } from "@/components/PostProcessing";
import { KeyboardControls } from "@react-three/drei";

export default function Home() {
    return (
        <main className="fixed inset-0 overflow-hidden bg-[#050505]">
            <KeyboardControls
                map={[
                    { name: "blast", keys: ["Space"] },
                ]}
            >
                <div className="absolute inset-0">
                    <Canvas
                        shadows
                        camera={{ position: [20, 20, 20], fov: 45 }}
                        className="w-full h-full"
                    >
                        <color attach="background" args={["#050505"]} />
                        <Experience />
                        <PostProcessing />
                    </Canvas>
                    <Interface />
                </div>
            </KeyboardControls>
        </main>
    );
}
