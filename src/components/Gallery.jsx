import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "../projectsData";

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="galeria"
      ref={containerRef}
      className="relative z-10 w-full bg-[#070000] py-20 md:py-32 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 h-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-red-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">
              // Selected Archives
            </p>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
              GALERÍA.
            </h2>
          </motion.div>
        </div>

        <motion.div
          style={{ y }}
          className="columns-1 md:columns-2 gap-8 space-y-8"
        >
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            const height = isEven
              ? "h-[80vw] md:h-[30rem]"
              : "h-[100vw] md:h-[40rem]";

            const targetUrl =
              project.id === "coca-cola"
                ? "/coca-cola"
                : `/project/${project.id}`;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative w-full ${height} group overflow-hidden bg-white/5 rounded-3xl break-inside-avoid flex flex-col`}
              >
                <Link to={targetUrl} className="absolute inset-0 z-20" />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black w-full h-full origin-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at center, ${project.themeColor || "#ef4444"}20, transparent 70%)`,
                    }}
                  />
                </motion.div>

                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1] z-10 pointer-events-none flex flex-col justify-end">
                  <div
                    className="w-12 h-[1px] mb-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 delay-100"
                    style={{ backgroundColor: project.themeColor || "#ef4444" }}
                  />
                  <p className="text-zinc-300 font-mono text-xs tracking-widest uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
