"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#fafafa]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074"
          className="w-full h-full object-cover opacity-70 "
          alt="Salon Background"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#fafafa]/60 to-[#fafafa]" />
      </div>

      <div className="relative z-10 container mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-7xl md:text-[9rem] font-bold luxury-title leading-[0.9] text-[#0a0a0a] mb-12">
            REVELA TU <br />{" "}
            <span className="italic font-light">VERDADERO SER.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-[#0a0a0a]/70 font-medium italic mb-16 leading-relaxed">
            Un refugio de elegancia y cuidado integral en el centro de San
            Salvador de Jujuy. Expertos en diseño capilar, estética facial y
            cuidado de manos.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              onClick={() => (window.location.href = "/reservas")}
              className="px-14 py-6 bg-[#0a0a0a] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#c5a059] transition-all shadow-xl"
            >
              RESERVAR AHORA
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("servicios")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-14 py-6 border border-[#0a0a0a]/20 text-[#0a0a0a] font-bold uppercase tracking-widest text-xs hover:bg-[#0a0a0a] hover:text-white transition-all"
            >
              VER SERVICIOS
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
