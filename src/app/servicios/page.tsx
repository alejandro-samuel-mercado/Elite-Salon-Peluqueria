import FQAAccordion from "@/components/FQAAccordion";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES_DATA } from "@/utils/data";
export default function ServiciosPage() {
  return (
    <div className="pt-35 bg-brand-cream ">
      <section className="px-8 max-w-7xl mx-auto mb-40 text-center mt-0">
        <h1 className="text-[5vw] font-bold luxury-title text-brand-obsidian opacity-50 leading-none tracking-tighter mb-20 select-none italic">
          SERVICIOS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {SERVICES_DATA.map((s, i) => (
            <ServiceCard
              key={i}
              category={s.category}
              title={s.title}
              price={s.price}
              time={s.time}
              desc={s.desc}
              items={s.items}
              premium={s.premium}
            />
          ))}
        </div>
      </section>
      <FQAAccordion />
    </div>
  );
}
