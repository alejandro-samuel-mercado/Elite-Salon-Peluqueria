"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, MapPin, MessageCircle, Plus } from "lucide-react";
import { useState } from "react";

export default function HubFloatingButtons() {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      icon: MessageCircle,
      color: "bg-[#25D366]",
      label: "WHATSAPP",
      link: "https://wa.me/543883118692",
    },
    {
      icon: Instagram,
      color: "bg-linear-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
      label: "INSTAGRAM",
      link: "https://www.instagram.com/elitesalon_jujuy",
    },
    {
      icon: MapPin,
      color: "bg-[#EA4335]",
      label: "UBICACIÓN",
      link: "https://maps.google.com/?q=Elite+Salon+Jujuy",
    },
  ];

  return (
    <div className="fixed bottom-12 right-12 z-[1000] flex flex-col items-end gap-6">
      <AnimatePresence>
        {open && (
          <div className="flex flex-col gap-6 mb-6">
            {actions.map((act, i) => {
              const IconComponent = act.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.2 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    y: 40,
                    scale: 0.2,
                    transition: { delay: (actions.length - i) * 0.05 },
                  }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="flex items-center gap-6 group"
                >
                  <span className="bg-black/90 backdrop-blur-2xl px-6 py-3 rounded-2xl text-[10px] font-black text-white uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all border border-white/10 shadow-2xl translate-x-10 group-hover:translate-x-0">
                    {act.label}
                  </span>
                  <button
                    onClick={() => window.open(act.link, "_blank")}
                    className={`p-6 ${act.color} text-white rounded-[2rem] shadow-2xl hover:scale-110 active:scale-90 transition-all duration-500 border border-white/20`}
                  >
                    {/* Renderizamos el componente directamente con sus props */}
                    <IconComponent size={25} strokeWidth={3} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className={`p-10 rounded-[2.8rem] shadow-2xl transition-all duration-700 relative overflow-hidden active:scale-90 ${
          open ? "bg-zinc-800 rotate-45 text-white" : "bg-black text-[#c5a059]"
        }`}
      >
        <Plus size={28} strokeWidth={4} />
      </button>
    </div>
  );
}
