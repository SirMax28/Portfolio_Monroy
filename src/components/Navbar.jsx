import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Inicio", href: "inicio" },
    { name: "Sobre mí", href: "about-me" },
    { name: "Proyectos", href: "proyectos" },
    { name: "Contacto", href: "contacto" },
  ];

  // Scroll Spy logic
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -60% 0px", // Ajuste para considerar 'activo' un elemento cuando cruza casi la mitad de la pantalla
      },
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar al pasar la 3ra sección aprox (2.5 veces la altura de la pantalla es buen medidor o unos 2000px)
      if (window.scrollY > window.innerHeight * 1.8) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para navegación manejando las páginas anidadas vs la de inicio
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      // Un pequeño retraso para permitir que la vista Home cargue antes de hacer scroll
      setTimeout(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-[60] bg-black/10 backdrop-blur-md border-b border-white/5 px-6 md:px-16 lg:px-24 py-5 flex items-center justify-between transition-all duration-300"
      >
        {/* Brand / Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleNavClick(e, "inicio")}
          className="text-white font-black tracking-tighter text-xl cursor-pointer relative z-[70]"
        >
          MONROY<span className="text-red-500">.</span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => {
            const isActive =
              activeSection === link.href && location.pathname === "/";
            return (
              <li key={index}>
                <motion.a
                  href={`/#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  whileHover={{ y: -2, color: "#fff" }}
                  className={`text-xs font-mono tracking-[0.2em] uppercase transition-colors duration-300 relative group cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-2 left-0 h-[1px] bg-red-500 transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </motion.a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu indicator (Minimal) */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer group relative z-[70] p-2"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="w-6 h-[1px] bg-zinc-400 group-hover:bg-white transition-colors origin-center"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-4 h-[1px] bg-zinc-400 group-hover:bg-red-500 group-hover:w-6 transition-all self-end"
          />
          <motion.div
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
              width: isOpen ? 24 : 0,
              opacity: isOpen ? 1 : 0,
            }}
            className="h-[1px] bg-zinc-400 group-hover:bg-white transition-colors origin-center opacity-0"
          />
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-[#070000] flex flex-col items-center justify-center"
          >
            {/* Ambient Background in menu */}
            <div className="absolute top-[10%] right-[-20%] w-[80vw] h-[80vw] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

            <ul className="flex flex-col items-center gap-12 relative z-10">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <a
                    href={`/#${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-4xl font-black tracking-tighter text-white hover:text-red-500 transition-colors uppercase"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to top button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[50] w-12 h-12 bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer group shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg
              className="w-5 h-5 text-zinc-400 group-hover:text-red-500 group-hover:-translate-y-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
