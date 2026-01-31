"use client";

import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";


export const PostProcessing = () => {
    return (
        <EffectComposer>
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
