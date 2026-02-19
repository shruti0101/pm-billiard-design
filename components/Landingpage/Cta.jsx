"use client";

import Ballpit from "../Ballpit";

export default function VideoCTA() {
  return (

    <>

  


<section
  style={{ backgroundImage: "" }}
  className="bg-cover bg-center relative w-full h-[80vh] hidden md:flex overflow-hidden  items-center justify-center"
>
  {/* Ballpit */}
  <Ballpit
    count={50}
    gravity={0.01}
    friction={0.992}
    wallBounce={0.65}
    followCursor={false}
    colors={["#E0AE2E", "#2F8F6B","#419576" ]}
    className="absolute inset-0"
    materialParams={{
      metalness: 0.25,
      roughness: 0.08,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
    }}
  />

  {/* Soft Dark Layer for Contrast */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Subtle spotlight behind text */}
  <div className="absolute w-[700px] h-[700px]  blur-[100px] rounded-full" />

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-4xl">
  <h2 className="text-white text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
  Crafted for Champions. <br className="hidden md:block"/> Built for Legacy.
</h2>

   <p className="text-white mt-6 text-lg md:text-xl max-w-2xl mx-auto">
  Discover world-class billiard and snooker tables engineered with precision,
  refined materials, and timeless design — made for professionals, clubs, and luxury spaces.
</p>


    <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
     <button className="bg-[#256F55] text-white px-9 py-3 rounded-full font-semibold hover:scale-105 transition">
  Explore Tables
</button>

<button className="text-[#256F55] border-2 text-lg border-black p-2 rounded-full hover:text-white transition font-medium">
  View Collections →
</button>

    </div>
  </div>
</section>


  
    
    
    </>
  );
}
