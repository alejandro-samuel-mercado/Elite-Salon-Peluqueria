"use client";
import ContactForm from "@/components/ContactForm";
import { Instagram, MapPin, Phone } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="pt-48 pb-32 px-8 max-w-7xl mx-auto bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div>
          <span className="text-[#c5a059] font-bold uppercase tracking-[0.8em] text-[10px] mb-8 block italic">
            Atención al Cliente
          </span>
          <h1 className="text-8xl font-bold luxury-title text-[#050505] leading-[0.85] mb-12 uppercase tracking-tighter">
            HABLEMOS <br /> DE TU{" "}
            <span className="text-[#c5a059]">IMAGEN.</span>
          </h1>
          <p className="text-2xl text-zinc-800 font-medium italic leading-relaxed mb-20 max-w-xl">
            Visítanos en nuestro salón boutique en el centro de San Salvador de
            Jujuy para una asesoría personalizada.
          </p>

          <div className="space-y-12">
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-[#050505] rounded-2xl flex items-center justify-center text-[#c5a059] shadow-xl">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
                  Localización
                </p>
                <p className="text-2xl font-bold text-[#050505] luxury-title uppercase">
                  Jujuy, Argentina
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-[#050505] rounded-2xl flex items-center justify-center text-[#c5a059] shadow-xl">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
                  WhatsApp VIP
                </p>
                <p className="text-2xl font-bold text-[#050505] luxury-title">
                  +54 3883118692
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-[#050505] rounded-2xl flex items-center justify-center text-[#c5a059] shadow-xl">
                <Instagram size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
                  Instagram
                </p>
                <p className="text-2xl font-bold text-[#050505] luxury-title">
                  @EliteSalon_Jujuy
                </p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
