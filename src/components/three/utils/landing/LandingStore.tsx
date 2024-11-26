import { create } from "zustand";

interface LandingAnimationState {
  // data for scroll landing
  percentage: number;
  setPercentage: (newPercentage: number) => void;
}

export const useLandingAnimation = create<LandingAnimationState>()((set) => ({
  percentage: 0,
  setPercentage: (percentage) => set({ percentage }),
}));
