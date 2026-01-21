"use client";
import Lottie from "lottie-react";
import lottieAnim from "../../public/assets/lottie.json";
export default function LottieAnim() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-14 bg-white rounded-[4rem] border border-black/5 shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-linear-to-tr from-brand-gold/[0.03] to-transparent pointer-events-none" />
      <div className="relative w-full h-full max-w-[250px] max-h-[250px]">
        <Lottie
          animationData={lottieAnim}
          loop={true}
          className="w-full h-full opacity-60 scale-150 transition-all duration-700 group-hover:scale-175 group-hover:opacity-100"
        />
      </div>
      <div className="mt-12 text-center relative z-10">
        <h5 className="text-2xl font-bold luxury-title italic text-brand-obsidian mb-2 tracking-widest uppercase">
          Validando Estilo
        </h5>
        <div className="flex items-center justify-center gap-3">
          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" />
          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce [animation-delay:0.2s]" />
          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  );
}
