"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Menu, Scissors, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Nosotros", path: "/sobre-nosotros" },
    { name: "Blog", path: "/blog" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav
      className={`fixed w-full z-[1000] transition-all duration-700 ${isScrolled ? "bg-white/95 backdrop-blur-xl py-4 shadow-sm border-b border-black/5" : "bg-transparent py-10"}`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-5 group relative">
          <div className="relative p-3 bg-brand-obsidian rounded-2xl shadow-xl transition-transform group-hover:rotate-12">
            <Scissors className="text-brand-gold w-8 h-8" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-gold rounded-full border-2 border-brand-obsidian" />
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold luxury-title tracking-tighter uppercase leading-none text-brand-obsidian">
              ELITE<span className="text-brand-gold italic">SALÓN</span>
            </span>
            <span className="text-[10px] font-black tracking-[0.5em] text-brand-gray uppercase mt-1">
              Jujuy Estética Pro
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-obsidian/70 hover:text-brand-gold transition-colors italic relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/reservas"
            className="ml-8 px-10 py-4 bg-brand-obsidian text-white font-bold text-[10px] tracking-widest hover:bg-brand-gold hover:text-brand-obsidian transition-all shadow-2xl flex items-center gap-3"
          >
            <Calendar size={14} /> AGENDAR CITA
          </Link>
        </div>

        <button
          className="lg:hidden text-brand-obsidian p-3 bg-white/50 rounded-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-brand-cream z-[999] flex flex-col items-center justify-center gap-10 p-12"
          >
            <button
              className="absolute top-10 right-10 p-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={44} />
            </button>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-6xl font-bold luxury-title italic text-brand-obsidian hover:text-brand-gold transition-all"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/reservas"
              onClick={() => setIsMenuOpen(false)}
              className="mt-10 px-12 py-6 bg-brand-obsidian text-white font-bold text-lg italic tracking-widest"
            >
              RESERVAR AHORA
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
