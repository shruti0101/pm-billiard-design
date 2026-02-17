'use client'

import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Whychoose = () => {

 const images = [
 
    "/try/office2.webp",
   "/try/office3.webp",
    "/try/office4.webp",
           "/try/office6.webp",
                "/try/office9.webp",
                 "/try/office8.webp",
                  "/try/office11.webp",
                   "/try/office9.webp",
  ];

  return (
    <div>

<section style={{backgroundImage:"url(/try/whbg.png)"}} className="w-full bg-center bg-cover py-16">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">

    {/* LEFT — TEXT CONTENT */}
    <div className="space-y-6">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
        Why PM Billiards is the Preferred Choice
      </h2>

      <p className="text-white">
        At PM Billiards, we are committed to delivering premium Pool Tables,
        Snooker Tables, and Billiard Tables that meet the highest standards of
        quality, performance, and design. With expert craftsmanship, superior
        materials, and a passion for precision, we have become a trusted choice
        for homes, clubs, and professional gaming spaces.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900">
            Premium Materials & Build
          </h3>
          <p className="text-sm text-black mt-2">
            We use high-grade slate, premium wood, and professional cloth to
            ensure durability, smooth gameplay, and long-term reliability.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900">
            Professional Craftsmanship
          </h3>
          <p className="text-sm text-black mt-2">
            Each table is crafted with precision to ensure perfect leveling,
            accurate rebound, and flawless play.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900">
            Custom-Built Tables
          </h3>
          <p className="text-sm text-black mt-2">
            We build custom Pool, Snooker & Billiard tables tailored to your
            space, style, and requirements.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900">
            Tournament Grade
          </h3>
          <p className="text-sm text-black mt-2">
            Our tables meet professional and club standards for high-performance
            gameplay.
          </p>

        
        </div>



      </div>



    </div>


        {/* RIGHT — IMAGE SLIDER (REPLACES GIF) */}
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="rounded-xl overflow-hidden"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={src}
                  alt="PM Billiards table"
                  width={1200}
                  height={1200}
                  className=" object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="font-semibold text-white mt-7 text-2xl text-center">
            Trusted by clubs, academies, gaming centers, and professional players.
          </p>
        </div>


    

  </div>
</section>


    </div>
  )
}

export default Whychoose