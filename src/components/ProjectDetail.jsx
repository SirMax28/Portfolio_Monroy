import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../projectsData";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-[#070000] text-white flex flex-col items-center justify-center font-mono px-6 text-center"
      >
        <span className="text-red-500 mb-4 block tracking-[0.3em] text-xs uppercase">
          // Error 404
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white">
          PROYECTO NO ENCONTRADO
        </h1>
        <p className="text-zinc-500 mb-12 max-w-sm mx-auto font-sans font-light">
          La obra que buscas no existe o ha sido guardada en los archivos.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-zinc-400 hover:text-red-500 transition-colors uppercase text-xs tracking-widest group"
        >
          <div className="w-8 h-[1px] bg-zinc-600 group-hover:bg-red-500 transition-all duration-300 group-hover:-translate-x-2" />
          Regresar al Index
        </Link>
      </motion.div>
    );
  }

  // Toque Impeccable: Establecemos un color fallback o usamos el themeColor real de data.
  const tColor = project.themeColor || "#ef4444";

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
            className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors uppercase font-mono text-xs tracking-widest group"
          >
            {/* Línea que reacciona de color zinc al themeColor nativo del proyecto */}
            <motion.div
              className="w-8 h-[1px]"
              animate={{ backgroundColor: ["#52525b", tColor] }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
            />
            Volver al inicio
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white/5 rounded-3xl aspect-[4/3] md:aspect-video relative overflow-hidden flex flex-col items-center justify-center border border-white/5"
        >
          {/* Fondo degradado iluminado que transiciona dinámicamente al color del proyecto */}
          <motion.div
            className="absolute inset-0 opacity-40 mix-blend-screen"
            initial={{
              background:
                "radial-gradient(circle at center, rgba(239,68,68,0) 0%, transparent 70%)",
            }}
            animate={{
              background: `radial-gradient(circle at center, ${tColor}66 0%, transparent 70%)`,
            }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          />

          <div className="z-10 text-center max-w-4xl px-4 flex flex-col items-center">
            {/* Etiqueta de Categoría - Toma dinámicamente el color corporativo del proyecto */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-xs tracking-[0.4em] uppercase mb-6"
              style={{ color: tColor }}
            >
              {project.category} // {project.client}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.9]"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-zinc-400 font-light text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
