"use client";

import { motion } from "framer-motion";
import {
  Hotel,
  Users,
  Star,
  Headphones,
} from "lucide-react";

const stats = [
  {
    icon: Hotel,
    value: "12+",
    title: "Luxury Resorts",
  },
  {
    icon: Users,
    value: "50,000+",
    title: "Happy Guests",
  },
  {
    icon: Star,
    value: "4.8/5",
    title: "Guest Rating",
  },
  {
    icon: Headphones,
    value: "24/7",
    title: "Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#08131A] py-24">

      <div className="container mx-auto grid gap-12 px-6 text-center lg:grid-cols-4">

        {stats.map((item,index)=>{

          const Icon=item.icon;

          return(

            <motion.div
              key={index}
              whileHover={{y:-10}}
              className="rounded-[28px] border border-white/10 bg-white/5 p-10 backdrop-blur-lg"
            >

              <Icon
                size={42}
                className="mx-auto text-[#C9A35A]"
              />

              <h2 className="mt-6 text-5xl">

                {item.value}

              </h2>

              <p className="mt-4 uppercase tracking-[3px] text-white/70">

                {item.title}

              </p>

            </motion.div>

          )

        })}

      </div>

    </section>
  );
}