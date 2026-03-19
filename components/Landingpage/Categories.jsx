"use client";
import Image from "next/image";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const categories = [
  { title: "Snooker Ball", imagebg: "/try/1-1.avif", icon: "/try/1.png", link: "/categories/billiard-balls" },
  { title: "Snooker Table", imagebg: "/try/2-2.jpg", icon: "/try/2.webp", link: "/categories/snooker-table" },
  { title: "Snooker Cue", imagebg: "/try/4-4.jpg", icon: "/try/3.png", link: "/categories/snooker-cues" },
  {
    title: "Accessories",
    imagebg: "/try/2-2.jpg",
    icon: "/try/accessories.png", link: "/categories/billiards-accessories"
  },
  { title: "Table Cloth", imagebg: "/try/4-4.jpg", icon: "/try/5.png", link: "/categories/snooker-table-cloth" },
  { title: "Cue Cases", imagebg: "/try/2-2.jpg", icon: "/try/6.png", link: "/categories/cue-case" },
  { title: "Foosball Table", imagebg: "/try/2-2.jpg", icon: "/try/soccer.png", link: "/categories/soccer-table" },
];

export default function CategorySection() {
  return (
    <section className="w-full">
      <div className="text-center my-5 md:my-10">
        <h2 className="text-black text-4xl md:text-5xl font-semibold leading-tight">
          Explore Our <span className="text-yellow-500">Collection</span>
        </h2>

        <p className="text-black mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Professional-grade equipment and handcrafted tables designed for
          players, clubs, and luxury game rooms.
        </p>
      </div>

      {/* ================= MOBILE SLIDER ================= */}
      {/* ================= MOBILE SLIDER ================= */}
      <div className="block md:hidden px-3">
        <Swiper
          spaceBetween={12}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {categories.map((cat, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <Link
                href={cat.link}
                className="relative block w-full h-[200px] rounded-lg border-2 border-yellow-500 overflow-hidden"
                style={{
                  backgroundImage: `url(${cat.imagebg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={cat.icon}
                    alt={cat.title}
                    className="w-25 h-25 object-cover drop-shadow-lg"
                  />
                </div>

                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <p className="text-white font-bold text-xs uppercase tracking-wide">
                    {cat.title}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= DESKTOP STRIP ================= */}
      <div className="hidden md:flex w-full h-[320px] overflow-hidden">
        {categories.map((cat, i) => (
          <Link href={cat.link}
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
          </Link>
        ))}
      </div>
    </section>
  );
}
