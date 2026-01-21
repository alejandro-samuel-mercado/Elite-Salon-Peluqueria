"use client";
import { Droplet, Heart, Scissors, Sparkles, Star } from "lucide-react";

export default function Marquee() {
  const items = [
    { name: "CORTES DE AUTOR", icon: <Scissors size={32} /> },
    { name: "COLORIMETRÍA PRO", icon: <Sparkles size={32} /> },
    { name: "NAIL ARCHITECTURE", icon: <Star size={32} /> },
    { name: "MAKEUP SOCIAL HD", icon: <Heart size={32} /> },
    { name: "SALUD CAPILAR BIO", icon: <Droplet size={32} /> },
  ];

  return (
    <div className="py-14 bg-brand-gold overflow-hidden border-y-4 border-brand-obsidian relative z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-24 pr-24">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-10">
                <span className="text-5xl font-black text-brand-obsidian italic uppercase tracking-tighter">
                  {item.name}
                </span>
                <div className="text-brand-obsidian scale-125">{item.icon}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
