import React, { Suspense, useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  RoundedBox,
} from "@react-three/drei";
import { Link } from "react-router-dom";

// Abstract 3D shape instead of Coca Cola Can
function AbstractShape({ scrollYProgress }) {
  const group = useRef();

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0.5, Math.PI * 2]);

  const scaleAnim = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0.9, 1.2, 0.7, 0.3],
  );
  const posY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, -1, 1, 3]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = rotateY.get();
      group.current.rotation.x = rotateX.get();
      const s = scaleAnim.get();
      group.current.scale.set(s, s, s);
      group.current.position.y = posY.get();
    }
  });

  return (
    <group ref={group}>
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <torusKnotGeometry args={[1, 0.3, 200, 32]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.8}
            roughness={0.2}
            distort={0.4}
            speed={2}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function MoreProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-[#0a0014] font-sans selection:bg-purple-500/50 relative overflow-hidden text-white">
      {/* Back to Home Link */}
      <div className="fixed top-8 left-6 md:left-16 lg:left-24 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors uppercase font-mono text-xs tracking-widest group"
        >
          <div className="w-8 h-[1px] bg-zinc-600 group-hover:bg-[#8b5cf6] transition-colors group-hover:-translate-x-2 transform duration-300" />
          Volver al inicio
        </Link>
      </div>

      {/* Fixed 3D Scene Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none z-0" />
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <Environment preset="city" />
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
              color="#8b5cf6"
            />
            <AbstractShape scrollYProgress={scrollYProgress} />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating Intro text similar to Coca Cola */}
      <div className="relative z-10 w-full pt-[20vh]">
        <section className="min-h-[80vh] flex flex-col items-center justify-start text-center pointer-events-none">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mix-blend-difference mb-4 drop-shadow-2xl">
            MÁS PROYECTOS
          </h1>
          <p className="text-purple-300 tracking-[0.4em] font-mono text-xs uppercase animate-pulse drop-shadow-md">
            Explora otros estilos
          </p>
        </section>

        <section className="min-h-[80vh] flex flex-col justify-center items-center pb-24 px-6 md:px-16 pointer-events-none text-center">
          <div className="max-w-3xl bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl pointer-events-auto">
            <span className="text-[#8b5cf6] font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              // Diversidad Visual
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white leading-none">
              EXPERIMENTOS <span className="text-[#8b5cf6]">& ARTE.</span>
            </h2>
            <p className="text-zinc-300 font-light text-lg">
              Un recorrido a través de distintas disciplinas donde el arte
              secuencial, el realismo extremo y la creatividad sin barreras
              convergen.
            </p>
          </div>
        </section>
      </div>

      {/* Content Sections */}
      <section className="relative z-20 bg-[#050505] text-white pt-24 pb-32 mb-10 shadow-[0_-20px_50px_rgba(0,0,0,1)] rounded-t-[3rem] border-t border-white/5">
        {/* COMIC SECTION */}
        <div className="px-6 md:px-16 lg:px-24 mx-auto max-w-7xl mb-32">
          <div className="mb-12 border border-white/10 inline-block px-6 py-2 rounded-full bg-white/5">
            <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-zinc-300">
              <span className="text-[#8b5cf6]">01.</span> Cómic & Narrativa
              Visual
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl md:text-5xl font-bold mb-6">
                Arte Secuencial.
              </h4>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Desarrollo visual para narrativa gráfica. Diseño de páginas que
                enfocan la tensión y el dinamismo de los personajes dentro de la
                viñeta, usando contrastes de blanco, negro y color selectivo.
              </p>
            </div>
            <div
              className="relative w-full aspect-[3/4] md:aspect-auto md:h-[650px] group cursor-pointer perspective"
              style={{ perspective: "2000px" }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Back Page (pag_2.webp) */}
              <motion.div
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}portfolio_extras/comic/pag_2.webp`}
                  alt="Página de Comic 2"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {!isFlipped && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-all duration-700" />
                )}
              </motion.div>

              {/* Front Page (pag_1.webp) that flips */}
              <motion.div
                className="absolute inset-0 w-full h-full origin-left z-20"
                animate={{
                  rotateY: isFlipped ? -160 : 0,
                  opacity: isFlipped ? 0 : 1,
                }}
                transition={{
                  rotateY: { duration: 1.2, ease: [0.645, 0.045, 0.355, 1] },
                  opacity: {
                    duration: 0.8,
                    delay: isFlipped ? 0.3 : 0,
                    ease: "easeIn",
                  },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 w-full h-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-transparent">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={`${import.meta.env.BASE_URL}portfolio_extras/comic/pag_1.webp`}
                      alt="Página de Comic 1"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Folded Corner Effect - positioned exactly over the corner */}
                  <div className="absolute bottom-0 right-0 w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] pointer-events-none group-hover:scale-125 transition-[transform,width,height] duration-500 origin-bottom-right z-30">
                    {/* Fake section background to mock a cut corner (covering the real image's rounded border too) */}
                    <div
                      className="absolute bottom-[-2px] right-[-2px] w-[150%] h-[150%] bg-[#050505]"
                      style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                    />
                    {/* The flap folding outwards */}
                    <div
                      className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#e0e0e0] to-[#ffffff]"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 0 100%)",
                        filter: "drop-shadow(-10px -10px 15px rgba(0,0,0,0.6))",
                      }}
                    />
                  </div>

                  {/* Indicator to click */}
                  <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 z-40 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#050505] font-bold bg-white/70 px-4 py-2 rounded-full backdrop-blur-md pointer-events-none animate-pulse shadow-lg">
                    Click para abrir
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* HIPERREALISMO SECTION */}
        <div className="px-6 md:px-16 lg:px-24 mx-auto max-w-7xl mb-32">
          <div className="mb-12 border border-white/10 inline-block px-6 py-2 rounded-full bg-white/5">
            <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-zinc-300">
              <span className="text-[#8b5cf6]">02.</span> Hiperrealismo Extremo
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              Pinturas y texturas que intentan imitar la fotografía de la forma
              más cercana posible, capturando brillos, reflejos en los ojos y el
              desgaste de la piel o plumas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "caballo_hiperrealista.webp",
              "gato_hiperrealista.webp",
              "gato_naranja_hiperrealista.webp",
              "pato_hiperrealista.webp",
            ].map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group rounded-2xl overflow-hidden border border-white/10 bg-black aspect-square cursor-zoom-in"
                onClick={() =>
                  setSelectedImage(`${import.meta.env.BASE_URL}portfolio_extras/hiperrealista/${img}`)
                }
              >
                <img
                  src={`${import.meta.env.BASE_URL}portfolio_extras/hiperrealista/${img}`}
                  alt={img.replace(".webp", "").replace(/_/g, " ")}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8b5cf6]">
                    {img.split("_")[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EXTRA SECTION 1: PROTOTIPADOS ABTRACTOS */}
        <div className="px-6 md:px-16 lg:px-24 mx-auto max-w-7xl mb-32 border-t border-white/10 pt-32 relative">
          <div className="absolute top-0 right-1/4 w-[1px] h-32 bg-gradient-to-b from-[#8b5cf6] to-transparent" />
          <div className="mb-12 border border-white/10 inline-block px-6 py-2 rounded-full bg-white/5">
            <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-zinc-300">
              <span className="text-[#8b5cf6]">03.</span> Prototipos Visuales
            </h3>
          </div>

          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <div className="flex-1">
              <h4 className="text-3xl md:text-5xl font-bold mb-6">
                El Proceso Creativo.
              </h4>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Antes de llegar al resultado final, hay decenas de bocetos,
                moodboards y exploraciones de color. El error y la iteración son
                las bases fundamentales de un diseño robusto.
              </p>
            </div>
            <div className="flex-1 min-h-[300px] border border-white/10 rounded-2xl bg-white/5 relative overflow-hidden flex items-center justify-center p-8 text-center group">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none group-hover:opacity-40 transition-opacity" />
              <p className="text-[#8b5cf6] text-xl font-light uppercase tracking-[0.3em] font-mono mix-blend-screen drop-shadow-md">
                WORK IN PROGRESS
              </p>
            </div>
          </div>
        </div>

        {/* EXTRA SECTION 2: TIPOGRAFÍA EXPERIMENTAL */}
        <div className="px-6 md:px-16 lg:px-24 mx-auto max-w-7xl">
          <div className="mb-12 border border-white/10 inline-block px-6 py-2 rounded-full bg-white/5">
            <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-zinc-300">
              <span className="text-[#8b5cf6]">04.</span> Tipografía Variable
            </h3>
          </div>

          <div className="w-full bg-[#0a0a0a] rounded-3xl p-12 md:p-24 border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute -left-1/4 top-1/4 w-96 h-96 bg-[#8b5cf6] blur-[150px] opacity-20 mix-blend-screen rounded-full" />
            <h4 className="text-[10vw] font-black leading-none tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-[#8b5cf6]">
              ABCXYZ
            </h4>
            <p className="text-zinc-500 font-mono text-sm tracking-widest max-w-lg mt-8 border-t border-white/10 pt-8">
              Búsqueda de la legibilidad en entornos no convencionales. Formatos
              fluidos y geometría pura.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox / Modal for High-Res Images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-zoom-out backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-lg border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Evita que se cierre si clickean en la imagen misma accidentalmente, pero si quieres puede cerrarlo tambien
            />
            <p className="absolute bottom-8 text-white/50 text-xs font-mono tracking-widest uppercase text-center flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/20" />
              Click en el fondo para cerrar
              <span className="w-8 h-[1px] bg-white/20" />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
