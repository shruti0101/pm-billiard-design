"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";  
import "swiper/css/autoplay";    

const clientsele = [
   { logo: "/clients/15.png" },
    { logo: "/clients/16.png" },
   
  { logo: "/clients/1.png" },
  { logo: "/clients/2.png" },
  { logo: "/clients/3.png" },
  { logo: "/clients/4.png" },
  { logo: "/clients/5.png" },
  { logo: "/clients/6.png" },
  { logo: "/clients/7.png" },
  { logo: "/clients/8.png" },
  { logo: "/clients/9.png" },

  { logo: "/clients/11.png" },
  { logo: "/clients/12.png" },
  { logo: "/clients/13.png" },
  { logo: "/clients/14.png" },

];

export default function Ourclientsele() {
  return (
    <section className="py-10 bg-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-amber-500">Clients</span>
          </h2>
<p className="mt-2 text-black leading-relaxed">
  Trusted by clubs, academies, and professional players for manufacturing
  premium-quality snooker tables crafted with precision, durability,
  and superior playing performance.
</p>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={2.5}
          spaceBetween={40}
          breakpoints={{
            640: { slidesPerView: 3.5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {clientsele.map((clients, i) => (
            <SwiperSlide key={i}>
              <div className="h-38 flex items-center justify-center rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all">
                <Image
                  src={clients.logo}
                  alt="Client Logo"
                  width={150}
                  height={80}
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}