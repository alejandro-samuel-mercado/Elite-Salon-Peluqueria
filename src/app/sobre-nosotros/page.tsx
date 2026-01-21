"use client";
import AboutHero from "@/components/AboutHero";
import LottieAnim from "@/components/LottieAnim";
import Marquee from "@/components/Marquee";
import { Heart, ShieldCheck, Sparkles, Star } from "lucide-react";

export default function SobreNosotros() {
  const pilares = [
    {
      t: "Excelencia Técnica",
      d: "Formación continua en las capitales de la moda para traer lo mejor a Jujuy.",
      i: <ShieldCheck size={32} />,
    },
    {
      t: "Salud Capilar",
      d: "Priorizamos la integridad molecular de tu cabello con productos orgánicos.",
      i: <Sparkles size={32} />,
    },
    {
      t: "Atención Humana",
      d: "Cada cliente en San Salvador es un nexo único para nuestro equipo.",
      i: <Heart size={32} />,
    },
  ];

  return (
    <div className="bg-brand-cream min-h-screen">
      <AboutHero />
      <Marquee />
      <LottieAnim />

      <section className="py-48 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="flex justify-center gap-2 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="text-brand-gold fill-brand-gold"
              />
            ))}
          </div>
          <h2 className="text-8xl font-bold luxury-title italic text-brand-obsidian leading-none mb-12 tracking-tighter uppercase">
            ÚNETE A LA <br />{" "}
            <span className="text-brand-gold">DISTINCIÓN.</span>
          </h2>
          <p className="text-3xl text-brand-obsidian/40 font-bold italic luxury-title leading-relaxed mb-20 max-w-2xl mx-auto uppercase tracking-tighter">
            Tu transformación te espera en el salón más exclusivo de Jujuy.
            Asegura tu lugar en nuestra agenda hoy.
          </p>
          <button
            onClick={() => (window.location.href = "/reservas")}
            className="px-16 py-8 bg-brand-obsidian text-white font-bold italic tracking-widest uppercase text-xs hover:bg-brand-gold hover:text-brand-obsidian transition-all shadow-2xl"
          >
            AGENDAR EXPERIENCIA ELITE
          </button>
        </div>
      </section>
    </div>
  );
}
