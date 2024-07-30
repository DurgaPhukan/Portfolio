import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const directionPattern = {
  left: -400,
  right: 400,
  top: -400,
  bottom: 400,
};

const MotionDiv = ({
  children,
  xDirection,
  yDirection,
}: {
  children: ReactNode;
  xDirection?: "left" | "right";
  yDirection?: "top" | "bottom";
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: xDirection ? directionPattern[xDirection] : 0,
        y: yDirection ? directionPattern[yDirection] : 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
