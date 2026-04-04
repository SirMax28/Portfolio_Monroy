import React, { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";

// Carga perezosa (Lazy Load) del modelo 3D para evitar bloquear el hilo principal
const Scene3D = lazy(() => import("./components/Scene3D"));

function Hero() {
  // Retrasamos el montaje del Canvas para que la animación inicial fluya a 60fps
  const [load3D, setLoad3D] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoad3D(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 120, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 45,
        damping: 15,
        mass: 1.2,
      },
    },
  };

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-[#1a0505] via-[#050000] to-[#2a0000] text-white overflow-hidden flex items-center justify-between px-6 md:px-16 lg:px-24">
      {/* Cinematic noise texture via SVG data-uri string and vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_150%)]" />

      {/* Intense Overdrive ambient lighting for fiery depth */}
      <div className="absolute top-[-15%] right-[-10%] w-[70vw] h-[70vw] bg-red-600/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-red-700/25 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] left-[30%] w-[50vw] h-[50vw] bg-rose-600/15 blur-[150px] rounded-full pointer-events-none" />

      {/* Hero Left Content */}
      <div className="z-10 flex flex-col items-start max-w-3xl">
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
          className="overflow-hidden pt-2 pb-6 -mb-6"
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

      {/* Hero Right - 3D Model Integrated */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute inset-y-0 right-0 w-[55%] z-0 pointer-events-none"
      >
        {load3D && (
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        )}
      </motion.div>

      {/* Aesthetic UI Overlays (Framing and Scale elements) */}
      <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 md:p-12">
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
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
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
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#070000] antialiased selection:bg-red-500/50 selection:text-white overflow-hidden">
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}
