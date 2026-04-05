import React, { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";

// Lazy Load del modelo 3D
const Scene3D = lazy(() => import("./Scene3D"));

export default function Home() {
  const [load3D, setLoad3D] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoad3D(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 120, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 45, damping: 15, mass: 1.2 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <section
        id="inicio"
        className="relative w-full h-screen bg-gradient-to-br from-[#1a0505] via-[#050000] to-[#2a0000] text-white overflow-hidden flex items-center justify-between px-6 md:px-16 lg:px-24"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_150%)]" />

        <div className="absolute top-[-5%] md:top-[-15%] right-[-10%] w-[90vw] md:w-[70vw] h-[90vw] md:h-[70vw] bg-red-600/20 blur-[120px] md:blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] md:bottom-[-20%] left-[-10%] w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] bg-red-700/25 blur-[120px] md:blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] md:top-[20%] left-[20%] md:left-[30%] w-[60vw] md:w-[50vw] h-[60vw] md:h-[50vw] bg-rose-600/15 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

        <div className="z-10 flex flex-col items-start max-w-3xl mt-[-5vh] md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-red-500" />
            <p className="text-red-500/80 font-mono tracking-[0.3em] uppercase text-xs">
              Art & Design Portfolio
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden pt-2 pb-6 -mb-6 pr-4"
          >
            <motion.h1
              variants={itemVariants}
              className="text-[12vw] md:text-[8rem] font-black tracking-tighter leading-none will-change-transform origin-bottom"
              style={{ textShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
            >
              MONROY
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-400 text-lg md:text-2xl font-light leading-relaxed max-w-lg mt-8"
          >
            Transformando la abstracción en experiencias visuales.{" "}
            <span className="text-zinc-200">
              Explora la estética de la nueva era.
            </span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 px-8 py-4 bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 text-white rounded-full transition-all duration-500 backdrop-blur-md group flex items-center gap-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            <span className="relative z-10 font-medium tracking-wide text-sm">
              EXPERIMENTAR OBRAS
            </span>
            <div className="relative z-10 w-2 h-2 rounded-full bg-red-500 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[55%] z-0 pointer-events-none flex items-center justify-center overflow-hidden"
        >
          <div className="w-full h-[120%] lg:h-full scale-[1.5] lg:scale-100 opacity-[0.10] mix-blend-screen md:mix-blend-normal md:opacity-60 lg:opacity-100 transition-all duration-1000 -translate-y-16 lg:-translate-y-0">
            {load3D && (
              <Suspense fallback={null}>
                <Scene3D />
              </Suspense>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 pointer-events-none"
        >
          <span className="text-[12px] font-mono tracking-[0.4em] text-red-500/80 uppercase font-semibold">
            Scroll
          </span>
          <div className="w-[2px] h-16 bg-white/20 relative overflow-hidden rounded-full">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 bg-red-500 shadow-[0_0_12px_rgba(239,68,68,1)] rounded-full"
            />
          </div>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 pt-24 md:p-12 md:pt-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
            className="flex justify-between w-full uppercase font-mono text-[9px] tracking-[0.4em] text-red-500/50"
          >
            <span>Est. 2026</span>
            <span className="hidden md:inline-block">Creative Index // 01</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
            className="flex justify-between items-end w-full uppercase font-mono text-[9px] tracking-[0.4em] text-red-500/50"
          >
            <div className="flex items-center gap-3 origin-bottom-left -rotate-90 translate-y-[-2rem] relative">
              <span className="whitespace-nowrap">SCROLL TO DISCOVER</span>
              <motion.div
                animate={{ x: [0, 20, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="w-16 h-[1px] bg-red-500/50"
              />
            </div>
            <span className="text-right flex flex-col">
              <span>SYS_ACT</span>
              <span>OK</span>
            </span>
          </motion.div>
        </div>
      </section>

      <Gallery />
      <About />
      <Contact />
    </motion.div>
  );
}
