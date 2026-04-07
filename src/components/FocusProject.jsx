import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

export default function FocusProject() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050000] font-sans selection:bg-blue-500/50 relative overflow-hidden text-zinc-100 min-h-screen">
      {/* Fondo verde opaco atmosférico */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] md:w-[80vw] md:h-[100vw] max-w-[1200px] max-h-[1200px] bg-[#5c683b]/15 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Botón de volver */}
      <div className="fixed top-8 left-6 md:left-16 lg:left-24 z-50 mix-blend-difference">
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-zinc-300 hover:text-white transition-colors uppercase font-mono text-xs tracking-widest group"
        >
          <div className="w-8 h-[1px] bg-zinc-600 group-hover:bg-blue-500 transition-colors group-hover:-translate-x-2 transform duration-300" />
          Volver al inicio
        </Link>
      </div>

      {/* HERO SECTION - LOGO SEPARADO Y TELÉFONO VERTICAL MOCKUP */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 px-4 md:px-8 z-10">
        {/* LOGO ANIMADO POR SEPARADO COMO HOVER / ENTRADA */}
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[200px] md:max-w-[280px]"
        >
          <img
            src={`${import.meta.env.BASE_URL}focus/logo_sin_fondo.webp`}
            alt="Logo Focus"
            className="w-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] relative flex flex-col items-center justify-center -mt-8 md:-mt-45"
        >
          {/* VERSION MÓVIL: Video limpio y caja de texto */}
          <div className="flex md:hidden flex-col items-center w-full gap-8 px-4 mt-12">
            <div className="w-full max-w-[280px] sm:max-w-[320px] overflow-hidden bg-black rounded-[2rem] shadow-2xl border-4 border-zinc-800">
              {isInView && (
                <video
                  ref={videoRef}
                  src={`${import.meta.env.BASE_URL}focus/video_focus.webm`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
            <div className="bg-zinc-100/95 backdrop-blur-md rounded-2xl p-6 shadow-xl w-full text-center">
              <p className="text-black font-medium leading-relaxed">
                Focus es una aplicación diseñada para ayudar a estudiantes a
                mejorar su concentración y organización del tiempo de estudio.
              </p>
              <div className="flex justify-center gap-3 mt-4">
                <span className="bg-zinc-800 text-white px-3 py-1 rounded-md text-xs font-bold shadow-md">
                  Ai
                </span>
                <span className="bg-zinc-800 text-white px-3 py-1 rounded-md text-xs font-bold shadow-md">
                  Ps
                </span>
              </div>
            </div>
          </div>

          {/* CONTENEDOR RELATIVO PARA EMPALMAR IMAGEN Y VIDEO VERTICAL (DESKTOP/TABLET) */}
          <div
            className="hidden md:block relative w-full group"
            ref={containerRef}
          >
            {/* El Video Vertical: Queda POR DETRÁS (z-0) */}
            {/* Si es necesario ajustar el encuadre usa estilo exacto con la herramienta del explorador */}
            <div
              className="absolute overflow-hidden bg-black z-0 rounded-[12px] md:rounded-[24px]"
              style={{
                top: "37%",
                left: "41%",
                width: "19%",
                height: "47%",
              }}
            >
              {isInView && (
                <video
                  ref={videoRef}
                  src={`${import.meta.env.BASE_URL}focus/video_focus.webm`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* El recuadro de contraste detrás del texto: Queda POR DETRÁS de la imagen (z-[5]) */}
            {/* Puedes ajustar estos porcentajes de igual forma en tu navegador para que encajen perfectos */}
            <div
              className="absolute z-[5] bg-zinc-100/90 backdrop-blur-md rounded-xl md:rounded-3xl shadow-xl"
              style={{
                top: "17%",
                left: "33%",
                width: "31.8%",
                height: "17%",
              }}
            />

            {/* La Imagen del Teléfono (con centro transparente): Queda POR DELANTE (z-10) */}
            <img
              src={`${import.meta.env.BASE_URL}focus/foto_1_telefono_sin_fondo_focus.webp`}
              alt="Teléfono Mockup Focus"
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
            src={`${import.meta.env.BASE_URL}focus/foto_2_focus.webp`}
            alt="Focus Foto 2"
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
            src={`${import.meta.env.BASE_URL}focus/foto_3_focus.webp`}
            alt="Focus Foto 3"
            className="w-full max-w-4xl rounded-[2rem] object-contain shadow-2xl"
          />
        </motion.div>
      </section>

      {/* MARQUESINA (TEXTO EN MOVIMIENTO) - FOCUS */}
      <div className="my-16 py-8 overflow-hidden bg-[#364919] flex -rotate-2 scale-110 shadow-2xl origin-center">
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
              className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter hover:text-stone-900 transition-colors duration-300 cursor-default"
            >
              FOCUS
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
              className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter hover:text-stone-900 transition-colors duration-300 cursor-default"
            >
              FOCUS
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
            src={`${import.meta.env.BASE_URL}focus/foto_4_focus.webp`}
            alt="Focus Foto 4"
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
            src={`${import.meta.env.BASE_URL}focus/foto_5_focus.webp`}
            alt="Focus Foto 5"
            className="w-full max-w-5xl rounded-[2rem] object-contain shadow-2xl"
          />
        </motion.div>
      </section>
    </div>
  );
}
