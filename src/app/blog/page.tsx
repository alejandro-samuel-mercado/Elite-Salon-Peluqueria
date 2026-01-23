import BlogSection from "@/components/BlogSection";
import { Sparkles } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="bg-brand-cream min-h-screen ">
      <header className="relative pt-32 md:pt-50 pb-0 px-4 md:px-8 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-10 animate-reveal">
            <Sparkles className="text-brand-gold w-4 h-4" />
            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.6em] italic">
              Elite Editorial 2026
            </span>
          </div>

          <h1 className="text-6xl md:text-[15vw] font-bold luxury-title text-brand-obsidian leading-none tracking-tighter italic mb-12 md:mb-24 opacity-5 absolute top-20 left-1/2 -translate-x-1/2 select-none w-full text-center">
            DATA_LOGS
          </h1>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-[10rem] font-bold luxury-title text-brand-obsidian leading-[0.9] md:leading-[0.8] mb-8 md:mb-14 tracking-tighter">
              CRÓNICAS <br />{" "}
              <span className="text-brand-gold">DE ESTILO.</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-3xl text-brand-obsidian/40 font-medium italic leading-relaxed luxury-title uppercase tracking-tighter">
              Explora la intersección entre la ciencia capilar, la estética de
              lujo y las tendencias globales aplicadas en nuestro nodo de Jujuy.
            </p>
          </div>
        </div>
      </header>
      <BlogSection />

      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative group overflow-hidden rounded-[3rem] md:rounded-[4rem] border border-black/5 shadow-2xl aspect-[3/4] lg:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200"
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              alt="Art of styling"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-obsidian via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.8em] italic block mb-2">
                Visión de Autor
              </span>
              <p className="text-xl md:text-3xl text-white font-bold luxury-title italic">
                "La belleza es el <br /> resultado de la salud."
              </p>
            </div>
          </div>
          <div>
            <span className="text-brand-gold font-bold uppercase tracking-[1em] text-[10px] mb-8 block italic">
              Nuestro Propósito Editorial
            </span>
            <h3 className="text-4xl md:text-6xl font-bold luxury-title text-brand-obsidian italic mb-8 md:mb-10 leading-none uppercase">
              LA CIENCIA <br /> DETRÁS DE{" "}
              <span className="text-brand-gold">TU LOOK.</span>
            </h3>
            <p className="text-xl text-brand-obsidian/50 italic leading-relaxed mb-12 font-medium">
              Cada artículo publicado en nuestra terminal es validado por
              nuestros especialistas en San Salvador de Jujuy para garantizar
              que recibas información veraz sobre biotecnología capilar y
              colorimetría profesional.
            </p>
            <div className="grid grid-cols-2 gap-10 max-md:gap-2">
              <div className="p-8 bg-brand-cream rounded-3xl border border-black/5">
                <p className="text-4xl max-md:text-2xl font-bold luxury-title text-brand-gold mb-2 italic">
                  100%
                </p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Información Verificada
                </p>
              </div>
              <div className="p-8 bg-brand-cream rounded-3xl border border-black/5">
                <p className="text-4xl max-md:text-2xl  font-bold luxury-title text-brand-gold mb-2 italic">
                  Semanal
                </p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Nuevas Crónicas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
