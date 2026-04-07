import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";

export default function Preloader() {
  const { progress } = useProgress();
  const [complete, setComplete] = useState(false);
  const [domLoaded, setDomLoaded] = useState(
    document.readyState === "complete",
  );

  useEffect(() => {
    // Escucha cuando toda la página (imágenes pesadas, videos, etc.) haya cargado
    const handleLoad = () => setDomLoaded(true);
    if (document.readyState === "complete") {
      setDomLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    // Si el progreso 3D llega a 100 O no hay nada que cargar 3D (progress === 0 y domLoaded)
    const isFullyLoaded = (progress >= 100 || (progress === 0 && domLoaded)) && domLoaded;
    
    if (isFullyLoaded) {
      // Un pequeño timeout para que el usuario alcance a ver el "100%"
      const timer = setTimeout(() => setComplete(true), 800);
      return () => clearTimeout(timer);
    }
  }, [progress, domLoaded]);

  // Si no hay modelos 3D y el dom ya cargó, mostramos 100
  const displayProgress =
    domLoaded && progress === 0 ? 100 : Math.round(progress);

  // Dots animation for "Cargando..."
  const dotVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 0],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          key="preloader"
          exit={{
            y: "-100%",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] bg-[#050000] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle hacker red background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

          {/* Central Data */}
          <div className="flex flex-col items-center relative z-10 gap-6">
            <div className="flex flex-col items-center">
              <span className="text-zinc-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">
                Preparando la Experiencia
              </span>
              <div className="text-white text-7xl md:text-9xl font-black tabular-nums tracking-tighter mix-blend-difference flex items-baseline">
                {displayProgress}
                <span className="text-3xl md:text-5xl text-red-500">%</span>
              </div>
            </div>

            {/* Typewriter Hacker Loader */}
            <div className="flex items-center text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-zinc-400 mt-8 relative">
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{ duration: 1.5, ease: "linear" }}
                className="overflow-hidden whitespace-nowrap"
              >
                Cargando
              </motion.span>
              <motion.span
                className="text-red-500 ml-1 flex"
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.2 }}
              >
                <motion.span variants={dotVariants}>.</motion.span>
                <motion.span variants={dotVariants} transition={{ delay: 0.2 }}>
                  .
                </motion.span>
                <motion.span variants={dotVariants} transition={{ delay: 0.4 }}>
                  .
                </motion.span>
              </motion.span>
            </div>

            <div className="w-48 h-[1px] bg-white/10 mt-8 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 bg-red-500 h-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${displayProgress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
