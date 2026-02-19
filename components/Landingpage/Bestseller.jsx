"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const bestSellers = [
  { id: 1, name: "Professional Snooker Accessory", img: "/try/acc.png" },
  { id: 2, name: "Premium Pool Table", img: "/try/office2.webp" },
  { id: 3, name: "Luxury Billiards Table", img: "/try/office8.webp" },
    { id: 6, name: "Snooker Balls Set", img: "/try/acc2.png" },
  { id: 4, name: "Tournament Snooker Table", img: "/try/try7.jpg" },
  { id: 5, name: "Classic Snooker Table", img: "/try/unnamed2.png" },

];

export default function BestSellerSection() {
  return (
    <section className="w-full bg-[#1c3129] py-13 relative overflow-hidden">

      {/* GOLD SPOTLIGHT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EDBC41] blur-[260px] opacity-10 pointer-events-none" />

      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-13 px-4">
        <p className="text-yellow-500 uppercase tracking-[0.35em] text-xs mb-3">
          Top Picks ✨
        </p>

        <h2 className="text-4xl md:text-5xl text-white font-semibold leading-tight">
          Best Selling <span className="text-yellow-500">Tables</span>
        </h2>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        loop
        centeredSlides
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.4 },
          1024: { slidesPerView: 2.2 },
          1280: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto px-4"
      >
        {bestSellers.map((item) => (
          <SwiperSlide key={item.id}>
            <PremiumShowcase item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}


/* ===== PREMIUM SHOWCASE TILE ===== */

function PremiumShowcase({ item }) {
  return (
    <div className="relative group h-[420px] rounded-3xl overflow-hidden">

      {/* IMAGE */}
      <Image
        src={item.img}
        alt={item.name}
        fill
        className="object-cover group-hover:scale-105 transition duration-700"
      />

      {/* DARK FADE */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 p-6 z-10">
        <h3 className="text-white text-xl font-semibold">
          {item.name}
        </h3>

        <button className="mt-2 text-yellow-500 text-sm font-medium">
          View Details →
        </button>
      </div>

      {/* GOLD EDGE */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-yellow-500/30 transition duration-500"/>

      {/* TAG */}
      <span className="absolute top-5 left-5 bg-yellow-500 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider z-10">
        Bestseller
      </span>

    </div>
  );
}
