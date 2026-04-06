import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { Link } from "react-router-dom";

export default function CharlieChocolateProject() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Gallery Array excluding the Hero explicitly (Wait, if Foto 01 is hero, we exclude it here)
  const images = [
    "/chocolate/foto_01.webp",
    "/chocolate/foto_02.webp",
    "/chocolate/foto_03.webp",
  ];

  const palette = "/chocolate/paleta_de_colores.webp";

  const lowerImages = [
    "/chocolate/foto_04_stickers.webp",
    "/chocolate/foto_05.webp",
    "/chocolate/foto_06.webp",
    "/chocolate/foto_07.webp",
  ];

  // States
  const [activeMedia, setActiveMedia] = useState(null); // For fullscreen images

  const [activePhone, setActivePhone] = useState(1);

  const phoneVideos = [
    "/chocolate/segundo_video_chocolate.webm",
    "/chocolate/primer_video_chocolate.webm",
    "/chocolate/tercer_video_chocolate.webm", // El tercer video que sigues editando (Vacío temporalmente)
  ];

  const phones = [0, 1, 2];

  const phoneSectionRef = useRef(null);
  const isPhoneSectionInView = useInView(phoneSectionRef, {
    once: true,
    margin: "600px",
  });

  const videoRefs = useRef([]);

  const getPhoneStyle = (index) => {
    if (activePhone === index) {
      return {
        x: "0%",
        y: 0,
        scale: 1,
        zIndex: 30,
        rotate: 0,
        opacity: 1,
      };
    } else if (
      (activePhone === 1 && index === 0) ||
      (activePhone === 2 && index === 1) ||
      (activePhone === 0 && index === 2)
    ) {
      // Left phone logic
      return {
        x: "-65%",
        y: 40,
        scale: 0.85,
        zIndex: 10,
        rotate: -6,
        opacity: 0.7,
      };
    } else {
      // Right phone logic
      return {
        x: "65%",
        y: 40,
        scale: 0.85,
        zIndex: 10,
        rotate: 6,
        opacity: 0.7,
      };
    }
  };

  return (
    <div className="bg-[#0B0604] font-sans selection:bg-[#D4AF37]/50 selection:text-black relative overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-8 left-6 md:left-16 lg:left-24 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-zinc-400 hover:text-[#D4AF37] transition-colors uppercase font-mono text-xs tracking-widest group"
        >
          <div className="w-8 h-[1px] bg-zinc-600 group-hover:bg-[#D4AF37] transition-colors group-hover:-translate-x-2 transform duration-300" />
          Volver al inicio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] overflow-hidden bg-black flex items-center justify-center">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0604] via-transparent to-black/40 z-10" />
          <img
            src="/chocolate/foto_horizontal.webp"
            alt="Chocolate Factory Hero"
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

        {/* Title Block Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.5)_0%,transparent_60%)] pointer-events-none -z-10 blur-xl scale-150" />
          <h1 className="relative text-[12vw] sm:text-[150px] leading-none font-black text-[#D4AF37] tracking-tighter drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] [text-shadow:0_4px_40px_rgba(0,0,0,0.8)]">
            SONBOX
          </h1>
          <p className="relative text-white/90 tracking-[0.4em] font-mono text-xs sm:text-sm uppercase text-center mt-2 md:mt-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] font-semibold">
            Charlie y la Fábrica de Chocolate
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-left md:text-center text-zinc-300 text-lg md:text-2xl font-light leading-relaxed md:leading-loose mb-32"
        >
          <p className="mb-6">
            Este proyecto consiste en el diseño de una edición especial limitada
            de packaging inspirada en la película{" "}
            <span className="text-[#D4AF37] font-medium">
              Charlie and the Chocolate Factory (2005)
            </span>
            , desarrollada como parte de un ejercicio académico. La propuesta
            parte de la idea de trasladar la narrativa de la película a una
            experiencia física, donde el usuario no solo recibe un producto,
            sino que interactúa con él.
          </p>
          <p className="mb-6">
            El packaging está diseñado como un sistema interactivo y secuencial,
            en el que el contenido no se revela de forma inmediata. Al abrirlo,
            el usuario descubre un primer elemento que actúa como guiño al{" "}
            <span className="italic">billete dorado</span>, estableciendo una
            conexión directa con la película.
          </p>
          <p>
            En su interior, el contenido se organiza en diferentes
            compartimentos ocultos que funcionan como un recorrido. Cada
            elemento debe ser descubierto progresivamente, replicando la lógica
            narrativa de la historia, donde cada puerta conduce a un nuevo
            espacio desconocido.
          </p>
        </motion.div>

        {/* Gallery Stack 1 */}
        <div className="flex flex-col gap-12 sm:gap-24 mb-32">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full relative group cursor-zoom-in"
              onClick={() => setActiveMedia(src)}
            >
              <div className="overflow-hidden rounded-xl bg-zinc-900 aspect-video">
                <img
                  src={src}
                  alt={`Chocolate Factory ${i + 2}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Palette Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center mb-32"
        >
          <div className="w-full max-w-4xl">
            <h3 className="text-[#D4AF37] font-mono text-sm tracking-[0.2em] mb-8 text-center uppercase">
              Paleta de Colores
            </h3>
            <img
              src={palette}
              alt="Color Palette"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Gallery Stack 2 */}
        <div className="flex flex-col gap-12 sm:gap-24 mb-32">
          {lowerImages.map((src, i) => (
            <motion.div
              key={i + images.length}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full relative group cursor-zoom-in"
              onClick={() => setActiveMedia(src)}
            >
              <div className="overflow-hidden rounded-xl bg-zinc-900 aspect-video lg:aspect-[21/9]">
                <img
                  src={src}
                  alt={`Factory Image ${i + 4}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  style={{
                    objectPosition: src.includes("stickers")
                      ? "center"
                      : "center",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Infinite Video Marquee */}
      <section className="py-12 border-y border-[#D4AF37]/20 bg-[#0B0604] overflow-hidden flex items-center relative z-20">
        <motion.div
          className="flex whitespace-nowrap font-black text-transparent uppercase items-center text-[100px] leading-none"
          style={{
            WebkitTextStroke: "2px rgba(212, 175, 55, 0.4)",
            width: "max-content",
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {/* Duplicate blocks to create seamless loop */}
          {[...Array(2)].map((_, blockIndex) => (
            <div key={blockIndex} className="flex gap-16 pr-16 items-center">
              {Array(6)
                .fill("VIDEO")
                .map((text, i) => (
                  <span
                    key={i}
                    className="hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {text}
                  </span>
                ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Phone Interactive Section */}
      <section
        ref={phoneSectionRef}
        className="relative w-full py-32 overflow-hidden flex items-center justify-center min-h-[80vh] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_60%)]"
      >
        <div className="relative w-[300px] sm:w-[360px] md:w-[400px] aspect-[9/19] flex items-center justify-center">
          <AnimatePresence>
            {phones.map((index) => {
              const styles = getPhoneStyle(index);

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 cursor-pointer will-change-transform drop-shadow-2xl"
                  initial={false}
                  animate={styles}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    mass: 1,
                  }}
                  onClick={() => setActivePhone(index)}
                >
                  <div className="relative w-full h-full flex items-center justify-center group">
                    {/* The Video Layer Behind the mock transparent phone */}
                    <div className="absolute top-[2.5%] left-[5%] w-[90%] h-[95%] overflow-hidden rounded-[28px] sm:rounded-[40px] md:rounded-[44px] bg-black">
                      {isPhoneSectionInView && phoneVideos[index] !== "" ? (
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          src={phoneVideos[index]}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover opacity-90"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-900 border border-zinc-800">
                          {/* Placeholder for loading/empty state */}
                          <span className="text-[#D4AF37]/50 font-mono text-[10px] tracking-widest text-center animate-pulse">
                            {phoneVideos[index] === ""
                              ? "VIDEO EN EDICIÓN..."
                              : "CARGANDO..."}
                          </span>
                        </div>
                      )}
                      {/* Dark overlay for inactive phones */}
                      {activePhone !== index && (
                        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300" />
                      )}
                    </div>
                    {/* Transparent Phone Mockup Overlay */}
                    <img
                      src="/chocolate/telefono_fondo_transparente.webp"
                      alt="Phone Mockup"
                      className="relative z-20 w-full h-full object-contain pointer-events-none drop-shadow-lg"
                    />

                    {/* Restart Button Overlay (Visible only on hover over the active phone) */}
                    {activePhone === index && phoneVideos[index] !== "" && (
                      <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (videoRefs.current[index]) {
                              videoRefs.current[index].currentTime = 0;
                              videoRefs.current[index].play();
                            }
                          }}
                          className="flex flex-col items-center gap-2 bg-black/60 backdrop-blur-sm text-white rounded-full p-6 hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="1 4 1 10 7 10" />
                            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Helper instruction */}
        <p className="absolute bottom-12 text-[#D4AF37]/50 font-mono text-xs tracking-widest uppercase animate-pulse">
          Click sobre los lados para interactuar
        </p>
      </section>

      {/* Fullscreen Media Viewer */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050000]/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveMedia(null)}
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              src={activeMedia}
              className="max-w-full max-h-[90vh] object-contain rounded-lg border border-[#D4AF37]/10 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-8 text-white/50 text-xs font-mono tracking-widest uppercase text-center flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/20" />
              Click fuera para cerrar
              <span className="w-8 h-[1px] bg-white/20" />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
