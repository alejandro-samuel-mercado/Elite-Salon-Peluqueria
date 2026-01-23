"use client";
import { motion } from "framer-motion";
import { Calendar as CalIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function BookingCalendar() {
  const [selected, setSelected] = useState(21);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h4 className="text-4xl font-bold luxury-title italic text-black flex items-center gap-4 uppercase">
            <CalIcon className="text-[#c5a059]" size={32} /> Enero 2026
          </h4>
          <p className="text-[11px] font-black text-zinc-900 uppercase tracking-[0.4em] mt-2 italic">
            Disponibilidad en Tiempo Real // Jujuy
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-gray-900 p-4  rounded-2xl hover:bg-black text-white transition-all border-2 border-black shadow-sm">
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          <button className="p-4 bg-gray-900 rounded-2xl hover:bg-black text-white transition-all border-2 border-black shadow-sm">
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {weekDays.map((d) => (
          <span
            key={d}
            className="text-center text-sm font-black text-black mb-6 tracking-widest"
          >
            {d}
          </span>
        ))}
        {days.map((d) => (
          <motion.button
            key={d}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(d)}
            className={`aspect-square rounded-2xl flex items-center justify-center font-black text-2xl transition-all border-2 ${
              selected === d
                ? "bg-black text-white border-black shadow-2xl"
                : "bg-white border-zinc-200 hover:border-[#c5a059] text-black"
            }`}
          >
            {d}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
