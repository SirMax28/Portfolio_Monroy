import React, { Suspense, useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Center } from "@react-three/drei";
import { Model as JuanValdezBag } from "./Bolsa_juan_valdez";
import { Link } from "react-router-dom";

function AnimatedBag({ scrollYProgress }) {
  const group = useRef();

  // Rotación orgánica
  const rotateY = useTransform(
    scrollYProgress,
    [0, 1],
    [Math.PI * 0.2, Math.PI * 4.2],
  );
  const rotateX = useTransform(scrollYProgress, [0, 0.8, 1], [0.1, 0, -0.4]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.8, 1], [-0.1, 0, 0.2]);

  const scaleAnim = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8, 1],
    [0.5, 1.3, 1.3, 0.2],
  );

  // Centralizado
  const posX = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // Aparece de abajo y se va hacia arriba al terminar
  const posY = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [-3, 0, 0, 4]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = rotateY.get();
      group.current.rotation.x = rotateX.get();
      group.current.rotation.z = rotateZ.get();
      const s = scaleAnim.get();
      group.current.scale.set(s, s, s);
      group.current.position.x = posX.get();
      group.current.position.y = posY.get();
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Center>
          <JuanValdezBag />
        </Center>
      </Float>
    </group>
  );
}

export default function JuanValdezProject() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Tracking del scroll real de TODA la página
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#0b0a08] font-sans selection:bg-[#B38B59]/50 relative">
      <div className="fixed top-8 left-6 md:left-16 lg:left-24 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors uppercase font-mono text-xs tracking-widest group"
        >
          <div className="w-8 h-[1px] bg-zinc-600 group-hover:bg-[#B38B59] transition-colors group-hover:-translate-x-2 transform duration-300" />
          Volver al inicio
        </Link>
      </div>

      {/* Escena 3D Fija como background real */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(92,110,70,0.15),transparent_70%)] pointer-events-none z-0" />
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <Environment preset="studio" />
            <ambientLight intensity={0.6} />
            <directionalLight
              position={[5, 10, 5]}
              intensity={1.5}
              color="#fff1e6"
            />
            <spotLight
              position={[-5, 5, -5]}
              angle={0.2}
              penumbra={1}
              intensity={1.5}
              color="#B38B59"
            />
            <AnimatedBag scrollYProgress={scrollYProgress} />
          </Suspense>
        </Canvas>
      </div>

      {/* Secciones Nativas de Flujo (No tienen overlaps extraños, fluyen debajo de la bolsa) */}
      <div className="relative z-10 w-full pt-[15vh]">
        <section className="min-h-[85vh] flex flex-col items-center justify-start text-center pointer-events-none">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mix-blend-difference mb-4 drop-shadow-2xl">
            JUAN VALDEZ
          </h1>
          <p className="text-zinc-300 tracking-[0.4em] font-mono text-xs uppercase animate-pulse drop-shadow-md">
            Comienza a hacer scroll
          </p>
        </section>

        {/* Las tarjetas flotan en el scroll nativo. "Debajo" de la bolsa */}
        <section className="min-h-[80vh] flex flex-col justify-end items-center pb-24 px-6 md:px-16 pointer-events-none text-center">
          <div className="max-w-2xl bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl pointer-events-auto">
            <span className="text-[#B38B59] font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              // Experiencia Inmersiva
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white leading-none">
              CAFÉ <span className="text-[#B38B59]">PREMIUM.</span>
            </h1>
            <p className="text-zinc-300 font-light text-lg">
              Rediseñando el empaque Clásico. Capturando la textura del papel
              crudo y las notas orgánicas de la cultura cafetera.
            </p>
          </div>
        </section>

        <section className="min-h-[80vh] flex flex-col justify-end items-center pb-24 px-6 md:px-16 pointer-events-none text-center">
          <div className="max-w-2xl bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl pointer-events-auto">
            <span className="text-white font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              // Edición especial
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-[#B38B59] leading-none">
              ART NOUVEAU.
            </h2>
            <p className="text-zinc-300 font-light text-lg">
              El diseño se inspira en el lenguaje visual del Art Nouveau,
              incorporando formas orgánicas, líneas fluidas y una composición
              ornamental que conecta con la naturaleza del café.
            </p>
          </div>
        </section>

        <section className="min-h-[80vh] flex flex-col justify-end items-center pb-24 px-6 md:px-16 pointer-events-none text-center">
          <div className="max-w-2xl bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl pointer-events-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white leading-none">
              SABOR <span className="text-[#B38B59]">COLOMBIANO.</span>
            </h2>
            <p className="text-zinc-300 font-light text-lg">
              Selección de café 100% colombiano, cultivado en origen y
              reconocido por su calidad, aroma y carácter.
            </p>
          </div>
        </section>
      </div>

      {/* NUEVA SECCIÓN DETALLADA */}
      <section className="relative z-20 bg-[#fbf9f6] text-[#2c1d11] pb-32 shadow-[0_-20px_50px_rgba(0,0,0,1)] rounded-t-[3rem] overflow-hidden">
        {/* --- Hero Section --- */}
        <div className="pt-24 px-6 md:px-16 lg:px-24 mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-serif text-[#4a3219] mb-6 leading-tight">
              Juan Valdez
            </h2>
            <div className="p-6 border-l-2 border-[#b38b59]">
              <p className="font-light text-lg md:text-xl text-[#5c4a3d]">
                Edición especial de café para un trabajo académico. Esta edición
                une la tradición cafetera colombiana con sus orígenes.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/juan_valdez/logo_juan_valdez_principal.webp"
              alt="Logo Juan Valdez"
              className="max-w-[200px] md:max-w-[300px] mix-blend-multiply opacity-90"
              loading="lazy"
            />
          </div>
        </div>

        {/* --- Asymmetrical Section --- */}
        <div className="mt-32 px-6 md:px-16 lg:px-24 mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-8 border-b border-[#b38b59]/30 pb-4">
            <span className="text-2xl md:text-4xl font-serif text-[#4a3219] italic font-light">
              Aroma
            </span>
            <span className="text-2xl md:text-4xl font-serif text-[#4a3219] italic font-light">
              Café
            </span>
            <span className="text-2xl md:text-4xl font-serif text-[#4a3219] italic font-light">
              Colombia
            </span>
          </div>

          <div className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-3xl overflow-hidden shadow-2xl">
            <motion.div
              style={{
                y: useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]),
              }}
              className="absolute inset-0 w-full h-[140%] -top-[20%]"
            >
              <img
                src="/juan_valdez/banner_horizontal.webp"
                alt="Banner Juan Valdez"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-white/20 backdrop-blur-md border border-white/40 p-6 rounded-2xl max-w-xs shadow-xl">
              <p className="text-white text-sm md:text-base font-medium drop-shadow-md">
                Un diseño especial inspirado en el art nouveau
              </p>
            </div>
          </div>
        </div>

        {/* --- Infinite Marquee --- */}
        <div className="mt-32 overflow-hidden bg-[#e91c24] py-8 flex">
          <motion.div
            className="flex gap-16 whitespace-nowrap items-center shrink-0 pr-16"
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {[...Array(12)].map((_, i) => (
              <img
                key={i}
                src="/juan_valdez/logo_juan_valdez_movimiento.webp"
                alt="Juan Valdez"
                className="h-16 object-contain invert opacity-90 brightness-0"
                loading="lazy"
              />
            ))}
          </motion.div>
          <motion.div
            className="flex gap-16 whitespace-nowrap items-center shrink-0 pr-16"
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {[...Array(12)].map((_, i) => (
              <img
                key={i}
                src="/juan_valdez/logo_juan_valdez_movimiento.webp"
                alt="Juan Valdez"
                className="h-16 object-contain invert opacity-90 brightness-0"
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>

        {/* --- Interactive Section (Packaging) --- */}
        <PackagingSection scrollYProgress={scrollYProgress} />

        {/* --- Gallery (Representación Gráfica) --- */}
        <GallerySection />
      </section>
    </div>
  );
}

// Componentes extra para encapsular el estado

function PackagingSection({ scrollYProgress }) {
  const [selectedColor, setSelectedColor] = useState("#fbf9f6"); // Color por defecto de la sección
  const options = [
    { color: "#5c7835", name: "Verde Olivo" },
    { color: "#512216", name: "Marrón Oscuro" },
    { color: "#9a2e25", name: "Rojo Carmesí" },
  ];

  return (
    <motion.div
      onViewportLeave={() => setSelectedColor("#fbf9f6")}
      viewport={{ margin: "-15% 0px -15% 0px" }}
      className="mt-32 py-24 px-6 md:px-16 lg:px-24 mx-auto w-full transition-colors duration-1000"
      style={{ backgroundColor: selectedColor }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-full blur-3xl" />
          <motion.img
            key={selectedColor} // Forzar re-render para animación
            initial={{ opacity: 0, scale: 0.9, rotate: -5, y: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
            src="/juan_valdez/vaso_sin_fondo.webp"
            alt="Packaging Vaso"
            className="max-w-[280px] md:max-w-[400px] relative z-10 drop-shadow-2xl"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-start gap-8">
          <div>
            <h3
              className={`text-4xl md:text-5xl font-black mb-2 tracking-tighter uppercase transition-colors duration-700 ${selectedColor === "#9a2e25" || selectedColor === "#512216" ? "text-white" : "text-[#2c1d11]"}`}
            >
              Packaging
            </h3>
            <p
              className={`text-xl font-serif italic transition-colors duration-700 ${selectedColor === "#9a2e25" || selectedColor === "#512216" ? "text-zinc-300" : "text-[#5c4a3d]"}`}
            >
              Rediseño del envase.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            {options.map((opt) => {
              const isDarkState =
                selectedColor === "#9a2e25" || selectedColor === "#512216";
              const isSelected = selectedColor === opt.color;

              return (
                <div
                  key={opt.color}
                  onClick={() => setSelectedColor(opt.color)}
                  className={`flex items-center justify-between w-full p-4 rounded-2xl cursor-pointer group transition-all duration-300 border-2 ${
                    isSelected
                      ? isDarkState
                        ? "border-white/30 bg-white/10"
                        : "border-[#b38b59] bg-[#b38b59]/10"
                      : isDarkState
                        ? "border-white/5 hover:border-white/20 hover:bg-white/5"
                        : "border-black/5 hover:border-black/20 hover:bg-black/5"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-full border-4 shadow-lg transition-all duration-300 ${
                        isSelected
                          ? "border-current shadow-black/30"
                          : "border-transparent"
                      } ${isDarkState ? "text-white" : "text-[#b38b59]"}`}
                      style={{ backgroundColor: opt.color }}
                    />
                    <div className="flex flex-col">
                      <span
                        className={`text-xl transition-colors font-medium ${
                          isSelected
                            ? isDarkState
                              ? "text-white"
                              : "text-[#2c1d11]"
                            : isDarkState
                              ? "text-white/60 group-hover:text-white/80"
                              : "text-[#8a7b6d] group-hover:text-[#2c1d11]"
                        }`}
                      >
                        {opt.name}
                      </span>
                      <span
                        className={`text-xs font-mono tracking-widest transition-colors duration-700 ${
                          isDarkState ? "text-white/40" : "text-[#5c4a3d]/60"
                        }`}
                      >
                        {opt.color.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Clearer click indicator */}
                  <div
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
                      isSelected
                        ? isDarkState
                          ? "bg-white text-black"
                          : "bg-[#b38b59] text-white"
                        : isDarkState
                          ? "bg-white/10 text-white/50 group-hover:bg-white/20 group-hover:text-white/90"
                          : "bg-black/5 text-black/40 group-hover:bg-black/10 group-hover:text-black/80"
                    }`}
                  >
                    {isSelected ? "Activo" : "Elegir"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GallerySection() {
  const images = [
    "/juan_valdez/b.webp",
    "/juan_valdez/c.webp",
    "/juan_valdez/d.webp",
    "/juan_valdez/e.webp",
    "/juan_valdez/f.webp",
    "/juan_valdez/a_y_vaso_juan_valdez.webp",
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="mt-32 px-6 md:px-16 lg:px-24 mx-auto max-w-7xl pb-16">
      <h3 className="text-3xl md:text-5xl font-black mb-16 text-center text-[#2c1d11] tracking-tighter uppercase">
        Representación Gráfica
      </h3>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="break-inside-avoid rounded-2xl overflow-hidden cursor-zoom-in relative"
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => setSelectedIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <motion.img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full object-cover"
              loading="lazy"
              animate={{
                scale: hoveredIndex === i ? 1.05 : 1,
                filter:
                  hoveredIndex !== null && hoveredIndex !== i
                    ? "brightness(0.6) grayscale(30%)"
                    : "brightness(1) grayscale(0%)",
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#070605]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={images[selectedIndex]}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => {
                e.stopPropagation();
                // Avanzar en galería
                setSelectedIndex((prev) => (prev + 1) % images.length);
              }}
            />
            <p className="absolute bottom-8 text-white/50 text-sm font-mono tracking-widest uppercase text-center">
              Click en imagen para siguiente • Click fuera para cerrar
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
