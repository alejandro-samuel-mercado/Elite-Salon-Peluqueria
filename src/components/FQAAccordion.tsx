"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Info, Minus, Plus, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

export default function FQAAccordion() {
  const [active, setActive] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿QUÉ PRODUCTOS UTILIZAN EN EL TRATAMIENTO?",
      a: "Utilizamos exclusivamente nuestra línea boutique de síntesis botánica y pigmentos moleculares de grado profesional. Son productos 100% libres de amoníaco y testeados para la salud capilar a largo plazo.",
      icon: <ShieldCheck size={20} />,
    },
    {
      q: "¿CUÁNTO DURA EL TRATAMIENTO DE BOTOX?",
      a: "Dependiendo del cuidado posterior y la porosidad de tu cabello, los resultados se mantienen vibrantes de 3 a 5 meses. Recomendamos usar nuestra línea de mantenimiento en casa.",
      icon: <Zap size={20} />,
    },
    {
      q: "¿ES NECESARIA UNA CONSULTA PREVIA PARA TINTES?",
      a: "Sí, para técnicas avanzadas como Balayage o Colorimetría Élite, preferimos una evaluación diagnóstica de 15 minutos para asegurar que el resultado sea matemáticamente perfecto según tu fisionomía.",
      icon: <Info size={20} />,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-28 px-8">
      <div className="text-center mb-24">
        <span className="text-[11px] font-bold text-brand-gold uppercase tracking-[1em] block mb-6 italic">
          Soporte al Cliente
        </span>
        <h2 className="text-7xl font-bold luxury-title text-brand-obsidian italic">
          Consultas Frecuentes.
        </h2>
      </div>

      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div
            key={i}
            className={`rounded-[2.5rem] border transition-all duration-700 overflow-hidden ${active === i ? "bg-white border-brand-gold shadow-2xl" : "bg-transparent border-black/5 hover:border-black/20"}`}
          >
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="w-full p-12 flex justify-between items-center text-left"
            >
              <div className="flex items-center gap-10">
                <div
                  className={`p-4 rounded-2xl transition-all duration-500 ${active === i ? "bg-brand-gold text-white" : "bg-black/5 text-brand-gold"}`}
                >
                  {f.icon}
                </div>
                <span className="text-2xl font-bold luxury-title text-brand-obsidian">
                  {f.q}
                </span>
              </div>
              <div
                className={`transition-transform duration-700 ${active === i ? "rotate-180 text-brand-gold" : "text-gray-300"}`}
              >
                {active === i ? <Minus size={32} /> : <Plus size={32} />}
              </div>
            </button>
            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="px-12 pb-12 ml-20 max-w-3xl text-xl text-brand-obsidian/50 italic leading-relaxed font-medium">
                    {f.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
