"use client";
export const dynamic = "force-dynamic";
import React from "react";
import Image from "next/image";


const AboutPage = () => {
  return (
    <div className=" text-white">

      {/* ===== HERO BANNER ===== */}
      <div
        className="relative h-[45vh] md:h-[100vh] flex items-center justify-center text-center bg-cover  overflow-hidden"
        style={{ backgroundImage: "url('/try/try11.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-6 max-w-5xl">
          <div className="mx-auto mb-4 h-[2px] w-20 bg-[#EDBC41] rounded-full" />

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white">
            About PM Billiards
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Crafting championship-grade snooker, pool, and billiard tables that
            blend precision engineering, timeless design, and elite performance.
          </p>
        </div>
      </div>

      {/* ===== INTRO SECTION ===== */}
      <section style={{backgroundImage:"url(/mask-frame.png)"}} className="w-full bg-gray-200  bg-cover py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-4xl font-semibold text-[#EDBC41]">
              About PM Billiards
            </h1>

            <p className="mt-3 text-black text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
            At <strong>PM Billiards,</strong>  we are passionate about crafting the finest billiard tables in the world. Founded with a vision to redefine premium cue sports furniture, we combine traditional craftsmanship with modern engineering to deliver tables that excel in performance, durability, and luxury aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold text-[#EDBC41] mb-5">
                Masters of Precision Craft
              </h2>

              <p className="text-black leading-relaxed mb-4">
              Every <strong>PM Billiards</strong>  table is engineered for perfection—from home lounges to professional arenas. We use tournament-grade materials, precision slate beds, reinforced hardwood frames, and professional cloth to ensure <strong>flawless leveling, smooth ball roll, and consistent rebound for competitive gameplay.</strong> 
Whether you are a serious competitor or a luxury enthusiast, our <strong>snooker tables</strong>  are designed to exceed expectations in both aesthetics and performance.
              </p>

              <p className="text-black leading-relaxed mb-4">
                Every table is built on precision slate beds, reinforced hardwood frames,
                and professional cloth — ensuring flawless leveling, smooth ball roll,
                and consistent rebound for competitive gameplay.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-3  mt-6 text-center md:text-left">
                <div>
                  <h3 className="text-2xl font-semibold text-[#EDBC41]">1,200+</h3>
                  <p className="text-black text-sm">Tables Delivered</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#EDBC41]">20+</h3>
                  <p className="text-black text-sm">Years of Expertise</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#EDBC41]">900+</h3>
                  <p className="text-black text-sm">Satisfied Clients</p>
                </div>
              </div>
            </div>

          <div className="relative w-full h-[420px]">
            <Image
              src="/unnamed.png"
              alt="Luxury Snooker Lounge"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>


          </div>
        </div>
      </section>

{/* ===== WHY CHOOSE US ===== */}
<section 
  style={{ backgroundImage: "url('/try/bgcheck.avif')" }} 
  className="w-full bg-center bg-cover relative bg-fixed py-12 md:py-14"
>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40 z-10" />

  <div className="max-w-7xl mx-auto px-6 relative z-20">

    <div className="text-center max-w-3xl mx-auto mb-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-white">
Why Choose <span className="text-yellow-500">PM Billiards</span>  as a Pool Table
      </h2>
      <p className="my-2 text-white text-sm  leading-relaxed">
      At PM Billiards, we pride ourselves on blending expert craftsmanship, precision engineering, and luxury design to create Billiard Tables that deliver flawless performance and elevate any space. Our products are designed for both enthusiasts and professional players, ensuring smooth gameplay, durability, and elegance.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-[#0B1511] p-8 rounded-xl border border-[#EDBC41]/30 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-[#EDBC41] mb-3">
          Tournament Quality
        </h3>
        <p className="text-white/85 text-sm leading-relaxed">
        Our Pool Tables are built to international competition standards, featuring precision slate, professional-grade cloth, and expert construction for consistent, high-level performance.
        </p>
      </div>

      <div className="bg-[#0B1511] p-8 rounded-xl border border-[#EDBC41]/30 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-[#EDBC41] mb-3">
          Luxury Craftsmanship
        </h3>
        <p className="text-white/85 text-sm leading-relaxed">
        Every Billiard Table is hand-finished using premium hardwood frames and materials, combining durability with timeless elegance.
        </p>
      </div>

      <div className="bg-[#0B1511] p-8 rounded-xl border border-[#EDBC41]/30 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-[#EDBC41] mb-3">
          Custom Design
        </h3>
        <p className="text-white/85 text-sm leading-relaxed">
         We offer customizable Snooker Tables, allowing you to select size, finish, cloth color, pocket style, and branding to perfectly match your space.
        </p>
      </div>

      <div className="bg-[#0B1511] p-8 rounded-xl border border-[#EDBC41]/30 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-[#EDBC41] mb-3">
          Expert Installation
        </h3>
        <p className="text-white/85 text-sm leading-relaxed">
         Our team provides professional setup, leveling, and long-term maintenance support, ensuring your table performs perfectly for years to come.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* ===== OUR VISION ===== */}
     <section className="relative bg-[#F6FBF9] py-20 px-6 overflow-hidden">

      {/* Soft premium glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0c704b] blur-[180px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          <div className="relative w-full h-[420px]">
            <Image
              src="/try/try12.jpg"
              alt="Luxury Snooker Lounge"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#EDBC41] mb-4">
              Our Vision
            </h2>

            <p className="text-black leading-7 mb-4">
          Our mission is to set the global benchmark for premium cue sports tables—blending <strong>tradition, precision, and modern design.</strong>  We aim to create game tables that are more than just furniture; they are centerpieces of <strong>entertainment, competition, and luxury living.</strong> 
With the expertise of our craftsmen and engineers, we continuously innovate and refine our designs, ensuring every <strong>snooker table</strong>  delivers world-class performance and timeless elegance.
            </p>

            <p className="text-black leading-7 mb-4">
              We aim to create game tables that are not just furniture, but centerpieces
              of entertainment, competition, and luxury living.
            </p>

            <p className="text-black leading-7">
              With expert craftsmen and engineers, we continue to innovate and refine our
              designs — ensuring every PM Billiards table delivers world-class performance
              and timeless elegance.
            </p>
          </div>

        </div>
      </section>

    
{/* our mission */}


     <section className="relative bg-[#F6FBF9] py-15 px-6 overflow-hidden">

      {/* Soft premium glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0c704b] blur-[180px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

         

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#EDBC41] mb-4">
              Our Mission
            </h2>

            <p className="text-black leading-7 mb-4">
         Our mission is to craft the finest cue sports tables that combine exceptional performance, exquisite craftsmanship, and sophisticated design. We are dedicated to enhancing the experience of every player, from casual enthusiasts to professional competitors, by delivering tables that inspire passion, precision, and enjoyment.
Through innovation, attention to detail, and a commitment to quality, we strive to create game tables that are not just functional, but iconic pieces of luxury that elevate any space and define the standard for excellence in cue sports worldwide.
            </p>


            <p className="text-black leading-7">
              With expert craftsmen and engineers, we continue to innovate and refine our
              designs — ensuring every PM Billiards table delivers world-class performance
              and timeless elegance.
            </p>
          </div>


 <div className="relative w-full h-[420px]">
            <Image
              src="/try/try11.webp"
              alt="Luxury Snooker Lounge"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>


        </div>
      </section>
    </div>
  );
};

export default AboutPage;
