/**
 * Zustand Store for Landing Animation State
 *
 * This store manages the animation state for the landing page, particularly
 * the scroll progress as a percentage. It provides a `percentage` value and
 * a `setPercentage` function to update it dynamically.
 */

import { create } from "zustand";

/**
 * Interface for the landing animation state.
 *
 * @property {number} percentage - The current scroll progress as a percentage (0 to 100).
 * @property {(newPercentage: number) => void} setPercentage - Function to update the scroll percentage.
 */
interface LandingAnimationState {
  // data for scroll landing
  percentage: number;
  setPercentage: (newPercentage: number) => void;
}

/**
 * Custom Zustand store to manage landing animation state.
 *
 * Usage:
 * - `const { percentage, setPercentage } = useLandingAnimation();`
 * - Access `percentage` to get the current scroll progress.
 * - Call `setPercentage(newPercentage)` to update the scroll progress.
 */
export const useLandingAnimation = create<LandingAnimationState>()((set) => ({
  percentage: 0,
  setPercentage: (percentage) => set({ percentage }),
}));
