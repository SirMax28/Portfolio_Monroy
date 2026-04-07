import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

export default function KinDropProject() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050000] font-sans selection:bg-purple-500/50 relative overflow-hidden text-zinc-100 min-h-screen">
      {/* Botón de volver */}
      <div className="fixed top-8 left-6 md:left-16 lg:left-24 z-50 mix-blend-difference">
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-zinc-300 hover:text-white transition-colors uppercase font-mono text-xs tracking-widest group"
        >
          <div className="w-8 h-[1px] bg-zinc-600 group-hover:bg-purple-500 transition-colors group-hover:-translate-x-2 transform duration-300" />
          Volver al inicio
        </Link>
      </div>

      {/* FOTO 1 - PC MOCKUP CON VIDEO INCORPORADO */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 px-4 md:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1600px] 2xl:max-w-screen-3xl relative flex flex-col items-center justify-center"
        >
          {/* VERSION MÓVIL: Logo arriba y video limpio abajo */}
          <div className="flex md:hidden flex-col items-center w-full gap-8">
            <img
              src={`${import.meta.env.BASE_URL}kindrop/logo_kindrop.webp`}
              alt="KinDrop Logo"
              className="w-3/4 max-w-[250px] object-contain drop-shadow-xl"
            />
            <div className="w-full overflow-hidden bg-black rounded-xl shadow-2xl aspect-video border border-white/10">
              {isInView && (
                <video
                  ref={videoRef}
                  src={`${import.meta.env.BASE_URL}kindrop/video_principal_kindrop.webm`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="bg-zinc-100/90 backdrop-blur-md rounded-xl p-6 shadow-xl w-full text-center">
              <p className="text-black font-medium">
                KinDrop es una submarca del famoso juego Fortnite, creada para
                una tienda específica de merchandising.
              </p>
              <div className="flex justify-center gap-3 mt-4">
                <span className="bg-zinc-800 text-white px-3 py-1 rounded-md text-xs font-bold">
                  Ai
                </span>
                <span className="bg-zinc-800 text-white px-3 py-1 rounded-md text-xs font-bold">
                  Ps
                </span>
              </div>
            </div>
          </div>

          {/* VERSION DESKTOP: Contenedor relativo con el PC Mockup */}
          <div
            className="hidden md:block relative w-full group"
            ref={containerRef}
          >
            {/* El Video: Queda POR DETRÁS (z-0) */}
            {/* Los % mantienen la proporción perfecta, sin importar qué tan grande hagamos la imagen principal */}
            <div
              className="absolute overflow-hidden bg-black z-0 rounded-[4px] md:rounded-[8px]"
              style={{
                top: "50.5%",
                left: "29.5%",
                width: "42%",
                height: "42.5%",
              }}
            >
              {isInView && (
                <video
                  ref={videoRef}
                  src={`${import.meta.env.BASE_URL}kindrop/video_principal_kindrop.webm`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* El recuadro de contraste detrás del texto: Queda POR DETRÁS de la imagen (z-[5]) */}
            {/* Como es posicionamiento absoluto, puedes ajustar estos porcentajes de igual forma en el navegador */}
            <div
              className="absolute z-[5] bg-zinc-100/90 backdrop-blur-md rounded-xl md:rounded-3xl shadow-xl"
              style={{
                top: "-2%",
                left: "34%",
                width: "33.5%",
                height: "43%",
              }}
            />

            {/* La Imagen del PC (con centro transparente): Queda POR DELANTE (z-10) */}
            <img
              src={`${import.meta.env.BASE_URL}kindrop/foto_1_pc_sin_fondo_para_video.webp`}
              alt="PC Mockup KinDrop"
              className="relative z-10 w-full h-auto pointer-events-none drop-shadow-2xl"
            />
          </div>
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
            src={`${import.meta.env.BASE_URL}kindrop/foto_2_kindrop.webp`}
            alt="KinDrop Foto 2"
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
            src={`${import.meta.env.BASE_URL}kindrop/foto_3_kindrop.webp`}
            alt="KinDrop Foto 3"
            className="w-full max-w-4xl rounded-[2rem] object-contain shadow-2xl"
          />
        </motion.div>
      </section>

      {/* MARQUESINA (TEXTO EN MOVIMIENTO) */}
      <div className="my-16 py-8 overflow-hidden bg-[#345a9e] flex -rotate-2 scale-110 shadow-2xl origin-center">
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
              className="text-5xl md:text-7xl font-black text-amber-300 uppercase italic tracking-tighter hover:text-white transition-colors duration-300 cursor-default"
            >
              KINDROP
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
              className="text-5xl md:text-7xl font-black text-amber-300 uppercase italic tracking-tighter hover:text-white transition-colors duration-300 cursor-default"
            >
              KINDROP
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
            src={`${import.meta.env.BASE_URL}kindrop/foto_4_kindrop.webp`}
            alt="KinDrop Foto 4"
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
            src={`${import.meta.env.BASE_URL}kindrop/foto_5_kindrop.webp`}
            alt="KinDrop Foto 5"
            className="w-full max-w-5xl rounded-[2rem] object-contain shadow-2xl"
          />
        </motion.div>
      </section>
    </div>
  );
}
