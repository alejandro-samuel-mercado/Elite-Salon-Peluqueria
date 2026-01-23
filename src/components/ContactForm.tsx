"use client";
import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-gray-900 p-12 max-md:pt-13 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border-2 border-zinc-100 relative overflow-hidden max-md:px-6">
      {sent ? (
        <div className="text-center py-20 flex flex-col items-center">
          <CheckCircle size={80} className="text-green-600 mb-8" />
          <h3 className="text-5xl font-bold luxury-title text-[#050505] mb-4 uppercase">
            Recibido
          </h3>
          <p className="text-zinc-600 font-bold uppercase tracking-widest text-[11px] mb-12">
            Nos contactaremos contigo pronto.
          </p>
          <button
            onClick={() => setSent(false)}
            className="px-10 py-5 bg-[#050505] text-white font-bold uppercase tracking-widest text-[10px]"
          >
            VOLVER
          </button>
        </div>
      ) : (
        <form
          className="space-y-12"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <h3 className="text-5xl font-bold luxury-title text-white leading-none mb-14 uppercase italic tracking-tighter">
            Envíanos un <br /> <span className="text-[#c5a059]">Mensaje.</span>
          </h3>

          <div className="space-y-4 border-b-2 border-zinc-200 pb-6 focus-within:border-[#c5a059] transition-all">
            <label className="text-[11px] font-bold uppercase tracking-[0.4em] text-white">
              Tu Nombre
            </label>
            <input
              required
              type="text"
              placeholder="Escribe aquí..."
              className="w-full  outline-none font-bold text-2xl bg-gray-800 text-zinc-300  opacity-30 focus:opacity-100 focus:text-white italic"
            />
          </div>

          <div className="space-y-4 border-b-2 border-zinc-200 pb-6 focus-within:border-[#c5a059] transition-all">
            <label className="text-[11px] font-bold uppercase tracking-[0.4em] text-white">
              E-mail de Contacto
            </label>
            <input
              required
              type="email"
              placeholder="ejemplo@correo.com"
              className="w-full  outline-none font-bold text-2xl italic bg-gray-800 text-zinc-300  opacity-30 focus:opacity-100 focus:text-white"
            />
          </div>

          <div className="space-y-4 border-b-2 border-zinc-200 pb-6 focus-within:border-[#c5a059] transition-all">
            <label className="text-[11px] font-bold uppercase tracking-[0.4em] text-white">
              Consulta o Servicio
            </label>
            <textarea
              required
              rows={2}
              placeholder="¿Qué tratamiento buscas?"
              className="w-full  outline-none font-bold text-2xl bg-gray-800 text-zinc-300 focus:opacity-100 focus:text-white italic resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-8 bg-[#050505] text-white font-bold uppercase tracking-[0.4em] text-[10px] italic flex items-center justify-center gap-6 hover:bg-[#c5a059] transition-all shadow-2xl"
          >
            ENVIAR CONSULTA <Send size={18} strokeWidth={3} />
          </button>
        </form>
      )}
    </div>
  );
}
