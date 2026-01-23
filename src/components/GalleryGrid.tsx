"use client";
import { motion } from "framer-motion";

export default function GalleryGrid() {
  const images = [
    {
      s: "md:col-span-2 md:row-span-2",
      u: "https://images.unsplash.com/photo-1562322140-8baeececf3df",
    },
    {
      s: "md:col-span-1 md:row-span-1",
      u: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
    },
    {
      s: "md:col-span-1 md:row-span-2",
      u: "https://images.unsplash.com/photo-1560066984-138dadb4c035",
    },
    {
      s: "md:col-span-1 md:row-span-1",
      u: "https://images.unsplash.com/photo-1605497788044-5a32c7078486",
    },
  ];

  return (
    <section className="py-32 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[1000px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className={`${img.s} rounded-[3rem] overflow-hidden border border-black/5 group relative shadow-2xl`}
            >
              <img
                src={`${img.u}?q=80&w=1200&auto=format`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-12 flex flex-col justify-end">
               
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
