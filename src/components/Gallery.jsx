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
      id="proyectos"
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
              // Mis favoritos
            </p>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
              PROYECTOS.
            </h2>
          </motion.div>
        </div>

        <motion.div
          style={{ y }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => {
            // Make the 4th item (Más proyectos) stand out distinctive
            const isMoreProjects = project.id === "mas-proyectos";

            // Apply different heights based on index to recreate the masonry feel somewhat
            const isSecondColumn = index % 2 !== 0;
            let height = isSecondColumn
              ? "h-[80vw] md:h-[40rem]"
              : "h-[80vw] md:h-[30rem]";

            if (isMoreProjects) {
              height = "h-[40vw] md:h-[14rem]"; // Un rectángulo notablmente más pequeño
            }

            const targetUrl =
              project.id === "coca-cola"
                ? "/coca-cola"
                : project.id === "juan-valdez"
                  ? "/juan-valdez"
                  : project.id === "charlie-chocolate"
                    ? "/charlie-chocolate"
                    : project.id === "mas-proyectos"
                      ? "/mas-proyectos"
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
                className={`relative w-full ${height} group overflow-hidden bg-white/5 rounded-3xl break-inside-avoid flex flex-col ${isSecondColumn ? "md:mt-24" : ""} ${isMoreProjects ? "ring-2 ring-purple-500/30 hover:ring-purple-500/80" : ""}`}
              >
                <Link to={targetUrl} className="absolute inset-0 z-30">
                  {isMoreProjects && (
                    <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-300 text-[10px] uppercase font-mono px-3 py-1 rounded-full border border-purple-500/30 backdrop-blur-sm animate-pulse">
                      Explorar Mix
                    </div>
                  )}
                </Link>

                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  {project.image ? (
                    <motion.div
                      className="w-full h-[120%] -top-[10%]"
                      style={{
                        y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
                        position: "absolute",
                      }}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover origin-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </motion.div>
                  ) : (
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
                  )}
                </div>

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none z-10" />

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1] z-20 pointer-events-none flex flex-col justify-end">
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
