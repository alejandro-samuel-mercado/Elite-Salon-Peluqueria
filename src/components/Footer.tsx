"use client";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Scissors,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-4 mb-10">
            <Scissors className="text-gold-soft w-8 h-8" />
            <span className="text-4xl font-bold italic uppercase tracking-tighter">
              Elite<span className="text-gold-soft">Salon</span>
            </span>
          </div>
          <p className="text-xl text-gray-500 font-medium italic uppercase tracking-widest leading-relaxed max-w-lg">
            Elevamos los estándares de belleza en Jujuy. Tu mejor versión
            comienza aquí.
          </p>
        </div>

        <div>
          <h4 className="text-gold-soft font-bold uppercase tracking-[0.4em] text-xs mb-10">
            Contáctanos
          </h4>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-gray-400 group cursor-pointer hover:text-white transition-all">
              <MapPin size={20} className="text-gold-soft" />{" "}
              <span className="text-sm">Centro, Jujuy, Argentina</span>
            </li>
            <li className="flex items-center gap-4 text-gray-400 group cursor-pointer hover:text-white transition-all">
              <Phone size={20} className="text-gold-soft" />{" "}
              <span className="text-sm">+54 3883118692</span>
            </li>
            <li className="flex items-center gap-4 text-gray-400 group cursor-pointer hover:text-white transition-all">
              <Mail size={20} className="text-gold-soft" />{" "}
              <span className="text-sm">salon.principal@elitesalon.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold-soft font-bold uppercase tracking-[0.4em] text-xs mb-10">
            Síguenos
          </h4>
          <div className="flex gap-6">
            <button className="p-4 bg-white/5 rounded-2xl hover:bg-gold-soft hover:text-black transition-all">
              <Instagram size={24} />
            </button>
            <button className="p-4 bg-white/5 rounded-2xl hover:bg-gold-soft hover:text-black transition-all">
              <Facebook size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 text-center">
        <p className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.5em]">
          © 2026 ELITE SALON - JUJUY - HECHO POR UNIXXTECH
        </p>
      </div>
    </footer>
  );
}
