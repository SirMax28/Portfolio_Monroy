import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Galería", href: "#galeria" },
    { name: "About", href: "#about" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/5 px-6 md:px-16 lg:px-24 py-5 flex items-center justify-between transition-all duration-300"
    >
      {/* Brand / Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-white font-black tracking-tighter text-xl cursor-pointer"
      >
        MONROY<span className="text-red-500">.</span>
      </motion.div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((link, index) => (
          <li key={index}>
            <motion.a
              href={link.href}
              whileHover={{ y: -2, color: "#fff" }}
              className="text-zinc-500 text-xs font-mono tracking-[0.2em] uppercase transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-red-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu indicator (Minimal) */}
      <div className="md:hidden flex flex-col gap-1.5 cursor-pointer group">
        <div className="w-6 h-[1px] bg-zinc-400 group-hover:bg-white transition-colors" />
        <div className="w-4 h-[1px] bg-zinc-400 group-hover:bg-red-500 group-hover:w-6 transition-all self-end" />
      </div>
    </motion.nav>
  );
}
