import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  // No mostrar en la página principal
  if (location.pathname === "/") return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] text-zinc-400 py-12 px-6 md:px-16 lg:px-24 border-t border-white/5 relative z-[100]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Nombre y Título */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <span className="text-white font-serif italic text-xl tracking-wide font-light">
            Marta Monroy Mejías
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-500/80">
            Portfolio de Arte y Diseño
          </span>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-8">
          <a
            href="https://www.instagram.com/mar.monroy__/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@e.art.gogh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          <a
            href="https://www.etsy.com/es/shop/eartgogh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="Etsy"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </a>
        </div>

        {/* Derechos de autor */}
        <div className="text-center md:text-right">
          <p className="text-xs font-mono text-zinc-600 tracking-wider">
            &copy; {currentYear} Marta Monroy. <br className="md:hidden" />
            Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
