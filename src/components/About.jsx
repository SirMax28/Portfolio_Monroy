import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  const words = "Creando identidad de marca.".split(" ");

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
          <div className="flex gap-4">
            <Link to="/kindrop">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 1, type: "spring" }}
                className="mt-16 w-16 h-16 rounded-full border border-red-500/20 flex items-center justify-center text-red-500 hover:bg-red-500/10 cursor-alias transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </motion.div>
            </Link>

            <Link to="/focus">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 1.2, type: "spring" }}
                className="mt-16 w-16 h-16 rounded-full border border-blue-500/20 flex items-center justify-center text-blue-500 hover:bg-blue-500/10 cursor-alias transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
