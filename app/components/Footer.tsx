"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#08131A] text-white"
    >
      {/* Top CTA */}

      <div className="border-b border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 py-20 lg:flex-row">

          <div>

            <p className="uppercase tracking-[5px] text-[#C9A35A]">
              Start Your Journey
            </p>

            <h2 className="mt-4 text-5xl leading-tight">
              Escape Into Luxury
            </h2>

            <p className="mt-6 max-w-xl text-white/70">
              Discover unforgettable stays surrounded by nature,
              comfort and premium hospitality.
            </p>

          </div>

          <button className="rounded-full bg-[#C9A35A] px-10 py-5 text-black uppercase tracking-[3px] transition hover:bg-white">

            Book Your Stay

          </button>

        </div>
      </div>

      {/* Footer */}

      <div className="container mx-auto grid gap-14 px-6 py-20 lg:grid-cols-4">

        {/* Logo */}

        <div>

          <Image
            src="/logo.png"
            width={75}
            height={75}
            alt="logo"
          />

          <h3 className="mt-5 text-2xl">
            PnT Hotels
          </h3>

          <p className="mt-6 leading-8 text-white/60">
            Experience premium hospitality across India's most
            beautiful destinations.
          </p>

          <div className="mt-8 flex gap-4">

            {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, index) => (

              <div
                key={index}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 transition hover:border-[#C9A35A] hover:text-[#C9A35A]"
              >
                <Icon size={18} />
              </div>

            ))}

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="mb-8 text-xl">
            Quick Links
          </h3>

          <div className="flex flex-col gap-5 text-white/60">

            <Link href="#">Home</Link>

            <Link href="#">Resorts</Link>

            <Link href="#">Experiences</Link>

            <Link href="#">Packages</Link>

            <Link href="#">Gallery</Link>

            <Link href="#">Contact</Link>

          </div>

        </div>

        {/* Resorts */}

        <div>

          <h3 className="mb-8 text-xl">
            Our Resorts
          </h3>

          <div className="flex flex-col gap-5 text-white/60">

            <p>Sakleshpur</p>

            <p>Coorg</p>

            <p>Ooty</p>

            <p>Thekkady</p>

            <p>Goa</p>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-8 text-xl">
            Contact
          </h3>

          <div className="space-y-6 text-white/70">

            <div className="flex gap-4">

              <Phone className="text-[#C9A35A]" />

              <p>+91 9916609006</p>

            </div>

            <div className="flex gap-4">

              <Mail className="text-[#C9A35A]" />

              <p>info@pnthotels.com</p>

            </div>

            <div className="flex gap-4">

              <MapPin className="text-[#C9A35A]" />

              <p>
                Bangalore,
                Karnataka,
                India
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-white/50 lg:flex-row">

          <p>
            © 2026 PnT Hotels. All Rights Reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:border-[#C9A35A]"
          >
            <ArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
}