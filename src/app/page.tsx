"use client";

import { Canvas } from "@react-three/fiber";
import { Experience } from "@/components/Experience";
import { Interface } from "@/components/Interface";
import { PostProcessing } from "@/components/PostProcessing";
import { KeyboardControls } from "@react-three/drei";

export default function Home() {
    return (
        <main className="h-screen w-full relative">
            <KeyboardControls
                map={[
                    { name: "blast", keys: ["Space"] },
                ]}
            >
                <Canvas
                    shadows
                    camera={{ position: [20, 20, 20], fov: 45 }}
                >
                    <color attach="background" args={["#050505"]} />
                    <Experience />
                    <PostProcessing />
                </Canvas>
                <Interface />
            </KeyboardControls>
        </main>
    );
}
