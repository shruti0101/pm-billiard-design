"use client";
import Image from "next/image";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const categories = [
  { title: "Snooker Ball", imagebg: "/try/1-1.avif", icon: "/try/1.png" },
  { title: "Snooker Table", imagebg: "/try/2-2.jpg", icon: "/try/2.webp" },
  { title: "Snooker Cue", imagebg: "/try/4-4.jpg", icon: "/try/3.png" },
  {
    title: "Accessories",
    imagebg: "/try/2-2.jpg",
    icon: "/try/accessories.png",
  },
  { title: "Table Cloth", imagebg: "/try/4-4.jpg", icon: "/try/5.png" },
  { title: "Cue Cases", imagebg: "/try/2-2.jpg", icon: "/try/6.png" },
  { title: "Foosball Table", imagebg: "/try/2-2.jpg", icon: "/try/soccer.png" },
];

export default function CategorySection() {
  return (
    <section className="w-full">
      <div className="text-center my-5 md:my-10 px-6">
        <h2 className="text-black text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Explore Our Collection 🎱🎯
        </h2>

        <p className="text-black mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Professional-grade equipment and handcrafted tables designed for
          players, clubs, and luxury game rooms.
        </p>
      </div>

      {/* ================= MOBILE SLIDER ================= */}
      <div className="block md:hidden">
        <Swiper spaceBetween={5} slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
        >
          {categories.map((cat, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative h-[220px] border-2 border-white group overflow-hidden perspective-[1000px]"
                style={{
                  backgroundImage: `url(${cat.imagebg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition duration-300" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={cat.icon}
                    alt={cat.title}
                    className="w-28 h-28 object-contain drop-shadow-lg transition-all duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-2"
                  />
                </div>

                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white font-bold text-sm uppercase transition-all duration-300 group-hover:tracking-[0.2em]">
                    {cat.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= DESKTOP STRIP ================= */}
      <div className="hidden md:flex w-full h-[320px] overflow-hidden">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="relative flex-1 border-2 border-yellow-500 group overflow-hidden perspective-[1000px]"
            style={{
              backgroundImage: `url(${cat.imagebg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition duration-300" />

            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={cat.icon}
                alt={cat.title}
                fill
                className=" object-contain  drop-shadow-lg transition-all duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-2"
              />
            </div>

            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="text-white font-bold text-lg uppercase transition-all duration-300 group-hover:tracking-[0.2em]">
                {cat.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
