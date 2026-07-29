"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

const resorts = [
  {
    title: "Advaya Luxury Resort",
    location: "Sakleshpur",
    image: "/images/resorts/advaya.jpg",
    desc: "Luxury villas surrounded by coffee plantations and misty hills.",
  },
  {
    title: "Mookanana Resort",
    location: "Coorg",
    image: "/images/resorts/mookanana.jpg",
    desc: "Infinity pool, jungle experience and unforgettable sunsets.",
  },
  {
    title: "Hill Escape Resort",
    location: "Ooty",
    image: "/images/resorts/ooty.jpg",
    desc: "Premium mountain stay with breathtaking valley views.",
  },
];

export default function FeaturedResorts() {
  return (
    <section
      id="resorts"
      className="bg-[#F8F6F2] pt-32 pb-48 text-[#08131A]"
    >
      <div className="container mx-auto px-6 pt-16">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-[#C9A35A]">
            DESTINATIONS
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl">
            Luxury Resorts
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-black/60">
            Discover handpicked resorts surrounded by forests,
            waterfalls and unforgettable experiences.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">

          {resorts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="group overflow-hidden rounded-[28px] bg-white shadow-xl"
            >

              <div className="relative h-[480px] overflow-hidden rounded-t-[28px]">

                <Image
                  src={item.image}
                  fill
                  alt={item.title}
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8 text-white">

                  <div className="mb-3 flex items-center gap-2">

                    <MapPin size={16} />

                    <span>{item.location}</span>

                  </div>

                  <h3 className="text-3xl">
                    {item.title}
                  </h3>

                </div>

              </div>

              <div className="p-8">

                <div className="mb-6 flex items-center gap-1 text-[#C9A35A]">

                  <Star fill="#C9A35A" size={18} />

                  <Star fill="#C9A35A" size={18} />

                  <Star fill="#C9A35A" size={18} />

                  <Star fill="#C9A35A" size={18} />

                  <Star fill="#C9A35A" size={18} />

                </div>

                <p className="leading-8 text-black/60">
                  {item.desc}
                </p>

                <button className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[3px] transition hover:text-[#C9A35A]">

                  Explore Resort

                  <ArrowRight size={18} />

                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}