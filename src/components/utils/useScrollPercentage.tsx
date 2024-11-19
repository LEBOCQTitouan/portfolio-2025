// NOTE :  Based on : https://github.com/thebuilder/react-intersection-observer

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ScrollPercentageOptions {
  /** Number between 0 and 1 indicating the percentage that should be visible before triggering */
  threshold?: number;
}

type ScrollPercentageHookResponse = {
  ref: (node?: Element | null) => void;
  percentage: number;
};

export function calculateVerticalPercentage(
  bounds: DOMRect,
  threshold: number,
) {
  const offset = threshold * bounds.height;

  const percentage =
    (bounds.bottom - offset) /
    (window.innerHeight + bounds.height - offset * 2);

  return 1 - Math.max(0, Math.min(1, percentage));
}

export function useScrollPercentage(
  options: ScrollPercentageOptions = {},
): ScrollPercentageHookResponse {
  const threshold = options.threshold ?? 0;

  const [ref, inView, entry] = useInView();
  const [percentage, setPercentage] = useState(0);
  const target = entry && entry.target;

  useEffect(() => {
    const handleScroll = () => {
      if (!target) return;
      const bounds = target.getBoundingClientRect();
      const percentage = calculateVerticalPercentage(bounds, threshold);

      setPercentage(percentage);
    };

    // only run the event listener while the element is in viewport
    if (inView) {
      const root = window;
      root.addEventListener("scroll", handleScroll, { passive: true });
      root.addEventListener("resize", handleScroll);

      return () => {
        root.removeEventListener("scroll", handleScroll);
        root.removeEventListener("resize", handleScroll);
      };
    }

    // Trigger a scroll update, so we set the initial scroll percentage
    handleScroll();
    return;
  }, [inView, threshold, target]);

  return { ref, percentage };
}
