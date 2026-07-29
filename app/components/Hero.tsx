"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BookingBar from "./BookingBar";
import {
  CalendarDays,
  Users,
  TicketPercent,
  ChevronDown,
  Play,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}

      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10 }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="PnT Hotels Luxury Resort"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#08131A]" />

      {/* Hero Content */}

      <div className="relative z-20 container mx-auto flex min-h-screen -translate-y-25 flex-col items-center justify-center px-6 pt-16 pb-56 text-center sm:-translate-y-14 lg:-translate-y-12">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          className="mb-4 uppercase tracking-[8px] text-[#C9A35A]"
        >
          EXPERIENCE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5 }}
          className="max-w-5xl text-6xl font-light leading-tight lg:text-8xl"
        >
          Unparalleled
          <br />
          <span className="gold italic">
            Comfort
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-8 max-w-xl text-lg text-white/80"
        >
          Handpicked luxury resorts surrounded by forests,
          waterfalls and unforgettable experiences.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >

          <button className="rounded-full border border-[#C9A35A] bg-[#C9A35A] px-8 py-4 uppercase tracking-[3px] text-black transition hover:bg-transparent hover:text-white">

            Explore Resorts

          </button>

          <button className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 uppercase tracking-[3px] backdrop-blur-lg transition hover:bg-white hover:text-black">

            <Play size={18} />

            Watch Video

          </button>

        </motion.div>

      </div>

     <BookingBar />

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-2 left-1/2 z-40 -translate-x-1/2"
      >

        <ChevronDown
          size={34}
        />

      </motion.div>

    </section>
  );
}