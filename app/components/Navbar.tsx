"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#" },
  { name: "Resorts", href: "#resorts" },
  { name: "Experiences", href: "#experiences" },
  { name: "Offers", href: "#offers" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-[#08131A]/85 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex h-24 items-center justify-between px-6">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/logo1.png"
              width={160}
              height={65}
              alt="PnT Hotels"
            />

            <div>
              <h2 className="text-xl tracking-[3px] font-semibold">
                PnT HOTELS
              </h2>

              <p className="text-xs uppercase text-[#C9A35A] tracking-[4px]">
                Luxury Experiences
              </p>
            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative uppercase text-sm tracking-[3px] text-white transition hover:text-[#C9A35A] after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-[#C9A35A] after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* Book Button */}

          <div className="hidden lg:flex">

            <button className="group flex items-center gap-3 rounded-full border border-[#C9A35A] bg-[#C9A35A] px-7 py-3 uppercase tracking-[2px] text-[#08131A] transition hover:bg-transparent hover:text-white">

              Book Now

              <CalendarDays
                size={18}
                className="transition group-hover:rotate-12"
              />

            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden"
          >
            <Menu size={34} />
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: .4 }}
            className="fixed inset-0 z-[100] bg-[#08131A]"
          >

            <div className="flex h-24 items-center justify-between px-8">

              <Image
                src="/logo.png"
                width={60}
                height={60}
                alt="logo"
              />

              <button onClick={() => setMenuOpen(false)}>
                <X size={36} />
              </button>

            </div>

            <div className="mt-20 flex flex-col items-center gap-10">

              {links.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-light tracking-[4px] hover:text-[#C9A35A]"
                >
                  {item.name}
                </a>

              ))}

              <button className="mt-12 rounded-full bg-[#C9A35A] px-10 py-4 text-black uppercase tracking-[3px]">

                Book Your Stay

              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}