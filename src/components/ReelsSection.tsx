"use client";
import { motion } from "framer-motion";
import { Eye, Heart, MessageSquare } from "lucide-react";

export default function ReelsSection() {
  const reels = [
    {
      url: "/assets/video1.mp4",
      likes: "1.2k",
      comments: "45",
      views: "8k",
    },
    {
      url: "/assets/video2.mp4",
      likes: "2.4k",
      comments: "128",
      views: "15k",
    },
    {
      url: "/assets/video3.mp4",
      likes: "950",
      comments: "32",
      views: "5k",
    },
  ];

  return (
    <section className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="text-[11px] font-black text-[#c5a059] uppercase tracking-[0.8em] mb-6 block italic">
            Instagram Feed // Jujuy
          </span>
          {/* Texto del encabezado en blanco puro para que se vea perfectamente */}
          <h2 className="text-7xl md:text-9xl font-black luxury-title italic uppercase tracking-tighter text-white">
            NUESTROS <span className="text-[#c5a059]">REELS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reels.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -20 }}
              className="relative aspect-[9/16] rounded-[4rem] overflow-hidden group border-2 border-white/10 shadow-2xl bg-zinc-900"
            >
              {/* Atributos corregidos: autoPlay, muted, loop y playsInline son vitales */}
              <video
                src={item.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105"
              />

              {/* Capa de degradado para asegurar la lectura de los textos inferiores */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-12 left-10 right-10">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#c5a059] p-0.5 shadow-lg">
                      <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center text-[10px] font-black text-[#c5a059]">
                        ES
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-black uppercase tracking-widest text-white leading-none">
                        EliteSalon_Jujuy
                      </span>
                      <span className="text-[9px] font-bold text-[#c5a059] uppercase tracking-tighter mt-1">
                        San Salvador de Jujuy
                      </span>
                    </div>
                  </div>
                  <button className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#c5a059] transition-all">
                    Seguir
                  </button>
                </div>

                {/* Iconos y números en blanco puro con mayor peso */}
                <div className="flex gap-10 text-white">
                  <span className="flex items-center gap-3 text-sm font-black italic">
                    <Heart
                      size={20}
                      className="text-[#c5a059] fill-[#c5a059]"
                    />{" "}
                    {item.likes}
                  </span>
                  <span className="flex items-center gap-3 text-sm font-black italic">
                    <MessageSquare
                      size={20}
                      className="text-white fill-white/20"
                    />{" "}
                    {item.comments}
                  </span>
                  <span className="flex items-center gap-3 text-sm font-black italic">
                    <Eye size={20} className="text-white" /> {item.views}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
