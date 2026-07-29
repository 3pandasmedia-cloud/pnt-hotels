"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Shruthi M",
    image: "/images/testimonials/user1.jpg",
    review:
      "A peaceful stay surrounded by nature. The hospitality, food and ambience exceeded our expectations. We will definitely return.",
  },
  {
    name: "Rohit Malhotra",
    image: "/images/testimonials/user2.jpg",
    review:
      "The infinity pool overlooking the valley was breathtaking. One of the finest luxury stays we've experienced.",
  },
  {
    name: "Anjali Menon",
    image: "/images/testimonials/user3.jpg",
    review:
      "Beautiful villas, excellent service and amazing plantation walks. Every moment felt special.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#F8F6F2] py-32 text-[#08131A]"
    >
      <div className="container mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-[#C9A35A]">
            Guest Stories
          </p>

          <h2 className="mt-4 text-5xl lg:text-6xl">
            Loved by Our Guests
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-black/60">
            Every stay becomes a cherished memory. Here's what our guests
            have to say.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-[30px] bg-white p-8 shadow-xl"
            >

              <Quote
                size={42}
                className="mb-8 text-[#C9A35A]"
              />

              <p className="leading-8 text-black/70">
                "{item.review}"
              </p>

              <div className="mt-10 flex items-center gap-4">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="rounded-full object-cover"
                />

                <div>

                  <h4 className="text-xl font-semibold">
                    {item.name}
                  </h4>

                  <div className="mt-2 flex gap-1">

                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        fill="#C9A35A"
                        color="#C9A35A"
                        size={16}
                      />
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}