import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion tokens. Every animation in the app pulls from here so the
 * whole site moves with one rhythm. Reduced motion is handled globally by
 * <MotionConfig reducedMotion="user"> in _app.
 */
export const duration = {
  fast: 0.15,
  base: 0.25,
  slow: 0.45,
  reveal: 0.6,
} as const;

/** Decelerating curve for things arriving on screen. */
export const easeOut = [0.22, 1, 0.36, 1] as const;
/** Accelerating curve for things leaving the screen. */
export const easeIn = [0.4, 0, 1, 1] as const;

export const spring: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 32,
  mass: 0.8,
};

export const softSpring: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 28,
};

/** Fade + rise for content entering the viewport. */
export const fadeUp = (delay = 0, distance = 24): Variants => ({
  hidden: { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: easeOut, delay },
  },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: duration.reveal, ease: easeOut, delay },
  },
});

export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.reveal, ease: easeOut, delay },
  },
});

/** Parent variant that staggers its children (30–60ms per item). */
export const stagger = (
  staggerChildren = 0.06,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Viewport options for scroll reveals. A small `amount` keeps tall sections
 *  from staying hidden on mobile. */
export const revealViewport = { once: true, amount: 0.15 } as const;
