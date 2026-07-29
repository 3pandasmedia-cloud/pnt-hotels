"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Offers() {
  return (
    <section
      id="offers"
      className="bg-[#F8F6F2] py-32 text-[#08131A]"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="grid items-center gap-20 lg:grid-cols-2"
        >

          {/* Image */}

          <div className="relative overflow-hidden rounded-[32px]">

            <Image
              src="/images/offers.jpg"
              alt="Offer"
              width={900}
              height={650}
              className="transition duration-700 hover:scale-105"
            />

          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-[5px] text-[#C9A35A]">

              Exclusive Offers

            </p>

            <h2 className="mt-6 text-6xl leading-tight">

              Stay Longer.
              <br />
              Experience More.

            </h2>

            <p className="mt-8 text-lg leading-9 text-black/60">

              Enjoy curated seasonal offers, complimentary
              experiences and exclusive packages across all
              PnT Hotels destinations.

            </p>

            <button className="mt-12 flex items-center gap-3 rounded-full border border-[#C9A35A] bg-[#C9A35A] px-8 py-4 uppercase tracking-[3px] text-black transition hover:bg-[#08131A] hover:text-white">

              View Packages

              <ArrowRight size={18}/>

            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}