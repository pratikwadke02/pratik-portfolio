"use client";

import { motion, type Variants } from "framer-motion";
import { Fragment } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const word: Variants = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.25, 1] },
  },
};

interface MaskedRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  autoplay?: boolean;
  style?: React.CSSProperties;
  id?: string;
}

export function MaskedReveal({
  text,
  className,
  as = "h1",
  delay = 0,
  autoplay = true,
  style,
  id,
}: MaskedRevealProps) {
  const words = text.split(" ");
  const MotionTag = motion[as];

  return (
    <MotionTag
      id={id}
      className={className}
      variants={container}
      initial="hidden"
      animate={autoplay ? "show" : undefined}
      whileInView={autoplay ? undefined : "show"}
      viewport={autoplay ? undefined : { once: true, margin: "-10% 0px" }}
      style={style}
      aria-label={as === "span" ? undefined : text}
      transition={autoplay ? { delayChildren: delay / 1000 + 0.05 } : undefined}
    >
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span
            aria-hidden="true"
            className="inline-block overflow-hidden"
            style={{
              verticalAlign: "top",
              paddingBottom: "0.18em",
              marginBottom: "-0.18em",
              lineHeight: "inherit",
            }}
          >
            <motion.span
              variants={word}
              className="inline-block"
              style={{ lineHeight: "inherit" }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </MotionTag>
  );
}
