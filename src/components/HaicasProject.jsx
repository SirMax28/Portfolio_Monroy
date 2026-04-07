import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

export default function HaicasProject() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050000] font-sans selection:bg-[#1e4278]/50 relative overflow-hidden text-zinc-100 min-h-screen">
      {/* Fondo azul atmosférico */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] md:w-[80vw] md:h-[100vw] max-w-[1200px] max-h-[1200px] bg-[#1e4278]/15 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Botón de volver */}
      <div className="fixed top-8 left-6 md:left-16 lg:left-24 z-50 mix-blend-difference">
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-zinc-300 hover:text-white transition-colors uppercase font-mono text-xs tracking-widest group"
        >
          <div className="w-8 h-[1px] bg-zinc-600 group-hover:bg-[#1e4278] transition-colors group-hover:-translate-x-2 transform duration-300" />
          Volver al inicio
        </Link>
      </div>

      {/* HERO SECTION - FOTO 1 A PANTALLA COMPLETA */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 px-4 md:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] relative flex flex-col items-center justify-center"
          ref={containerRef}
        >
          {/* Aquí solo ponemos la imagen porque no hay video, así que es muchísimo más limpio */}
          <img
            src={`${import.meta.env.BASE_URL}haicas/foto_1_haicas.webp`}
            alt="Haicas Proyecto Portada"
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-2xl md:rounded-3xl"
          />
        </motion.div>
      </section>

      {/* GALERÍA 1 (Fotos 2 y 3) */}
      <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col gap-24 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}haicas/foto_2_haicas.webp`}
            alt="Haicas Foto 2"
            className="w-full max-w-5xl rounded-[2rem] object-contain shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="w-full flex justify-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}haicas/foto_3_haicas.webp`}
            alt="Haicas Foto 3"
            className="w-full max-w-4xl rounded-[2rem] object-contain shadow-2xl"
          />
        </motion.div>
      </section>

      {/* MARQUESINA (TEXTO EN MOVIMIENTO) - HAICAS */}
      {/* Fondo #1e4278 y texto blanco con hover grisáceo */}
      <div className="my-16 py-8 overflow-hidden bg-[#1e4278] flex -rotate-2 scale-110 shadow-2xl origin-center border-y border-white/5">
        <motion.div
          className="flex gap-12 whitespace-nowrap items-center shrink-0 pr-12"
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
        >
          {[...Array(15)].map((_, i) => (
            <span
              key={i}
              className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter hover:text-zinc-400 transition-colors duration-300 cursor-default"
            >
              HAICAS
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-12 whitespace-nowrap items-center shrink-0 pr-12"
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
        >
          {[...Array(15)].map((_, i) => (
            <span
              key={`dup-${i}`}
              className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter hover:text-zinc-400 transition-colors duration-300 cursor-default"
            >
              HAICAS
            </span>
          ))}
        </motion.div>
      </div>

      {/* GALERÍA 2 (Fotos 4 y 5) */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col gap-24 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}haicas/foto_4_haicas.webp`}
            alt="Haicas Foto 4"
            className="w-full max-w-6xl rounded-[2rem] object-contain shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="w-full flex justify-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}haicas/foto_5_haicas.webp`}
            alt="Haicas Foto 5"
            className="w-full max-w-5xl rounded-[2rem] object-contain shadow-2xl"
          />
        </motion.div>
      </section>
    </div>
  );
}
