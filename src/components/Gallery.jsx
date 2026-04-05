import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Sustancia",
    category: "Digital Art",
    height: "h-[80vw] md:h-[30rem]",
  },
  {
    id: 2,
    title: "Etereo",
    category: "3D Motion",
    height: "h-[100vw] md:h-[40rem]",
  },
  {
    id: 3,
    title: "Vacío",
    category: "Concept",
    height: "h-[70vw] md:h-[25rem]",
  },
  {
    id: 4,
    title: "Ritmo",
    category: "Interactive",
    height: "h-[90vw] md:h-[35rem]",
  },
  {
    id: 5,
    title: "Caos",
    category: "Installation",
    height: "h-[110vw] md:h-[45rem]",
  },
  {
    id: 6,
    title: "Luz",
    category: "Photography",
    height: "h-[80vw] md:h-[30rem]",
  },
];

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax subtle global movement
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

        {/* Asymmetric Masonry Grid */}
        <motion.div
          style={{ y }}
          className="columns-1 md:columns-2 gap-8 space-y-8"
        >
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
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
                className={`relative w-full ${project.height} group overflow-hidden bg-white/5 rounded-3xl cursor-pointer break-inside-avoid`}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="absolute inset-0 z-20"
                />

                {/* Image Placeholder with Parallax Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black w-full h-full origin-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>

                {/* Overlays and Text */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1]">
                  <div className="w-12 h-[1px] bg-red-500 mb-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 delay-100" />
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
