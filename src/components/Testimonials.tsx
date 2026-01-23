"use client";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviewsRow1 = [
    {
      name: "Lucía P.",
      text: "El balayage superó mis expectativas, el tono es perfecto y muy natural.",
      service: "Colorimetría Pro",
    },
    {
      name: "Martín G.",
      text: "La keratina dejó mi pelo como seda, por fin me olvidé del frizz diario.",
      service: "Salud Capilar",
    },
    {
      name: "Sonia R.",
      text: "El mejor corte de autor que me han hecho en Jujuy. Entienden tu estilo.",
      service: "Corte & Estilo",
    },
    {
      name: "Elena V.",
      text: "Manicura impecable, el esmaltado semipermanente me duró tres semanas intacto.",
      service: "Nails Pro",
    },
    {
      name: "Sasha M.",
      text: "Maquillaje HD ideal para mi evento, no se movió en toda la noche.",
      service: "Makeup Social",
    },
    {
      name: "Carla T.",
      text: "Tratamiento de botox capilar 100% recomendado para recuperar el brillo.",
      service: "Tratamientos",
    },
    {
      name: "Juan P.",
      text: "Atención VIP desde que entras. El servicio de barbería es de otro nivel.",
      service: "Corte Caballero",
    },
    {
      name: "Marta S.",
      text: "La hidratación iónica es increíble, mi cabello volvió a tener vida y movimiento.",
      service: "Hidratación",
    },
  ];

  const reviewsRow2 = [
    {
      name: "Valentina F.",
      text: "Depilación facial súper delicada y profesional. Cuidan mucho la piel.",
      service: "Estética Facial",
    },
    {
      name: "Roberto D.",
      text: "Los mejores tintes orgánicos, sin olor fuerte y el color es muy vibrante.",
      service: "Tintes Bio",
    },
    {
      name: "Sofía L.",
      text: "Alisado molecular perfecto, liso natural con movimiento y mucha suavidad.",
      service: "Alisados",
    },
    {
      name: "Giselle B.",
      text: "El perfilado de cejas cambió mi mirada por completo. Son expertos.",
      service: "Visagismo Cejas",
    },
    {
      name: "Adriana K.",
      text: "Un salón de primer nivel en el centro de Jujuy. El ambiente es relajante.",
      service: "Elite Experience",
    },
    {
      name: "Paola M.",
      text: "Peinado de novia soñado, captaron exactamente lo que quería para mi día.",
      service: "Peinado Novia",
    },
    {
      name: "Laura J.",
      text: "Pedicura relajante y estética de manos inmejorable. Salí como nueva.",
      service: "Spa Manos/Pies",
    },
  ];

  return (
    <section className="py-48 bg-white overflow-hidden border-y border-black/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.03)_0%,transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 mb-32 text-center relative z-10">
        <span className="text-[11px] font-bold text-[#c5a059] uppercase tracking-[0.8em] block mb-8 italic">
          Excelencia Comprobada
        </span>
        <h2 className="text-7xl font-bold luxury-title text-[#0a0a0a] italic leading-none">
          Voz de Nuestros Clientes.
        </h2>
        <p className="mt-8 text-xl text-[#0a0a0a]/40 font-medium italic max-w-2xl mx-auto">
          La satisfacción de quienes confían en nuestra maestría técnica es
          nuestro mejor referente en la región.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...reviewsRow1, ...reviewsRow1].map((r, i) => (
            <div
              key={i}
              className="inline-block w-[300px] md:w-[450px] mx-5 p-8 md:p-12 bg-[#fafafa] rounded-[3.5rem] border border-black/5 shadow-sm group hover:border-[#c5a059]/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-8">
                <Quote className="text-[#c5a059]/30" size={36} />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-[#c5a059] fill-[#c5a059]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-lg italic font-medium text-[#0a0a0a]/80 mb-10 whitespace-normal leading-relaxed text-balance">
                "{r.text}"
              </p>
              <div className="flex flex-col border-t border-[#c5a059]/10 pt-8">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0a0a0a]">
                  {r.name}
                </span>
                <span className="text-[10px] text-[#c5a059] font-bold uppercase tracking-widest mt-2 italic">
                  {r.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex whitespace-nowrap animate-testimonial-scroll"
          style={{ animationDirection: "reverse" }}
        >
          {[...reviewsRow2, ...reviewsRow2].map((r, i) => (
            <div
              key={i}
              className="inline-block w-[300px] md:w-[450px] mx-5 p-8 md:p-12 bg-[#fafafa] rounded-[3.5rem] border border-black/5 shadow-sm group hover:border-[#c5a059]/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-8">
                <Quote className="text-[#c5a059]/30" size={36} />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-[#c5a059] fill-[#c5a059]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-lg italic font-medium text-[#0a0a0a]/80 mb-10 whitespace-normal leading-relaxed text-balance">
                "{r.text}"
              </p>
              <div className="flex flex-col border-t border-[#c5a059]/10 pt-8">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0a0a0a]">
                  {r.name}
                </span>
                <span className="text-[10px] text-[#c5a059] font-bold uppercase tracking-widest mt-2 italic">
                  {r.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
