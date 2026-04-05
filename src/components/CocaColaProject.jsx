import React, { Suspense, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

      {/* ELIMINADO EL ESPACIO KILOMÉTRICO: Entra a continuación de la última sección de forma directa */}
      <section className="relative z-20 bg-[#050000] pb-32 pt-24 px-6 md:px-16 lg:px-24 shadow-[0_-20px_50px_rgba(0,0,0,1)] border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter">
            EL PROCESO CREATIVO.
          </h3>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
            Más allá de la animación introductoria, este proyecto involucró
            esculpido digital iterativo, optimización de topología y cocinado de
            mapas de normales (baking) para asegurar que un elemento tan
            familiar como una lata de Coca-Cola se sintiera absolutamente
            tangible directamente en el navegador. Las próximas iteraciones
            incluirán variaciones de temperatura y condensación dinámica.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5 shadow-lg">
              <h4 className="text-xl font-bold text-white mb-2">Modelado</h4>
              <p className="text-zinc-500 text-sm">Maya & Blender</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5 shadow-lg">
              <h4 className="text-xl font-bold text-white mb-2">Texturizado</h4>
              <p className="text-zinc-500 text-sm">Substance Painter</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5 shadow-lg">
              <h4 className="text-xl font-bold text-white mb-2">
                Implementación
              </h4>
              <p className="text-zinc-500 text-sm">R3F & Framer Motion</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
