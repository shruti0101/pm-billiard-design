"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RotatingText from "@/components/RotatingText";

const products = [
  {
    id: 1,
    name: "Snooker Table",
    img: "/product/snookertable/1.webp",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Pool Table",
    img: "/product/snookertable/p5.webp",
    tag: "Best Seller",
  },
  {
    id: 3,
    name: "Soccer Table",
    img: "/product/soccertable/2.webp",
    tag: "New",
  },
  {
    id: 4,
    name: "Snooker Cue",
    img: "/product/billiardstick/3.webp",
    tag: "New",
  },
  {
    id: 5,
    name: "Cue Case",
    img: "/product/cuecase/2.webp",
    tag: "Editor’s Pick",
  },
];

export default function PremiumProductSlider() {
  return (
    <section className="bg-[#f9f8f5] py-12 sm:py-16 px-4 sm:px-6">

      <div className="max-w-7xl mb-12 mx-auto">
        <p className="tracking-widest text-xs font-semibold text-yellow-500 uppercase">
          Featured Collection
        </p>

        <h2 className="mt-3 text-2xl text-black sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          PM Billiard{" "}
          <RotatingText
            texts={[
              "Snooker Tables",
              "Snooker Cues",
              "Accessories",
              "Cue Cases",
              "Snooker Balls",
            ]}
            mainClassName="inline-block px-2 sm:px-3 bg-[#EDBC41] text-black rounded-lg ml-2"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 28, stiffness: 380 }}
            rotationInterval={2200}
          />
        </h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        
        }}
        className="max-w-7xl mx-auto "
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="bg-white border border-gray-200 rounded-3xl p-3 shadow-md hover:shadow-xl transition">

              <div className="relative">
                <span className="absolute top-3 left-3 bg-[#2F8F6B] text-white text-xs px-3 py-1 rounded-full">
                  {p.tag}
                </span>

                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-80 object-contain rounded-2xl"
                />
              </div>

              <h3 className="text-lg font-semibold mt-4 text-black">
                {p.name}
              </h3>

              <button className="mt-4 w-full bg-[#2F8F6B] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-[#256f55] transition">
                Explore Product
              </button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}