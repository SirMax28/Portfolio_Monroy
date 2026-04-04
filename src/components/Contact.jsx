import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const brandName = "MONROY".split("");

  return (
    <section className="relative z-10 w-full min-h-screen bg-[#070000] px-6 md:px-16 lg:px-24 py-32 flex flex-col justify-between overflow-hidden">
      {/* Background Volumetric Heat */}
      <div className="absolute bottom-[-10%] right-[-20%] w-[80vw] h-[80vw] bg-red-600/10 blur-[180px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-rose-800/10 blur-[200px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left: Contact Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center"
        >
          <div className="w-16 h-[2px] bg-red-500 mb-8" />
          <h2 className="text-6xl md:text-[6rem] font-black text-white tracking-tighter leading-none mb-12">
            INICIAR <br />
            <span className="text-zinc-500 hover:text-white transition-colors duration-500 cursor-default">
              PROYECTO.
            </span>
          </h2>
          <p className="text-zinc-400 font-mono text-sm tracking-widest uppercase mb-16">
            Colaboraciones // Comisiones // Contacto
          </p>
        </motion.div>

        {/* Right: Minimal Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center space-y-12"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Input Group */}
          <div className="relative group">
            <input
              type="text"
              id="name"
              required
              className="w-full bg-transparent border-b border-white/20 text-white font-light text-xl md:text-2xl pb-4 focus:outline-none focus:border-red-500 transition-colors duration-500 peer placeholder-transparent"
              placeholder="Tu Nombre"
            />
            <label
              htmlFor="name"
              className="absolute left-0 top-0 text-zinc-500 font-light text-xl md:text-2xl transition-all duration-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-red-500 peer-focus:font-mono peer-focus:tracking-widest uppercase peer-valid:-top-6 peer-valid:text-xs peer-valid:text-zinc-400 peer-valid:font-mono peer-valid:tracking-widest"
            >
              01 // Tu Nombre
            </label>
          </div>

          <div className="relative group">
            <input
              type="email"
              id="email"
              required
              className="w-full bg-transparent border-b border-white/20 text-white font-light text-xl md:text-2xl pb-4 focus:outline-none focus:border-red-500 transition-colors duration-500 peer placeholder-transparent"
              placeholder="Tu Email"
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-0 text-zinc-500 font-light text-xl md:text-2xl transition-all duration-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-red-500 peer-focus:font-mono peer-focus:tracking-widest uppercase peer-valid:-top-6 peer-valid:text-xs peer-valid:text-zinc-400 peer-valid:font-mono peer-valid:tracking-widest"
            >
              02 // Tu Email
            </label>
          </div>

          <div className="relative group">
            <textarea
              id="message"
              required
              rows="3"
              className="w-full bg-transparent border-b border-white/20 text-white font-light text-xl md:text-2xl pb-4 focus:outline-none focus:border-red-500 transition-colors duration-500 peer placeholder-transparent resize-none"
              placeholder="El Mensaje"
            />
            <label
              htmlFor="message"
              className="absolute left-0 top-0 text-zinc-500 font-light text-xl md:text-2xl transition-all duration-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-red-500 peer-focus:font-mono peer-focus:tracking-widest uppercase peer-valid:-top-6 peer-valid:text-xs peer-valid:text-zinc-400 peer-valid:font-mono peer-valid:tracking-widest"
            >
              03 // El Mensaje
            </label>
          </div>

          {/* Magnetic/Extravagant Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start mt-8 relative overflow-hidden group rounded-full border border-white/20 hover:border-red-500/50 bg-black/20 backdrop-blur-md px-12 py-5 transition-all duration-500 ease-out"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-rose-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="absolute left-[-10%] bottom-[-50%] w-0 h-full bg-red-600/30 blur-[20px] rounded-full group-hover:w-[120%] transition-all duration-700 ease-out" />
            <span className="relative z-10 text-white font-mono tracking-[0.2em] text-sm group-hover:text-white transition-colors duration-300">
              ENVIAR TRANSMISIÓN
            </span>
          </motion.button>
        </motion.form>
      </div>

      {/* Massive Footer Typography */}
      <div className="mt-32 w-full text-center overflow-hidden flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-[12vw] font-black tracking-tighter leading-none select-none flex items-center justify-center cursor-default py-8 px-4 w-full"
        >
          {/* Reactive Letters Container */}
          <div className="flex justify-center items-center group">
            {brandName.map((char, i) => (
              <span
                key={i}
                className="text-white/5 transition-all duration-300 ease-out hover:text-white hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] hover:scale-110 px-1"
              >
                {char}
              </span>
            ))}
          </div>
        </motion.div>
        <p className="text-zinc-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-8">
          © {new Date().getFullYear()} // Todos los derechos reservados
        </p>
      </div>
    </section>
  );
}
