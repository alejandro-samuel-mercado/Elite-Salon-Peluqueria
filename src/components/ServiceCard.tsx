"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Timer } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  price: string;
  time: string;
  desc: string;
  category: string;
  items: string[];
  premium?: boolean;
}

export default function ServiceCard({
  title,
  price,
  time,
  desc,
  category,
  items,
  premium,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-6 md:p-12 bg-white border border-black/5 rounded-[3rem] transition-all duration-700 flex flex-col h-full group hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.06)] ${premium ? "border-[#c5a059]/30" : ""}`}
    >
      <div className="mb-6 md:mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#c5a059] mb-4 block italic">
          {category}
        </span>
        <h3 className="text-3xl md:text-5xl font-bold luxury-title text-[#0a0a0a] leading-none italic">
          {title}
        </h3>
      </div>

      <p className="text-[#0a0a0a]/60 text-base md:text-lg font-medium italic leading-relaxed mb-10 border-l-2 border-[#c5a059]/20 pl-6">
        {desc}
      </p>

      <ul className="space-y-4 mb-8 md:mb-14 flex-grow">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-4 text-[12px] font-bold text-[#0a0a0a]/80 uppercase tracking-widest"
          >
            <CheckCircle2 className="text-[#c5a059] w-5 h-5 flex-shrink-0" />{" "}
            {item}
          </li>
        ))}
      </ul>

      <div className="pt-10 border-t border-black/5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-2 italic">
            <Timer size={12} className="text-[#c5a059]" /> Sesión de {time}
          </span>
          <span className="text-4xl font-bold text-[#0a0a0a] tracking-tighter">
            {price}
          </span>
        </div>
        <Link
          href={`/reservas?service=${encodeURIComponent(title)}`}
          className="w-16 h-16 bg-[#0a0a0a] text-white flex items-center justify-center rounded-2xl group-hover:bg-[#c5a059] group-hover:text-[#0a0a0a] transition-all duration-500 shadow-xl"
        >
          <ArrowUpRight size={24} />
        </Link>
      </div>
    </motion.div>
  );
}
