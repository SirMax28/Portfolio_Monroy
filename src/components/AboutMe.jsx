import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const skills = [
  "Identidad visual y corporativa",
  "Diseño de logotipos",
  "Branding",
  "Diseño editorial y maquetación",
  "Cartelería",
  "Diseño para páginas web y apps",
  "Contenido visual para redes sociales",
  "Edición de vídeo",
  "Diseño de packaging",
];

const softwares = [
  { name: "Adobe Photoshop", percent: 75, color: "#31A8FF", icon: "Ps" },
  { name: "Adobe Illustrator", percent: 90, color: "#FF9A00", icon: "Ai" },
  { name: "Adobe InDesign", percent: 95, color: "#FF3366", icon: "Id" },
  { name: "Adobe Premiere", percent: 50, color: "#9999FF", icon: "Pr" },
  { name: "Procreate", percent: 100, color: "#FFFFFF", icon: "Pr" },
  { name: "Clip Studio Paint", percent: 30, color: "#00C3FF", icon: "Cs" },
  { name: "Canva", percent: 80, color: "#00C4CC", icon: "Cv" },
  { name: "CapCut", percent: 90, color: "#FFFFFF", icon: "Cc" },
  { name: "FontLab", percent: 35, color: "#FFEB3B", icon: "Fl" },
];

const SoftwareIcon = ({ item }) => {
  // Generamos un icono en base a SVG
  let iconContent = null;

  if (
    item.name.includes("Adobe") ||
    item.name === "Procreate" ||
    item.name === "Clip Studio Paint" ||
    item.name === "Canva" ||
    item.name === "CapCut" ||
    item.name === "FontLab"
  ) {
    iconContent = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="4"
          fill={item.color}
          fillOpacity="0.15"
          stroke={item.color}
          strokeWidth="1.5"
        />
        <text
          x="12"
          y="16.5"
          fontSize="10"
          fontWeight="800"
          fill={item.color}
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          letterSpacing="-0.5"
        >
          {item.icon}
        </text>
      </svg>
    );
  }

  return (
    <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center relative">
      {iconContent}
    </div>
  );
};

const TypingText = ({ text, finalColor = "#ffffff" }) => {
  return (
    <span className="inline-flex items-center relative whitespace-nowrap">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            filter: "blur(12px)",
            color: "#ef4444",
            y: 20,
            scale: 1.5,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            color: finalColor,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
            type: "spring",
            stiffness: 150,
            damping: 12,
          }}
          className="inline-block"
          style={{ textShadow: `0 0 15px ${finalColor}60` }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-[0.4em] h-[0.9em] bg-red-500 ml-2 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
      />
    </span>
  );
};

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      id="about-me"
      className="relative z-10 w-full min-h-screen bg-zinc-950 px-6 md:px-16 lg:px-24 flex flex-col justify-center border-t border-white/5 py-24 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[30vw] h-[30vw] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        {/* Left Column: Bio & Intro */}
        <div className="lg:col-span-6 flex flex-col">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] bg-red-500 mb-8 origin-left max-w-xs"
          />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12 flex items-center">
            <span className="mr-4">
              <TypingText text="Sobre mí" finalColor="#ffffff" />
            </span>
          </h2>

          <motion.div
            className="text-zinc-300 font-light text-lg md:text-xl leading-relaxed space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              Soy <span className="text-white font-medium">Mar Monroy</span>,
              diseñadora gráfica especializada en identidad visual, branding e
              ilustración.
            </motion.p>
            <motion.p variants={itemVariants} className="text-zinc-400">
              Cuento con formación en serigrafía artística, grabado
              calcográfico, ilustración y gráfica publicitaria, lo que me
              permite abordar proyectos desde una base visual sólida y versátil.
            </motion.p>
          </motion.div>

          <div className="mt-16">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-2 text-white"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              <TypingText text="Habilidades_" finalColor="#ef4444" />
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-500 text-sm mb-6 max-w-md"
            >
              Trabajo en el desarrollo de proyectos gráficos enfocados a
              comunicación visual, como:
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="px-4 py-2 border border-white/5 bg-white/5 rounded-full text-xs md:text-sm text-zinc-300 hover:bg-red-500/10 hover:border-red-500/30 transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Column: Softwares & Percentages */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className="w-full bg-[#0a0505] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden group/card"
          >
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/card:opacity-100 z-0"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    600px circle at ${mouseX}px ${mouseY}px,
                    rgba(239, 68, 68, 0.1),
                    transparent 80%
                  )
                `,
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20 z-0" />

            <h3 className="font-bold text-white mb-10 flex items-center gap-3 relative z-10 tracking-[0.2em] text-sm uppercase">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
              DOMINIO TÉCNICO
            </h3>

            <div className="space-y-6 relative z-10">
              {softwares.map((sw, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: "easeOut",
                    scale: { duration: 0.2 },
                    x: { duration: 0.2 },
                  }}
                  className="group flex flex-col gap-2 cursor-crosshair"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <SoftwareIcon item={sw} />
                      <span className="text-zinc-300 font-medium tracking-wide text-sm md:text-base group-hover:text-white transition-colors">
                        {sw.name}
                      </span>
                    </div>
                    <span className="text-xs md:text-sm font-mono text-zinc-500 tabular-nums">
                      {sw.percent}%
                    </span>
                  </div>

                  {/* Barra de progreso */}
                  <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${sw.percent}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 40,
                      }}
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{
                        backgroundColor: sw.color,
                        boxShadow: `0 0 10px ${sw.color}80`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
