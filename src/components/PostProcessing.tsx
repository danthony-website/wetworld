"use client";

import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";

// Custom effect for stop-motion "jitter" or frame quantization
const StopMotionEffect = ({ fps = 12 }) => {
    const { scene, camera, gl } = useThree();
    const lastUpdate = useRef(0);

    // This is a simplified version; in a real app, we'd use a custom RenderPass
    // but for three-fiber we can just toggle visibility or update uniforms at lower FPS.
    // For now, let's just use it to update a global "clay time" uniform if we had one.
    return null;
};

export const PostProcessing = () => {
    return (
        <EffectComposer disableNormalPass>
            <Bloom
                intensity={0.5}
                luminanceThreshold={0.9}
                luminanceSmoothing={0.02}
                mipmapBlur
            />
            <Noise opacity={0.05} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
    );
};
