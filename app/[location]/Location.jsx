"use client";
import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Hero from "@/components/Landingpage/Hero";
import ContactPopup from "@/components/ContactPopup";
import BestSellerSection from "@/components/Landingpage/Bestseller";
import Cta from "./Cta";
import Products from "@/components/Landingpage/Products";
import Faq from "./Faq";
const categories = [
  {
    title: "Snooker Ball",
    imagebg: "/try/1-1.avif",
    icon: "/try/1.png",
    link: "/categories/billiard-balls",
  },
  {
    title: "Snooker Table",
    imagebg: "/try/2-2.jpg",
    icon: "/try/2.webp",
    link: "/categories/snooker-table",
  },
  {
    title: "Snooker Cue",
    imagebg: "/try/4-4.jpg",
    icon: "/try/3.png",
    link: "/categories/snooker-cues",
  },
  {
    title: "Accessories",
    imagebg: "/try/2-2.jpg",
    icon: "/try/accessories.png",
    link: "/categories/billiards-accessories",
  },
  {
    title: "Table Cloth",
    imagebg: "/try/4-4.jpg",
    icon: "/try/5.png",
    link: "/categories/snooker-table-cloth",
  },
  {
    title: "Cue Cases",
    imagebg: "/try/2-2.jpg",
    icon: "/try/6.png",
    link: "/categories/cue-case",
  },
  {
    title: "Foosball Table",
    imagebg: "/try/2-2.jpg",
    icon: "/try/soccer.png",
    link: "/categories/soccer-table",
  },
];

const images = [
  "/clients/15.png",

  "/try/office2.webp",
  "/try/office3.webp",
  "/try/office4.webp",
  "/try/office6.webp",
  "/try/office9.webp",
  "/pm Billards Product/luxuryTable.webp",
  "/try/office11.webp",
  "/try/office9.webp",
];

const Location = ({city}) => {
  
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ContactPopup isOpen={open} onClose={() => setOpen(false)}></ContactPopup>
      {/* herp section */}
      <Hero></Hero>

      {/* expore our Collection */}
      <div className="mt-14">
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
                  <div
                    onClick={() => setOpen(!open)}
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ================= DESKTOP STRIP ================= */}
          <div className="hidden md:flex w-full h-[320px] overflow-hidden">
            {categories.map((cat, i) => (
              <div
                onClick={() => setOpen(!open)}
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
      </div>

      <section className="py-10 px-4 font-sans">
        <div className="relative overflow-hidden bg-[#f9f9f7] rounded-xl p-8">
          {/* Background circles */}
          <div className="absolute top-0 right-0 w-[340px] h-full opacity-5">
            <div className="absolute top-10 right-10 w-40 h-40 bg-green-600 rounded-full"></div>
            <div className="absolute bottom-10 right-20 w-28 h-28 bg-green-600 rounded-full"></div>
          </div>

          {/* Grid */}
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#2f8f6b] border border-green-300 rounded-full px-4 py-1 mb-5">
                <span className="w-2 h-2 bg-white animate-ping rounded-full"></span>
                <span className="text-xs font-medium text-white uppercase">
                  Trusted in Delhi since years
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4 leading-snug">
                PM Billiards — <br />
                Pool, Snooker & Billiard Table Experts
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Precision-crafted billiard, pool, and snooker tables built for
                homes, clubs, hotels, and commercial spaces. Professional
                standards meet elegant design in every table we make.
              </p>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap">
                <button className="bg-[#2f8f6b] text-white px-5 py-2 rounded-lg text-sm">
                  Learn more →
                </button>
                <Link
                  href={"/products"}
                  className="border border-gray-300 px-5 py-2 rounded-lg text-sm"
                >
                  View products
                </Link>
              </div>
            </div>

            {/* RIGHT - FEATURES */}
            <div className="flex flex-col gap-3">
              {/* Feature 1 */}
              <div className="bg-white border h-[120px] rounded-xl p-5 flex gap-3 hover:bg-slate-100/90 group hover:scale-102 transition-all">
                <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-400">
                  ✓
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    Custom billiard tables
                  </p>
                  <p className="text-md text-gray-600">
                    Tailored to your exact dimensions, finish, and style
                    preferences.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white border h-[120px] rounded-xl p-5 flex gap-3 hover:bg-slate-100/90 group hover:scale-102 transition-all">
                <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-400">
                  ✓
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    Professional snooker tables
                  </p>
                  <p className="text-md text-gray-600">
                    Tournament-grade quality, smooth gameplay, long-lasting
                    performance.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white h-[120px] border rounded-xl p-5 flex items-center gap-3 hover:bg-slate-100/90 group hover:scale-102 transition-all">
                <div className="w-9 h-9 bg-green-100 rounded-full  flex items-center justify-center group-hover:bg-green-400">
                  ★
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    Premium pool tables
                  </p>
                  <p className="text-md text-gray-600">
                    Top-grade materials and elegant finishes for any space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-10 pt-6 border-t flex flex-wrap gap-6">
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-md text-gray-500">Tables delivered</p>
            </div>

            <div className="hidden md:block w-px bg-gray-200"></div>

            <div>
              <p className="text-2xl font-bold">15+</p>
              <p className="text-md text-gray-500">Years of experience</p>
            </div>

            <div className="hidden md:block w-px bg-gray-200"></div>

            

            

            
          </div>
        </div>
      </section>

      <BestSellerSection></BestSellerSection>

      <div>
        <section className="w-full bg-center bg-cover py-5 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-18 items-center">
            {/* LEFT — TEXT CONTENT */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight px-2">
                Why Choose PM Billiards as Billiard Table in <span className="capitalize">{city}</span>
              </h2>

              <p className="text-black px-2">
                Choosing the right manufacturer is crucial when investing in a
                premium gaming table. PM Billiards stands out as a trusted
                billiard table manufacturer in <span className="capitalize">{city}</span> known for quality,
                precision, and reliability. We combine skilled craftsmanship
                with modern manufacturing techniques to deliver tables that
                offer excellent performance and long-lasting durability for both
                professional and recreational users.
              </p>

              <div className="grid grid-cols-2 md:gap-6 gap-2 mt-6">
                <div className="bg-yellow-100 p-5 rounded-2xl shadow-sm">
                  <h3 className="font-semibold text-lg text-black">
                    Experienced Manufacturer
                  </h3>
                  <p className="text-sm text-black mt-2">
                    Years of industry experience and a strong reputation for
                    delivering international-standard billiard tables.
                  </p>
                </div>

                <div className="bg-green-100 p-5 rounded-2xl shadow-sm">
                  <h3 className="font-semibold text-lg text-black">
                    Premium Materials
                  </h3>
                  <p className="text-sm text-black mt-2">
                    High-quality hardwood, slate, and professional cloth for
                    smooth gameplay and durability.
                  </p>
                </div>

                <div className="bg-green-100 p-5 rounded-2xl shadow-sm">
                  <h3 className="font-semibold text-lg text-black">
                    Customization Options
                  </h3>
                  <p className="text-sm text-black mt-2">
                    Fully customized tables in size, design, finish, and
                    branding to match your space and needs.
                  </p>
                </div>

                <div className="bg-yellow-100 p-5 rounded-2xl shadow-sm">
                  <h3 className="font-semibold text-lg text-black">
                    Professional Installation
                  </h3>
                  <p className="text-sm text-black mt-2">
                    Complete delivery and expert installation with perfect
                    leveling for a ready-to-play experience.
                  </p>
                </div>

                <div className="bg-yellow-100 p-5 rounded-2xl shadow-sm">
                  <h3 className="font-semibold text-lg text-black">
                    Competitive Pricing
                  </h3>
                  <p className="text-sm text-black mt-2">
                    Best value for premium quality tables as a leading
                    manufacturer in <span className="capitalize">{city}</span>.
                  </p>
                </div>

                <div className="bg-green-100 p-5 rounded-2xl shadow-sm">
                  <h3 className="font-semibold text-lg text-black">
                    After-Sales Support
                  </h3>
                  <p className="text-sm text-black mt-2">
                    Reliable maintenance, cloth replacement, and long-term
                    service support.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — IMAGE SLIDER */}
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
                    <div className="w-full h-[500px] md:h-[600px] relative">
                      <Image
                        src={src}
                        alt="PM Billiards table"
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <p className="font-semibold text-black mt-5 text-xl md:text-2xl text-center">
                Trusted by clubs, academies, gaming centers, and professional
                players.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Cta city={city}></Cta>

      <Products></Products>

      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-16 md:py-24 flex-col md:flex-row items-center gap-10">
          {/* CONTENT */}
          <div
            className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center 
    transition-all duration-500 ease-in-out hover:-translate-y-1"
          >
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight transition-all duration-300">
              Pool Table Manufacturer in <span className="capitalize">{city}</span>
            </h1>

            <p className="mb-8 leading-relaxed text-black/90 text-sm md:text-base lg:text-xl text-base/6 transition-all duration-300">
              PM Billiards is a reliable pool table manufacturer in <span className="capitalize">{city}</span>, known
              for delivering stylish and durable pool tables for modern spaces.
              Whether you are setting up a home gaming area or a commercial
              entertainment zone, our pool tables are designed to provide a
              perfect balance of performance and design.
            </p>
          </div>

          {/* IMAGE */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full overflow-hidden rounded-xl">
            <img
              className="object-cover object-center rounded-xl w-full h-[300px] md:h-[400px] 
        transition-all duration-500 ease-in-out hover:scale-105"
              alt="Pool Table"
              src="/try/office1.webp"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-16 md:py-24 flex-col md:flex-row items-center gap-10">
          {/* IMAGE */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full overflow-hidden rounded-xl">
            <img
              className="object-cover object-center w-full h-[300px] md:h-[400px] rounded-xl 
        transition-all duration-500 ease-in-out hover:scale-105"
              alt="cta"
              src="/try/office4.webp"
            />
          </div>

          {/* CONTENT */}
          <div
            className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center
    transition-all duration-500 ease-in-out hover:-translate-y-1"
          >
            <h1
              className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight
      transition-all duration-300"
            >
              Snooker Table Manufacturer in <span className="capitalize">{city}</span> 
            </h1>

            <p
              className="mb-8 leading-relaxed text-black/90 text-sm md:text-base lg:text-xl text-base/6
      transition-all duration-300"
            >
              We are a trusted snooker table supplier in <span className="capitalize">{city}</span>  committed to
              quality and excellence. Using premium slate beds, high-grade baize
              cloth, and expertly designed cushions, we ensure every snooker
              table meets professional standards. Our team also provides
              customization and installation services across <span className="capitalize">{city}</span>, making us a
              preferred choice for snooker tables.
            </p>

            
          </div>
        </div>
      </section>

      <Faq city={city}></Faq>
    </div>
  );
};

export default Location;
