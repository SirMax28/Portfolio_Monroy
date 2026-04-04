import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const letters = "DESIGN IS ART IN MOVEMENT.".split("");

  return (
    <section className="relative z-10 w-full min-h-[90vh] bg-zinc-950 px-6 md:px-16 lg:px-24 flex items-center border-t border-white/5 overflow-hidden">
      {/* Dark Subtle Ambient */}
      <div className="absolute top-[20%] left-[-20%] w-[50vw] h-[50vw] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10 py-32">
        {/* Left Column: Huge typography */}
        <div className="lg:col-span-7 flex flex-col justify-center relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-[2px] bg-red-500 mb-12 origin-left"
          />
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] uppercase">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block ${letter === " " ? "w-4 md:w-8" : ""}`}
              >
                {letter}
              </motion.span>
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
            Mi enfoque en la disciplina combina una{" "}
            <span className="text-zinc-100 font-medium">
              pasión obsesiva por la estética{" "}
            </span>
            con tecnología de vanguardia. Creo experiencias que desdibujan la
            línea entre el arte abstracto, el cine y las interfaces funcionales.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-500 text-base font-light leading-relaxed"
          >
            Nacido en lo digital. Destinado a empujar las fronteras del diseño
            frontend de alto rendimiento.
          </motion.p>

          {/* Aesthetic Detail */}
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
        </div>
      </div>
    </section>
  );
}
