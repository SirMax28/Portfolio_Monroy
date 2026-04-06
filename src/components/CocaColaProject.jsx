import React, { Suspense, useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Center } from "@react-three/drei";
import { Model as CocaColaRed } from "./Coca_cola_roja";
import { Link } from "react-router-dom";

function AnimatedCan({ scrollYProgress }) {
  const group = useRef();

  // The can orbits naturally with the whole page scroll
  const rotateY = useTransform(
    scrollYProgress,
    [0, 1],
    [Math.PI * 1.5, Math.PI * 6.5],
  );
  const rotateX = useTransform(scrollYProgress, [0, 0.8, 1], [0.3, 0, -0.4]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.8, 1], [-0.2, 0, 0.2]);

  const scaleAnim = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8, 1],
    [0.1, 0.27, 0.27, 0.05],
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
      <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
        <Center>
          <CocaColaRed />
        </Center>
      </Float>
    </group>
  );
}

export default function CocaColaProject() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Tracking del scroll real de TODA la página
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#050000] font-sans selection:bg-red-500/50 relative">
      <div className="fixed top-8 left-6 md:left-16 lg:left-24 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors uppercase font-mono text-xs tracking-widest group"
        >
          <div className="w-8 h-[1px] bg-zinc-600 group-hover:bg-[#e00024] transition-colors group-hover:-translate-x-2 transform duration-300" />
          Volver al inicio
        </Link>
      </div>

      {/* Escena 3D Fija como background real */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,0,36,0.15),transparent_70%)] pointer-events-none z-0" />
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <Environment preset="studio" />
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[5, 10, 5]}
              intensity={1.5}
              color="#ffffff"
            />
            <spotLight
              position={[-5, 5, -5]}
              angle={0.2}
              penumbra={1}
              intensity={2}
              color="#e00024"
            />
            <AnimatedCan scrollYProgress={scrollYProgress} />
          </Suspense>
        </Canvas>
      </div>

      {/* Secciones Nativas de Flujo (No tienen overlaps extraños, fluyen debajo de la lata) */}
      <div className="relative z-10 w-full pt-[15vh]">
        <section className="min-h-[85vh] flex flex-col items-center justify-start text-center pointer-events-none">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mix-blend-difference mb-4 drop-shadow-2xl">
            COCA-COLA 3D
          </h1>
          <p className="text-zinc-300 tracking-[0.4em] font-mono text-xs uppercase animate-pulse drop-shadow-md">
            Comienza a hacer scroll
          </p>
        </section>

        {/* Las tarjetas flotan en el scroll nativo. "Debajo" de la lata */}
        <section className="min-h-[80vh] flex flex-col justify-end items-center pb-24 px-6 md:px-16 pointer-events-none text-center">
          <div className="max-w-2xl bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl pointer-events-auto">
            <span className="text-[#e00024] font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              // Estudio 3D
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white leading-none">
              COCA <span className="text-[#e00024]">COLA.</span>
            </h1>
            <p className="text-zinc-300 font-light text-lg">
              Rediseñando el envase icónico. Renderizado fotorrealista para
              capturar refracciones exactas y reflejar la esencia de la marca.
            </p>
          </div>
        </section>

        <section className="min-h-[80vh] flex flex-col justify-end items-center pb-24 px-6 md:px-16 pointer-events-none text-center">
          <div className="max-w-2xl bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl pointer-events-auto">
            <span className="text-white font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              // Detalles
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-[#e00024] leading-none">
              ACABADOS PUESTOS A PRUEBA.
            </h2>
            <p className="text-zinc-300 font-light text-lg">
              Iluminación procesada con HDRIs cinemáticos. Los materiales PBR
              exponen las micro-imperfecciones del aluminio para un realismo
              crudo.
            </p>
          </div>
        </section>

        <section className="min-h-[80vh] flex flex-col justify-end items-center pb-24 px-6 md:px-16 pointer-events-none text-center">
          <div className="max-w-2xl bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl pointer-events-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white leading-none">
              SIMBOLO <span className="text-[#e00024]">GLOBAL.</span>
            </h2>
            <p className="text-zinc-300 font-light text-lg">
              Una transición de lo clásico a lo digital interactivo. La lata se
              convierte en el espectador.
            </p>
          </div>
        </section>
      </div>

      {/* NUEVA SECCIÓN DETALLADA BASADA EN EL BOCETO */}
      <section className="relative z-20 bg-[#0a0a0a] text-white pb-32 shadow-[0_-20px_50px_rgba(0,0,0,1)] rounded-t-[3rem] overflow-hidden border-t border-white/10">
        {/* --- Hero Section Logos --- */}
        <div className="pt-24 px-6 md:px-16 lg:px-24 mx-auto max-w-7xl flex flex-col items-center text-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="border border-white/20 px-6 py-2 rounded-full">
              <span className="text-zinc-400 font-mono text-sm tracking-[0.2em] uppercase">
                Logo Juegos
              </span>
            </div>
            <img
              src="/coca_cola/logo_juegos_olimpicos.webp"
              alt="Juegos Olímpicos"
              className="w-32 md:w-48 object-contain mix-blend-screen opacity-90"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6 mt-8"
          >
            <img
              src="/coca_cola/logo_coca_cola.webp"
              alt="Coca Cola"
              className="w-56 md:w-80 object-contain drop-shadow-[0_0_15px_rgba(224,0,36,0.5)]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 border border-[#e00024]/50 rounded-full px-8 py-3 bg-[#e00024]/10 backdrop-blur-sm"
          >
            <span className="text-white tracking-[0.3em] font-mono text-sm md:text-base uppercase font-light drop-shadow-md">
              Rediseño, Edición Limitada
            </span>
          </motion.div>
        </div>

        {/* --- Slider de Latas Horizontal --- */}
        <div className="mt-32 py-16 flex flex-col items-center relative bg-gradient-to-b from-transparent via-white/5 to-transparent border-y border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,0,36,0.08),transparent_70%)] pointer-events-none" />
          <span className="text-zinc-500 font-mono text-xs tracking-[0.4em] uppercase mb-12 relative z-10">
            Latas
          </span>

          <div className="w-full flex relative">
            <style>{`
              @keyframes scroll-horizontal {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
              }
              .animate-scroll-infinite {
                animation: scroll-horizontal 40s linear infinite;
                will-change: transform;
              }
            `}</style>
            <div className="flex gap-16 md:gap-32 whitespace-nowrap items-center shrink-0 pr-16 md:pr-32 animate-scroll-infinite">
              {[
                "coca_cola_negra.webp",
                "coca_cola_roja.webp",
                "coca_cola_amarilla.webp",
                "coca_cola_azul.webp",
                "coca_cola_verde.webp",
                "coca_cola_negra.webp",
                "coca_cola_roja.webp",
                "coca_cola_amarilla.webp",
                "coca_cola_azul.webp",
                "coca_cola_verde.webp",
              ].map((can, i) => (
                <img
                  key={`marquee1-${i}`}
                  src={`/coca_cola/${can}`}
                  alt={can.replace(".webp", "").replace(/_/g, " ")}
                  className="w-24 md:w-48 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer will-change-transform"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="flex gap-16 md:gap-32 whitespace-nowrap items-center shrink-0 pr-16 md:pr-32 animate-scroll-infinite">
              {[
                "coca_cola_negra.webp",
                "coca_cola_roja.webp",
                "coca_cola_amarilla.webp",
                "coca_cola_azul.webp",
                "coca_cola_verde.webp",
                "coca_cola_negra.webp",
                "coca_cola_roja.webp",
                "coca_cola_amarilla.webp",
                "coca_cola_azul.webp",
                "coca_cola_verde.webp",
              ].map((can, i) => (
                <img
                  key={`marquee2-${i}`}
                  src={`/coca_cola/${can}`}
                  alt={can.replace(".webp", "").replace(/_/g, " ")}
                  className="w-24 md:w-48 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer will-change-transform"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <p className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase mt-8 relative z-10 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-zinc-600" />
            Se mueven en horizontal
            <span className="w-8 h-[1px] bg-zinc-600" />
          </p>
        </div>

        {/* --- Text Box section --- */}
        <div className="mt-24 px-6 md:px-16 lg:px-24 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl relative"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e00024] rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#e00024] rounded-br-3xl" />

            <p className="text-lg md:text-2xl font-light text-zinc-300 leading-relaxed drop-shadow-sm">
              Rediseño de la etiqueta de Coca-Cola para una edición limitada
              para celebrar los Juegos Olímpicos, uno de los eventos más
              importantes a nivel mundial.
            </p>
          </motion.div>
        </div>

        {/* --- Gallery (Proyecto - Staggered Grid) --- */}
        <GallerySection />
      </section>
    </div>
  );
}

function GallerySection() {
  const images = [
    "/coca_cola/galery_a.webp",
    "/coca_cola/galery_b.webp",
    "/coca_cola/galer_c.webp",
    "/coca_cola/galery_d.webp",
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="mt-40 px-6 md:px-16 lg:px-24 mx-auto max-w-7xl pb-16">
      <div className="mb-16 border border-white/20 inline-block px-8 py-3 rounded-sm bg-white/5 relative group">
        <div className="absolute inset-y-0 left-0 w-1 bg-[#e00024] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />
        <h3 className="text-sm md:text-lg font-mono tracking-[0.3em] uppercase text-zinc-300 group-hover:text-white transition-colors">
          Proyecto
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={`rounded-xl overflow-hidden cursor-zoom-in relative bg-[#0f0f0f] border border-white/5 shadow-2xl group ${
              i % 2 !== 0 ? "md:mt-32" : ""
            }`}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => setSelectedIndex(i)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[#e00024]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            <motion.img
              src={img}
              alt={`Foto ${i + 1}`}
              className="w-full h-auto object-cover relative z-0"
              loading="lazy"
              animate={{
                scale: hoveredIndex === i ? 1.05 : 1,
                opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.3 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            {/* Foto Label inside image (optional nice touch mirroring sketch) */}
            <div className="absolute bottom-6 left-6 z-20">
              <span className="text-white/50 font-mono text-sm tracking-widest uppercase mix-blend-difference">
                Foto {i + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Parallax Scroll Arrow Indicating Vertical Scroll Direction like in sketch */}
      <motion.div
        className="fixed right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 text-zinc-500/50 pointer-events-none z-50 will-change-transform"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <span className="font-mono tracking-widest text-xs rotate-90 origin-left translate-x-3 mb-6">
          Scroll
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#e00024] to-transparent animate-pulse" />
      </motion.div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050000] flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={images[selectedIndex]}
              className="max-w-full max-h-full object-contain rounded-lg border border-white/10"
              onClick={(e) => {
                e.stopPropagation();
                // Avanzar en galería
                setSelectedIndex((prev) => (prev + 1) % images.length);
              }}
            />
            <p className="absolute bottom-8 text-white/50 text-xs font-mono tracking-widest uppercase text-center flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/20" />
              Click en imagen para siguiente • Click fuera para cerrar
              <span className="w-8 h-[1px] bg-white/20" />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
