"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import RotatingText from "@/components/RotatingText";

const products = [
  { 
    id: 1, 
    name: "Snooker Table", 
    desc: "Tournament-grade slate bed with precision leveling for smooth, professional gameplay.", 
    img: "/product/snookertable/1.webp", 
    tag: "Best Seller" 
  },

  { 
    id: 2, 
    name: "Pool Table", 
    desc: "Premium hardwood construction designed for durability, balance, and luxury performance.", 
    img: "/product/snookertable/p5.webp", 
    tag: "Best Seller" 
  },

  { 
    id: 3, 
    name: "Soccer Table", 
    desc: "Heavy-duty frame with smooth rods for fast-paced, competitive foosball matches.", 
    img: "/product/soccertable/2.webp", 
    tag: "New" 
  },

  { 
    id: 4, 
    name: "Snooker Cue", 
    desc: "Engineered for accuracy with superior grip and balanced weight control.", 
    img: "/product/billiardstick/3.webp", 
    tag: "New" 
  },

  { 
    id: 5, 
    name: "Cue Case", 
    desc: "Protective premium case crafted for safe storage and easy transport.", 
    img: "/product/cuecase/2.webp", 
    tag: "Editor’s Pick" 
  },
];

export default function PremiumProductSlider() {
  return (
<section className="bg-[#1A1A1A] relative py-12 sm:py-16 lg:py-18 px-4 sm:px-6 overflow-hidden">

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

<div className="relative z-10 max-w-7xl mb-12 mx-auto flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

<div>
<p className="tracking-widest text-xs font-semibold text-yellow-500 uppercase">
Featured Collection
</p>

<h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
PM Billiard{" "}
<RotatingText
texts={[
"Snooker Tables",
"Snooker Cues",
"Accessories",
"Snooker Table Cloth",
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

<button className="capitalize border-2 border-yellow-500 px-4 sm:px-6 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-black transition md:self-end text-sm sm:text-base">
explore all products
</button>

</div>

<Swiper
modules={[Pagination, Autoplay, EffectCoverflow]}
effect="coverflow"
centeredSlides={true}
loop={true}
autoplay={{ delay: 3200, disableOnInteraction: false }}
coverflowEffect={{
rotate: 0,
stretch: 0,
depth: 80,
modifier: 1.5,
slideShadows: false,
}}
pagination={{ clickable: true }}
breakpoints={{
0: { slidesPerView: 1.1, spaceBetween: 12, coverflowEffect: { depth: 60 } },
480: { slidesPerView: 1.3, spaceBetween: 16, coverflowEffect: { depth: 70 } },
640: { slidesPerView: 1.4, spaceBetween: 20, coverflowEffect: { depth: 90 } },
768: { slidesPerView: 2, spaceBetween: 28, coverflowEffect: { depth: 120 } },
1024: { slidesPerView: 2.4, spaceBetween: 40, coverflowEffect: { depth: 140 } },
}}
className="max-w-7xl mx-auto"
>

{products.map((p) => (
<SwiperSlide key={p.id}>
<div className="bg-white border border-[#E3F2EC] rounded-3xl p-2  shadow-xl transition-all duration-400 hover:scale-[1.03] hover:shadow-2xl">

<div className="relative">
<span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#2F8F6B] text-white text-xs px-3 py-1 rounded-full">
{p.tag}
</span>

<img
src={p.img}
alt={p.name}
className="w-full h-48 sm:h-60 md:h-82 object-cover rounded-2xl"
/>
</div>

<h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-5 text-[#1F5F48]">
{p.name}
</h3>



<button className="mt-5 w-full bg-[#2F8F6B] text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium hover:bg-[#256f55] transition">
Explore Product
</button>

</div>
</SwiperSlide>
))}

</Swiper>

</section>
);
}
