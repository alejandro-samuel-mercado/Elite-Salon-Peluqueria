"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
      ArrowRight,
      CheckCircle2,
      Clock,
      Droplet,
      MapPin,
      Phone,
      Scissors,
      Sparkles,
      Star,
      User,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import BookingCalendar from "./BookingCalendar";

function ReservContent() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [clientData, setClientData] = useState({ name: "", phone: "" });
  const [confirmed, setConfirmed] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");
    if (serviceFromUrl) setSelectedService(serviceFromUrl);
  }, [searchParams]);

  const services = [
    { id: "corte", n: "Corte & Peinado", i: <Scissors size={20} /> },
    { id: "color", n: "Tintes & Alisados", i: <Sparkles size={20} /> },
    { id: "tratamiento", n: "Botox Capilar", i: <Droplet size={20} /> },
    { id: "unas", n: "Manicura & Pedicura", i: <Star size={20} /> },
  ];

  const slots = ["09:00", "10:30", "12:00", "15:00", "16:30", "18:00", "19:30"];

  const handleFinalStep = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <section className="py-32 md:py-56 px-4 md:px-8 max-w-7xl mx-auto min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-start">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[#c5a059] font-bold uppercase tracking-[1em] text-[11px] mb-8 block italic">
              Elite Booking System
            </span>
            <h2 className="text-5xl md:text-8xl font-bold luxury-title italic text-black leading-[0.85] mb-8 md:mb-12 uppercase tracking-tighter">
              AGREGA <br /> TU <span className="text-[#c5a059]">SESIÓN.</span>
            </h2>
            <p className="text-lg md:text-2xl text-zinc-900 font-bold italic leading-relaxed mb-12 md:mb-16 max-w-xl">
              Selecciona tu frecuencia en nuestro nodo central de San Salvador
              de Jujuy. Confirmación inmediata vía red.
            </p>

            <div className="space-y-4 md:space-y-8">
              <div className="p-6 md:p-8 bg-zinc-50 rounded-[2.5rem] flex items-center gap-6 border-2 border-black">
                <MapPin
                  className="text-[#c5a059]"
                  size={32}
                  strokeWidth={2.5}
                />
                <p className="text-xl md:text-2xl font-black text-black luxury-title uppercase">
                  Centro, Jujuy
                </p>
              </div>
              <div className="p-6 md:p-8 bg-zinc-50 rounded-[2.5rem] flex items-center gap-6 border-2 border-black">
                <Clock className="text-[#c5a059]" size={32} strokeWidth={2.5} />
                <p className="text-xl md:text-2xl font-black text-black luxury-title uppercase ">
                  09:00 — 21:00
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className=" flex-1 bg-white p-6 md:p-20 rounded-[3rem] md:rounded-[4rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)] border-2 border-black relative  max-md:px-2 max-md:w-full">
          <AnimatePresence mode="wait">
            {confirmed ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 "
              >
                <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl  ">
                  <CheckCircle2 size={72} className="text-white" />
                </div>
                <h3 className="text-6xl max-md:text-4xl  font-black luxury-title italic text-black mb-6 uppercase leading-none">
                  ¡Turno <br /> Confirmado!
                </h3>
                <div className="text-black font-black uppercase tracking-[0.2em] text-xs mb-10 italic space-y-2 ">
                  <p>
                    CLIENTE:{" "}
                    <span className="text-[#c5a059]">{clientData.name}</span>
                  </p>
                  <p>
                    SERVICIO:{" "}
                    <span className="text-[#c5a059]">{selectedService}</span>
                  </p>
                  <p>
                    HORARIO:{" "}
                    <span className="text-[#c5a059]">{selectedTime} HS</span>
                  </p>
                </div>
                <button
                  onClick={() => {
                    setConfirmed(false);
                    setShowForm(false);
                    setSelectedService(null);
                  }}
                  className="w-full py-8 bg-black text-white font-black italic tracking-widest uppercase hover:bg-[#c5a059] "
                >
                  NUEVA RESERVA
                </button>
              </motion.div>
            ) : !showForm ? (
              <motion.div
                key="steps"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              
              >
                {/* 01. SERVICIO */}
                <div className="mb-14 ">
                  <span className="text-sm font-black text-black uppercase tracking-widest mb-8 block border-b-2 border-[#c5a059] pb-2 w-fit ">
                    01. Seleccionar Servicio
                  </span>
                  <div className="grid grid-cols-1 gap-4 ">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedService(s.n)}
                        className={`p-6 b  max-md:px-2 border-2 flex items-center justify-between rounded-2xl transition-all ${selectedService?.includes(s.n.split(" ")[0]) ? "bg-black text-white border-black" : "bg-white border-zinc-200 text-black"}`}
                      >
                        <span className="text-xl font-black italic luxury-title uppercase">
                          {s.n}
                        </span>
                        {selectedService?.includes(s.n.split(" ")[0]) && (
                          <CheckCircle2 size={20} className="text-[#c5a059]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 02. CALENDARIO Y HORA */}
                <div
                  className={`transition-all duration-700 ${selectedService ? "opacity-100" : "opacity-10 pointer-events-none"}`}
                >
                  <span className="text-sm font-black text-black uppercase tracking-widest mb-8 block border-b-2 border-[#c5a059] pb-2 w-fit">
                    02. Elige Fecha y Hora
                  </span>
                  <BookingCalendar />
                  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {slots.map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setSelectedTime(t);
                          setShowForm(true);
                        }}
                        className="py-7 border-2 border-black rounded-2xl font-black text-2xl italic luxury-title text-black hover:bg-black hover:text-white transition-all"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
              >
                <button
                  onClick={() => setShowForm(false)}
                  className="text-[10px] font-black uppercase tracking-widest text-[#c5a059] mb-10 flex items-center gap-2"
                >
                  ← VOLVER A HORARIOS
                </button>
                <h3 className="text-5xl font-black luxury-title italic text-black mb-16 uppercase tracking-tighter leading-none">
                  DATOS DEL <br />{" "}
                  <span className="text-[#c5a059]">SOLICITANTE.</span>
                </h3>

                <form className="space-y-12" onSubmit={handleFinalStep}>
                  <div className="space-y-4 border-b-2 border-black pb-6 focus-within:border-[#c5a059] transition-all">
                    <label className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-400 flex items-center gap-3 italic">
                      <User size={14} /> Nombre Completo
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Ej: Alejandro García"
                      className="w-full bg-transparent outline-none font-black text-2xl italic text-black placeholder:text-zinc-100"
                      onChange={(e) =>
                        setClientData({ ...clientData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-4 border-b-2 border-black pb-6 focus-within:border-[#c5a059] transition-all">
                    <label className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-400 flex items-center gap-3 italic">
                      <Phone size={14} /> Teléfono Móvil
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+54 388 ..."
                      className="w-full bg-transparent outline-none font-black text-2xl italic text-black placeholder:text-zinc-100"
                      onChange={(e) =>
                        setClientData({ ...clientData, phone: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-9 bg-black text-white font-black italic tracking-[0.4em] uppercase hover:bg-[#c5a059] transition-all flex items-center justify-center gap-6"
                  >
                    CONFIRMAR TURNO <ArrowRight size={22} strokeWidth={3} />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default function Reserv() {
  return (
    <Suspense
      fallback={
        <div className="h-screen bg-white flex items-center justify-center font-black">
          CARGANDO SISTEMA...
        </div>
      }
    >
      <ReservContent />
    </Suspense>
  );
}
