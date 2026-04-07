import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Detect if hover target requires a bigger cursor (links, buttons, interactives)
      const target = e.target;
      const isInteractive =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "input" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("cursor-crosshair") ||
        target.closest(".cursor-pointer") ||
        target.closest(".cursor-crosshair");

      setIsHovered(isInteractive ? true : false);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Hide cursor when leaving window
    const handleMouseLeave = () => setIsHovered(false);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          animate={{
            width: isHovered ? "64px" : "12px",
            height: isHovered ? "64px" : "12px",
            backgroundColor: isHovered ? "rgba(239, 68, 68, 0.15)" : "#ef4444",
            border: isHovered
              ? "1px solid rgba(239, 68, 68, 0.8)"
              : "0px solid transparent",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)] flex items-center justify-center"
        >
          <motion.div
            animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0 : 1 }}
            className="w-[3px] h-[3px] bg-white rounded-full transition-all duration-300"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
