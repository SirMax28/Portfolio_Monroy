import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    name: "INSTAGRAM",
    url: "https://www.instagram.com/mar.monroy__/",
    handle: "@mar.monroy__",
    image: `${import.meta.env.BASE_URL}portfolio_extras/social/instragram_background.webp`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-zinc-400 group-hover:text-red-500 transition-colors duration-500 shrink-0"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: "TIKTOK",
    url: "https://www.tiktok.com/@e.art.gogh",
    handle: "@e.art.gogh",
    image: `${import.meta.env.BASE_URL}portfolio_extras/social/tiktok_background.webp`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-zinc-400 group-hover:text-red-500 transition-colors duration-500 shrink-0"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "ETSY SHOP",
    url: "https://www.etsy.com/es/shop/eartgogh",
    handle: "eartgogh",
    image: `${import.meta.env.BASE_URL}portfolio_extras/social/shop_background.webp`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-zinc-400 group-hover:text-red-500 transition-colors duration-500 shrink-0"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    ),
  },
];

export default function SocialLinks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center bg-[#070000] overflow-hidden py-24 md:py-32">
      {/* Background Images */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key={hoveredIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            {/* Overlay to darken image heavily so text is super readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070000] via-[#070000]/60 to-[#070000] z-10" />
            <img
              src={links[hoveredIndex].image}
              alt={links[hoveredIndex].name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
        <div className="flex flex-col mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-red-500" />
            <p className="text-red-500 font-mono tracking-[0.3em] uppercase text-xs">
              Conecta conmigo
            </p>
          </div>
          <h3 className="text-3xl md:text-5xl font-light text-zinc-400 max-w-2xl leading-tight">
            ¿Te gustó lo que viste? <br />
            <span className="text-white font-medium">
              Sígueme o compra mi arte.
            </span>
          </h3>
        </div>

        <div
          className="flex flex-col w-full"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(i)}
              className="group relative border-t border-zinc-800/50 last:border-b py-8 md:py-12 flex items-center justify-between overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div className="z-10 flex items-center gap-4 sm:gap-6 pr-8">
                {link.icon}
                <div className="flex flex-col justify-center">
                  <motion.h2
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-600 uppercase tracking-tighter shrink-0 pb-1 pr-4"
                    animate={{
                      x:
                        hoveredIndex === i
                          ? typeof window !== "undefined" &&
                            window.innerWidth > 768
                            ? 40
                            : 10
                          : 0,
                      opacity:
                        hoveredIndex === null || hoveredIndex === i ? 1 : 0.2,
                      scale: hoveredIndex === i ? 0.95 : 1,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      textShadow: "0 10px 30px rgba(0,0,0,0.5)",
                      transformOrigin: "left center",
                    }}
                  >
                    {link.name}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0,
                      height: hoveredIndex === i ? "auto" : 0,
                      y: hoveredIndex === i ? 0 : -10,
                      x:
                        hoveredIndex === i
                          ? typeof window !== "undefined" &&
                            window.innerWidth > 768
                            ? 40
                            : 10
                          : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-red-500 font-mono tracking-[0.2em] text-xs sm:text-sm mt-1 uppercase font-medium">
                      {link.handle}
                    </p>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-transparent border border-zinc-600 group-hover:border-red-500 text-zinc-600 group-hover:text-black group-hover:bg-red-500 transition-all duration-500 transform -translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 z-10"
                initial={false}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </motion.div>

              {/* Mobile Arrow (Always visible slightly faded, full opacity on touch/hover) */}
              <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full border border-zinc-800 text-zinc-500 group-active:border-red-500 group-active:text-red-500 transition-colors z-10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
