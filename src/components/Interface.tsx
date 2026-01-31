"use client";

import { useEffect, useState } from "react";
import { useWorldStore } from "@/store/useWorldStore";

export const Interface = () => {
    const { level, waterAmount, isCelebrating, setCelebrating } = useWorldStore();
    const [showCelebration, setShowCelebration] = useState(false);

    useEffect(() => {
        if (isCelebrating) {
            setShowCelebration(true);
            const timer = setTimeout(() => {
                setShowCelebration(false);
                setCelebrating(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isCelebrating, setCelebrating]);

    const levelStyles: Record<string, string> = {
        DRY: "text-amber-200",
        DAMP: "text-amber-400",
        MOIST: "text-blue-300",
        WET: "text-blue-500",
        WATER: "text-cyan-400",
    };

    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-between p-12">
            {/* Celebration Overlay */}
            {showCelebration && (
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center animate-in fade-in zoom-in duration-500 z-50">
                    <div className="text-center">
                        <h2 className="text-6xl font-black uppercase tracking-widest animate-bounce">
                            IT'S A {level} WORLD!
                        </h2>
                        <p className="text-xl mt-4 opacity-80 uppercase tracking-widest">
                            Lushness levels increasing...
                        </p>
                    </div>
                </div>
            )}

            {/* Top Header */}
            <div className="text-center group">
                <h1 className={`text-6xl font-black tracking-tighter uppercase mb-4 transition-colors duration-1000 ${levelStyles[level]}`}>
                    {level} WORLD
                </h1>
                <div className="w-80 h-3 bg-white/10 rounded-full overflow-hidden border border-white/5 p-0.5">
                    <div
                        className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-700 ease-out rounded-full"
                        style={{ width: `${Math.min((waterAmount / 750) * 100, 100)}%` }}
                    />
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-col items-center gap-4">
                <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">
                        {level === 'WATER' ? 'EVAPORATING...' : 'HOLD SPACE TO BLAST WATER'}
                    </span>
                </div>

                <div className="text-[10px] opacity-30 font-mono uppercase tracking-widest">
                    Planet Hydration Service // v0.1.0
                </div>
            </div>
        </div>
    );
};
