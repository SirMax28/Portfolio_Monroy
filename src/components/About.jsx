import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  const words = "Creando identidad de marca.".split(" ");
  const [hasHoveredProjects, setHasHoveredProjects] = useState(false);

  return (
    <section
      id="about"
      className="relative z-10 w-full min-h-[90vh] bg-zinc-950 px-6 md:px-16 lg:px-24 flex items-center border-t border-white/5 overflow-hidden"
    >
      {/* Dark Subtle Ambient */}
      <div className="absolute top-[20%] left-[-20%] w-[50vw] h-[50vw] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10 py-20 md:py-32">
        {/* Left Column: Huge typography */}
        <div className="lg:col-span-7 flex flex-col justify-center relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-[2px] bg-red-500 mb-12 origin-left"
          />
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] uppercase flex flex-wrap gap-x-3 md:gap-x-4 lg:gap-x-6 gap-y-2">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="flex">
                {word.split("").map((letter, letterIndex) => {
                  const index = wordIndex * 10 + letterIndex;
                  return (
                    <motion.span
                      key={letterIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.03,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h2>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-5 flex flex-col justify-end pb-8">
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-8"
          >
            Mi enfoque parte siempre del{" "}
            <span className="text-zinc-100 font-medium">concepto</span>. Cada
            decisión desde el naming hasta el diseño del logotipo, los símbolos
            o los elementos gráficos responde a una intención concreta. Busco
            que cada parte tenga un sentido claro dentro del conjunto, evitando
            soluciones arbitrarias o puramente estéticas.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-500 text-base sm:text-lg font-light leading-relaxed"
          >
            Me interesa desarrollar identidades que funcionen como sistemas,
            donde todos los elementos se relacionan entre sí y construyen una
            narrativa visual coherente. Creo que es en esa coherencia donde una
            marca empieza a adquirir personalidad y reconocimiento.
          </motion.p>

          {/* Aesthetic Detail Links */}
          <div className="flex flex-wrap gap-4 mt-24 pb-6">
            {/* FOCUS: Verde */}
            <div className="relative">
              {/* Llamada a la acción (Tooltip) visible hasta el primer hover */}
              {!hasHoveredProjects && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className="absolute -top-12 left-8 -translate-x-1/2 flex flex-col items-center animate-bounce pointer-events-none z-20"
                >
                  <div className="bg-green-500 text-black px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase shadow-[0_0_15px_rgba(34,197,94,0.5)] whitespace-nowrap">
                    ¡Pasa el cursor!
                  </div>
                  <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-transparent border-t-green-500 mt-[-1px]"></div>
                </motion.div>
              )}

              <Link
                to="/focus"
                className="group block"
                onMouseEnter={() => setHasHoveredProjects(true)}
                onTouchStart={() => setHasHoveredProjects(true)}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: 1, type: "spring" }}
                  className="relative h-16 w-16 group-hover:w-[175px] group-hover:px-6 rounded-full border border-green-500/30 flex items-center justify-start px-5 text-green-500 bg-green-500/10 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] cursor-alias transition-all duration-500 ease-out overflow-hidden"
                >
                  {/* Animación "Ping" no interactiva */}
                  <div className="absolute inset-0 rounded-full border border-green-500/50 animate-ping opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-300"></div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="group-hover:rotate-90 transition-transform duration-500 flex-shrink-0"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  <span className="opacity-0 group-hover:opacity-100 ml-3 transition-opacity duration-500 delay-100 ease-out whitespace-nowrap font-bold text-sm tracking-widest uppercase">
                    Ver Focus
                  </span>
                </motion.div>
              </Link>
            </div>

            {/* KINDROP: Amarillo */}
            <Link to="/kindrop" className="group">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 1.2, type: "spring" }}
                className="relative h-16 w-16 group-hover:w-[190px] group-hover:px-6 rounded-full border border-yellow-400/30 flex items-center justify-start px-5 text-yellow-400 bg-yellow-400/10 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] cursor-alias transition-all duration-500 ease-out overflow-hidden"
              >
                <div
                  className="absolute inset-0 rounded-full border border-yellow-400/50 animate-ping opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:rotate-90 transition-transform duration-500 flex-shrink-0"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span className="opacity-0 group-hover:opacity-100 ml-3 transition-opacity duration-500 delay-100 ease-out whitespace-nowrap font-bold text-sm tracking-widest uppercase">
                  Ver KinDrop
                </span>
              </motion.div>
            </Link>

            {/* HAICAS: Azul claro */}
            <Link to="/haicas" className="group">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 1.4, type: "spring" }}
                className="relative h-16 w-16 group-hover:w-[180px] group-hover:px-6 rounded-full border border-cyan-400/30 flex items-center justify-start px-5 text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] cursor-alias transition-all duration-500 ease-out overflow-hidden"
              >
                <div
                  className="absolute inset-0 rounded-full border border-cyan-400/50 animate-ping opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:rotate-90 transition-transform duration-500 flex-shrink-0"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span className="opacity-0 group-hover:opacity-100 ml-3 transition-opacity duration-500 delay-100 ease-out whitespace-nowrap font-bold text-sm tracking-widest uppercase">
                  Ver Haicas
                </span>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
