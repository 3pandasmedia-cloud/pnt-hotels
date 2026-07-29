"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Nature Trails",
        image: "/images/experience/trail.jpg",
    },
    {
        title: "Spa & Wellness",
        image: "/images/experience/spa.jpg",
    },
    {
        title: "Fine Dining",
        image: "/images/experience/dining.jpg",
    },
    {
        title: "Adventure",
        image: "/images/experience/adventure.jpg",
    },
];

export default function Experiences() {
    return (
        <section
            id="experiences"
            className="mt-16 bg-[#08131A] py-32 overflow-hidden"
        >
            <div className="container mx-auto px-6 pt-16">

                <p className="uppercase tracking-[5px] text-[#C9A35A]">
                    Experiences
                </p>

                <h2 className="mt-4 text-5xl">
                    Moments That Stay With You
                </h2>

                <div className="mt-20 grid gap-8 lg:grid-cols-4">

                    {experiences.map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{
                                y: -12,
                            }}
                            className="group cursor-pointer overflow-hidden rounded-[28px]"
                        >

                            <div className="relative h-[420px]">

                                <Image
                                    src={item.image}
                                    fill
                                    alt=""
                                    className="object-cover duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                                <h3 className="absolute bottom-8 left-8 text-3xl">

                                    {item.title}

                                </h3>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}