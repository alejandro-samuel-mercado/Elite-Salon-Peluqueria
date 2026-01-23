import GalleryGrid from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ReelsSection from "@/components/ReelsSection";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import { SERVICES_DATA } from "@/utils/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featured = SERVICES_DATA.slice(0, 3);
export default function Home() {
  return (
    <div className="bg-bg-soft">
      <Hero />
      <Marquee />
      <GalleryGrid />
      <section id="servicios" className="py-30 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <h2 className="md:text-7xl text-5xl text-gray-900 font-bold luxury-text italic text-primary leading-none ">
            CARTA DE <br />{" "}
            <span className="text-accent italic font-light ">
              ESPECIALIDADES.
            </span>
          </h2>
          <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.5em] text-right max-w-sm italic">
            Sistemas de transformación integral con productos de alta gama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="mt-24 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-8 px-20 py-8 bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-[#c5a059] transition-all shadow-2xl"
          >
            VER CATÁLOGO COMPLETO <ArrowRight size={20} strokeWidth={3} />
          </Link>
        </div>
      </section>

      <ReelsSection />

      <Testimonials />
    </div>
  );
}
