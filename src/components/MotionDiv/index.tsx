import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const MotionDiv = ({
  children,
  direction,
}: {
  children: ReactNode;
  direction: String;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: direction === "left" ? -500 : 500,
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
