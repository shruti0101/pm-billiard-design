"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const clientele = [
  { name: "ABC Corporate", logo: "/client/1.webp" },
  { name: "TechNova Solutions", logo: "/client/2.webp" },
  { name: "Workspace Hub", logo: "/client/3.webp" },
  { name: "EduSmart Group", logo: "/client/4.webp" },
  { name: "HealthPlus Clinics", logo: "/client/5.webp" },
  // { name: "GovBuild PSU", logo: "/clientele/brand-34.webp" },
  { name: "GovBuild PSU", logo: "/client/6.webp" },
  { name: "GovBuild PSU", logo: "/client/7.webp" },
  { name: "GovBuild PSU", logo: "/client/8.webp" },
  { name: "GovBuild PSU", logo:"/client/9.webp" },
  { name: "GovBuild PSU", logo:"/client/15.webp" },
  { name: "GovBuild PSU", logo: "/client/11.webp" },
  { name: "GovBuild PSU", logo: "/client/12.webp" },
  { name: "GovBuild PSU", logo: "/client/13.webp" },
  { name: "GovBuild PSU", logo: "/client/14.webp" },
    { name: "GovBuild PSU", logo: "/client/16.webp" },
      { name: "GovBuild PSU", logo: "/client/17.webp" },
          { name: "GovBuild PSU", logo: "/client/18.webp" },
              { name: "GovBuild PSU", logo: "/client/19.webp" },
];

export default function OurClientele() {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-amber-500">Clientele</span>
          </h2>
          <p className="mt-2 text-black leading-relaxed">
            Trusted by leading brands and institutions for premium,
            high-performance office furniture solutions.
          </p>
        </div>

        {/* Continuous Slider */}
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
          className="clientele-swiper"
        >
          {clientele.map((client, i) => (
            <SwiperSlide key={i}>
              <div className="h-28 flex items-center justify-center rounded-xl bg-white/70 backdrop-blur border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-white">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    
    </section>
  );
}
