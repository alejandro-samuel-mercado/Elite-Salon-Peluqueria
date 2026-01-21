"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bookmark, Clock, Filter } from "lucide-react";
import { useState } from "react";

export default function BlogSection() {
  const [filter, setFilter] = useState("TODOS");

  const categories = [
    "TODOS",
    "TENDENCIAS",
    "SALUD CAPILAR",
    "ESTÉTICA",
    "CIENCIA",
  ];

  const posts = [
    {
      id: 1,
      cat: "TENDENCIAS",
      date: "21 ENE",
      title: "EL REGRESO DEL CORTE DE AUTOR EN JUJUY",
      desc: "Exploramos por qué la personalización fisionómica está desplazando a los cortes genéricos este 2026.",
      img: "https://images.unsplash.com/photo-1560066984-138dadb4c035",
    },
    {
      id: 2,
      cat: "SALUD CAPILAR",
      date: "18 ENE",
      title: "BÓTOX VS QUERATINA: ¿CUÁL NECESITAS?",
      desc: "Un análisis profundo sobre la reconstrucción molecular y cuándo es el momento ideal para cada tratamiento.",
      img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
    },
    {
      id: 3,
      cat: "CIENCIA",
      date: "15 ENE",
      title: "PIGMENTOS BIO-ORGÁNICOS Y SU IMPACTO",
      desc: "La tecnología detrás de nuestra nueva línea de colorimetría que respeta la integridad del ADN capilar.",
      img: "https://images.unsplash.com/photo-1562322140-8baeececf3df",
    },
    {
      id: 4,
      cat: "ESTÉTICA",
      date: "12 ENE",
      title: "MAKEUP HD: LA CLAVE PARA EVENTOS",
      desc: "Secretos de fijación y acabado para que tu maquillaje social resista el clima de San Salvador de Jujuy.",
      img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486",
    },
    {
      id: 5,
      cat: "TENDENCIAS",
      date: "10 ENE",
      title: "UÑAS ESCULPIDAS: DISEÑOS MINIMALISTAS",
      desc: "La arquitectura de manos se inclina hacia tonos neutros y acabados mate para esta temporada de verano.",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    },
    {
      id: 6,
      cat: "SALUD CAPILAR",
      date: "08 ENE",
      title: "HIDRATACIÓN IÓNICA: CIENCIA APLICADA",
      desc: "Cómo los iones negativos ayudan a cerrar la cutícula y devolver el brillo natural al cabello castigado.",
      img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
    },
  ];

  const filteredPosts =
    filter === "TODOS" ? posts : posts.filter((p) => p.cat === filter);

  return (
    <section className="py-15 px-8  ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-10">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 md:pb-0 ">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-widest transition-all border ${filter === c ? "bg-brand-obsidian text-white border-transparent shadow-xl" : "bg-white text-brand-obsidian/40 border-black/5 hover:border-brand-gold"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-brand-gold italic">
            <Filter size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Filtrar Editorial
            </span>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-white rounded-[3.5rem] border border-black/5 overflow-hidden mb-10 relative shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img
                    src={`${post.img}?q=80&w=1000`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    alt={post.title}
                  />
                  <div className="absolute top-10 left-10 flex gap-2">
                    <span className="px-4 py-1.5 bg-brand-gold text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg italic">
                      {post.cat}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-brand-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-12 flex flex-col justify-end">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-obsidian shadow-2xl translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                      <ArrowUpRight size={28} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                  <Clock size={12} className="text-brand-gold" /> {post.date} //
                  2026
                  <Bookmark size={12} className="ml-auto" />
                </div>
                <h3 className="text-4xl font-bold luxury-title text-brand-obsidian leading-none mb-6 group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-brand-obsidian/50 text-lg font-medium italic leading-relaxed line-clamp-2">
                  {post.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
