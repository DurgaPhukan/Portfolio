import { motion } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";

const ScrollingScaleComponent = (props: { children?: ReactNode }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const newScale = 1 + (0.9 * scrollPosition) / maxScroll;
      setScale(newScale > 1.5 ? 1.5 : newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("");
  return (
    <div>
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default ScrollingScaleComponent;
