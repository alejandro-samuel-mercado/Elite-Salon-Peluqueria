"use client";
import { motion } from "framer-motion";
import { Award, MapPin, Sparkles, Users } from "lucide-react";

export default function AboutHero() {
  const stats = [
    {
      icon: <Award className="text-brand-gold" size={28} />,
      label: "Años de Trayectoria",
      value: "10+",
    },
    {
      icon: <Users className="text-brand-gold" size={28} />,
      label: "Clientes Felices",
      value: "5K+",
    },
    {
      icon: <MapPin className="text-brand-gold" size={28} />,
      label: "Ubicación Central",
      value: "Jujuy",
    },
    {
      icon: <Sparkles className="text-brand-gold" size={28} />,
      label: "Especialidades",
      value: "25+",
    },
  ];

  return (
    <section className="relative pt-64 pb-32 px-8 overflow-hidden bg-brand-cream">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] font-bold text-brand-gold uppercase tracking-[1em] mb-8 block italic">
                Nuestra Filosofía Estética
              </span>
              <h1 className="text-8xl md:text-[10rem] font-bold luxury-title italic text-brand-obsidian leading-[0.8] mb-14 tracking-tighter">
                MAESTRÍA <br />{" "}
                <span className="text-brand-gold">Y VISIÓN.</span>
              </h1>
              <p className="text-2xl text-brand-obsidian/60 font-medium italic leading-relaxed max-w-2xl mb-20">
                Desde nuestro nodo central en San Salvador de Jujuy, hemos
                redefinido el concepto de peluquería boutique. Combinamos el
                rigor técnico con la sensibilidad artística para ofrecer
                resultados de clase mundial a nuestra comunidad local.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-black/5">
                {stats.map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 group">
                    <div className="group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-brand-obsidian luxury-title">
                        {item.value}
                      </p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 italic">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[5rem] overflow-hidden border-2 border-black/5 shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1000"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                alt="Interior de Elite Salón"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-obsidian/40 via-transparent to-transparent opacity-60" />
            </motion.div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-brand-gold/5 blur-[120px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
