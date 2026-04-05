import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#070000] text-white pt-32 px-6 md:px-16 lg:px-24 flex flex-col"
    >
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-zinc-400 hover:text-red-500 transition-colors uppercase font-mono text-xs tracking-widest group"
          >
            <div className="w-8 h-[1px] bg-zinc-600 group-hover:bg-red-500 transition-colors group-hover:-translate-x-2 transform duration-300" />
            Volver al inicio
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white/5 rounded-3xl aspect-video relative overflow-hidden flex flex-col items-center justify-center border border-white/5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent_70%)] opacity-50" />
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white z-10">
            PROYECTO <span className="text-red-500">{id}</span>
          </h1>
          <p className="mt-6 text-zinc-400 font-light max-w-xl text-center z-10 text-lg md:text-xl">
            Detalles y exploración visual del proyecto. Componente dinámico
            cargado mediante React Router.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
