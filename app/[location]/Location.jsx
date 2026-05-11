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
import Cta from "./Cta";
import Products from "@/components/Landingpage/Products";
import Faq from "./Faq";
import BestSellerSection from "./Best";
import Categories from "@/components/Landingpage/Categories";
import Whychoose from "@/components/Landingpage/Whychoose";




const Location = ({ city }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ContactPopup isOpen={open} onClose={() => setOpen(false)}></ContactPopup>
      {/* herp section */}
      <Hero></Hero>


<Categories/>
   
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

      <BestSellerSection />


<Whychoose/>
    
      <Products></Products>

      <Cta city={city}></Cta>

      

      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-16 md:py-9 flex-col md:flex-row items-center gap-10">
          {/* CONTENT */}
          <div
            className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center 
    transition-all duration-500 ease-in-out hover:-translate-y-1"
          >
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight transition-all duration-300">
              Pool Table Manufacturer in{" "}
              <span className="capitalize">{city}</span>
            </h1>

            <p className="mb-8 leading-relaxed text-black/90 text-sm md:text-base lg:text-xl text-base/6 transition-all duration-300">
              PM Billiards is a reliable pool table manufacturer in{" "}
              <span className="capitalize">{city}</span>, known for delivering
              stylish and durable pool tables for modern spaces. Whether you are
              setting up a home gaming area or a commercial entertainment zone,
              our pool tables are designed to provide a perfect balance of
              performance and design. We use high-quality materials and advanced
              craftsmanship to ensure every table offers smooth gameplay,
              long-lasting durability, and a premium finish. Our collection
              includes a variety of sizes, styles, and customization options to
              match different interiors and user preferences. From elegant
              wooden finishes to modern minimal designs, we provide solutions
              that enhance both aesthetics and functionality. With a strong
              commitment to quality and customer satisfaction, PM Billiards
              ensures reliable service, timely delivery, and professional
              support. Choose us for a superior gaming experience backed by
              precision engineering and attention to detail.
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
        <div className="container mx-auto flex px-5 py-16 md:py-9 flex-col md:flex-row items-center gap-10">
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
              Snooker Table Manufacturer in{" "}
              <span className="capitalize">{city}</span>
            </h1>

            <p
              className="mb-8 leading-relaxed text-black/90 text-sm md:text-base lg:text-xl text-base/6
  transition-all duration-300"
            >
              We are a trusted snooker table supplier in{" "}
              <span className="capitalize">{city}</span> committed to quality
              and excellence. Using premium slate beds, high-grade baize cloth,
              and expertly designed cushions, we ensure every snooker table
              meets professional standards. Our focus on precision engineering
              and fine craftsmanship allows us to deliver tables that provide a
              smooth, consistent, and tournament-level playing experience. We
              offer a wide range of snooker tables suitable for homes, clubs,
              and commercial spaces, with options for customization in size,
              design, and finish. Our team also provides complete installation
              and setup services across{" "}
              <span className="capitalize">{city}</span>, ensuring hassle-free
              delivery and perfect alignment. With reliable after-sales support
              and a strong commitment to customer satisfaction, we have become a
              preferred choice for snooker tables among professionals and
              enthusiasts alike.
            </p>
          </div>
        </div>
      </section>

      <Faq city={city}></Faq>
    </div>
  );
};

export default Location;
