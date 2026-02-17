"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import RotatingText from "@/components/RotatingText";



const products = [
  {
    id: 1,
    name: "Aurora Headphones",
    desc: "Studio-grade wireless sound",
    img: "/try/office10.webp",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Nebula Watch",
    desc: "Luxury smart timepiece",
    img: "/try/temp.webp",
    tag: "Premium",
  },
  {
    id: 3,
    name: "Zenith Camera",
    desc: "Professional 4K capture",
    img: "/try/temp.jpg",
    tag: "New",
  },
  {
    id: 4,
    name: "Lume Laptop",
    desc: "Ultra-slim performance",
    img: "/try/temp4.jpg",
    tag: "Editor’s Pick",
  },
  {
    id: 5,
    name: "Lume Laptop",
    desc: "Ultra-slim performance",
    img: "/try/temp5.webp",
    tag: "Editor’s Pick",
  },
];

export default function PremiumProductSlider() {
  return (

    <>
    
    
<section className=" bg-[#1A1A1A] relative  py-18 px-6 overflow-hidden">

<div 
  className="absolute inset-0 pointer-events-none opacity-50"
  style={{
    backgroundImage: `
   linear-gradient(to right, rgba(237, 188, 65, 0.18) 2px, transparent 1px),
linear-gradient(to bottom, rgba(237, 188, 65, 0.18) 2px, transparent 1px)

    `,
    backgroundSize: "70px 70px"
  }}
/>



      {/* Soft premium glow */}


      

 <div className="relative z-10">


 <div className="max-w-7xl mb-12 px-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

    <div>
  <p className="tracking-widest text-xs font-semibold text-yellow-500 uppercase">
    Featured Collection
  </p>

  <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
    PM Billiard{" "}
    <RotatingText
      texts={[
        "Snooker Tables",
        "Snooker Cues",
        "Accessories",
        "Snooker Table Cloth",
        "Cue Cases",
        "Snooker balls",
      ]}
      mainClassName="inline-block px-3 bg-[#EDBC41] text-black rounded-lg ml-2"
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


        <div className="flex justify-end mb-4">
<button className="capitalize border-2 border-yellow-500 px-6 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-black transition md:self-end">
  explore all products
</button>

</div>

       

        



      
      </div>
</div>
      

      <Swiper
        modules={[ Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1.1}
        spaceBetween={40}
        loop={true}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 140,
          modifier: 2.2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1.4 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.4 },
        }}
        className="max-w-7xl mx-auto"
      >

        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="bg-white border border-[#E3F2EC] rounded-3xl p-6 shadow-xl transition-all duration-400 hover:scale-[1.03] hover:shadow-2xl">

              <div className="relative">
                <span className="absolute top-4 left-4 bg-[#2F8F6B] text-white text-xs px-3 py-1 rounded-full">
                  {p.tag}
                </span>

                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-72 object-cover rounded-2xl"
                />
              </div>

              <h3 className="text-2xl font-semibold mt-5 text-[#1F5F48]">
                {p.name}
              </h3>

              <p className="text-gray-600 mt-1">{p.desc}</p>

              <button className="mt-5 w-full bg-[#2F8F6B] text-white py-3 rounded-xl font-medium hover:bg-[#256f55] transition">
                Explore Product
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>



    

    </>





  );
}
