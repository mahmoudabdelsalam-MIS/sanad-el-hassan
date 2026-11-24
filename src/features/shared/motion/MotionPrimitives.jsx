import React from "react";
import { motion } from "motion/react";

export const LUXURY_EASE = [0.22, 1, 0.36, 1];

const DIRECTION_OFFSET = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  right: { x: 24, y: 0 },
  left: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  inView = true,
  className = "",
}) {
  const offset = DIRECTION_OFFSET[direction] ?? DIRECTION_OFFSET.up;
  const initial = { opacity: 0, x: offset.x, y: offset.y };
  const target = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initial}
      animate={inView ? undefined : target}
      whileInView={inView ? target : undefined}
      viewport={inView ? { once: true, amount: 0.15 } : undefined}
      transition={{ duration, delay, ease: LUXURY_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.65,
  inView = true,
  className = "",
}) {
  const initial = { opacity: 0, scale: 0.95 };
  const target = { opacity: 1, scale: 1 };

  return (
    <motion.div
      initial={initial}
      animate={inView ? undefined : target}
      whileInView={inView ? target : undefined}
      viewport={inView ? { once: true, amount: 0.15 } : undefined}
      transition={{ duration, delay, ease: LUXURY_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  stagger = 0.08,
  delayChildren = 0.05,
  inView = true,
  className = "",
}) {
  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={inView ? undefined : "visible"}
      whileInView={inView ? "visible" : undefined}
      viewport={inView ? { once: true, amount: 0.12 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  direction = "up",
  duration = 0.55,
  className = "",
}) {
  const offset = DIRECTION_OFFSET[direction] ?? DIRECTION_OFFSET.up;

  const variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: LUXURY_EASE },
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

export default FadeIn;
