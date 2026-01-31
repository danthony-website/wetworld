import { create } from 'zustand';

export type WorldLevel = 'DRY' | 'DAMP' | 'MOIST' | 'WET' | 'WATER';

interface WorldState {
    level: WorldLevel;
    waterAmount: number;
    isCelebrating: boolean;
    setLevel: (level: WorldLevel) => void;
    addWater: (amount: number) => void;
    setCelebrating: (isCelebrating: boolean) => void;
    evaporate: (amount: number) => void;
}

export const useWorldStore = create<WorldState>((set) => ({
    level: 'DRY',
    waterAmount: 0,
    isCelebrating: false,
    setLevel: (level) => set({ level }),
    setCelebrating: (isCelebrating) => set({ isCelebrating }),
    evaporate: (amount) => set((state) => {
        if (state.level !== 'WATER') return state;
        const nextAmount = Math.max(750, state.waterAmount - amount); // Evaporate back to WET limit
        const nextLevel: WorldLevel = nextAmount > 1000 ? 'WATER' : 'WET';
        return { waterAmount: nextAmount, level: nextLevel };
    }),
    addWater: (amount) => set((state) => {
        const nextAmount = state.waterAmount + amount;
        let nextLevel: WorldLevel = state.level;

        if (nextAmount > 1000) nextLevel = 'WATER';
        else if (nextAmount > 750) nextLevel = 'WET';
        else if (nextAmount > 500) nextLevel = 'MOIST';
        else if (nextAmount > 250) nextLevel = 'DAMP';
        else nextLevel = 'DRY';

        const leveledUp = nextLevel !== state.level;

        return {
            waterAmount: nextAmount,
            level: nextLevel,
            isCelebrating: leveledUp || state.isCelebrating
        };
    }),
}));
