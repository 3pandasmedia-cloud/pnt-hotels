"use client";

import { useState } from "react";
import {
  CalendarDays,
  Users,
  TicketPercent,
  Search,
} from "lucide-react";

export default function BookingBar() {
  const today = new Date().toISOString().split("T")[0];

  const tomorrow = new Date(Date.now() + 86400000)
    .toISOString()
    .split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState("2 Adults");
  const [promo, setPromo] = useState("");

  return (
    <div className="absolute bottom-30 left-1/2 z-30 w-[94%] max-w-7xl -translate-x-1/2 rounded-[30px] border border-white/10 bg-[#08131A]/80 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,.45)]">

      <div className="grid lg:grid-cols-5">

        {/* CHECK IN */}

        <div className="relative flex items-center gap-4 border-r border-white/10 p-6">

          <CalendarDays className="text-[#C9A35A]" size={26} />

          <div className="flex-1">

            <p className="text-[11px] uppercase tracking-[3px] text-white/50">
              Check In
            </p>

            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="mt-2 w-full cursor-pointer bg-transparent text-lg outline-none
              [&::-webkit-calendar-picker-indicator]:cursor-pointer
              [&::-webkit-calendar-picker-indicator]:invert"
            />

          </div>

        </div>

        {/* CHECK OUT */}

        <div className="relative flex items-center gap-4 border-r border-white/10 p-6">

          <CalendarDays className="text-[#C9A35A]" size={26} />

          <div className="flex-1">

            <p className="text-[11px] uppercase tracking-[3px] text-white/50">
              Check Out
            </p>

            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="mt-2 w-full cursor-pointer bg-transparent text-lg outline-none
              [&::-webkit-calendar-picker-indicator]:cursor-pointer
              [&::-webkit-calendar-picker-indicator]:invert"
            />

          </div>

        </div>

        {/* GUESTS */}

        <div className="flex items-center gap-4 border-r border-white/10 p-6">

          <Users className="text-[#C9A35A]" size={26} />

          <div className="flex-1">

            <p className="text-[11px] uppercase tracking-[3px] text-white/50">
              Guests
            </p>

            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mt-2 w-full bg-transparent text-lg outline-none"
            >
              <option className="text-black">1 Adult</option>
              <option className="text-black">2 Adults</option>
              <option className="text-black">2 Adults, 1 Child</option>
              <option className="text-black">4 Adults</option>
            </select>

          </div>

        </div>

        {/* PROMO */}

        <div className="flex items-center gap-4 border-r border-white/10 p-6">

          <TicketPercent className="text-[#C9A35A]" size={26} />

          <div className="flex-1">

            <p className="text-[11px] uppercase tracking-[3px] text-white/50">
              Promo Code
            </p>

            <input
              placeholder="Optional"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              className="mt-2 w-full bg-transparent text-lg outline-none placeholder:text-white/40"
            />

          </div>

        </div>

        {/* SEARCH */}

        <button
          onClick={() =>
            alert(
              `Searching...\n\nCheck In: ${checkIn}\nCheck Out: ${checkOut}\nGuests: ${guests}\nPromo: ${promo}`
            )
          }
          className="flex items-center justify-center gap-3 rounded-r-[30px] bg-[#C9A35A] text-lg font-semibold tracking-[2px] text-black transition duration-300 hover:bg-white"
        >

          <Search size={22} />

          CHECK AVAILABILITY

        </button>

      </div>

    </div>
  );
}