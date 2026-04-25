"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  as?: "div" | "ul" | "ol";
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  once = true,
  as = "div",
}: StaggerContainerProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "section";
}

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}
