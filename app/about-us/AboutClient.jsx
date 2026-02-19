"use client";
export const dynamic = "force-dynamic";
import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="text-white overflow-x-hidden">

{/* ===== HERO BANNER ===== */}
<div
className="relative min-h-[60vh] sm:min-h-[70vh] md:h-[100vh] flex items-center justify-center text-center bg-cover overflow-hidden"
style={{ backgroundImage: "url('/try/try11.webp')" }}
>
<div className="absolute inset-0 bg-black/40" />

<div className="relative z-10 px-4 sm:px-6 max-w-5xl">
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
<section style={{backgroundImage:"url(/mask-frame.png)"}} className="w-full bg-gray-200 bg-cover py-10 sm:py-12 md:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6">

<div className="text-center mb-10">
<h1 className="text-2xl md:text-4xl font-semibold text-[#EDBC41]">
About PM Billiards
</h1>

<p className="mt-3 text-black text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
At <strong>PM Billiards,</strong> we are passionate about crafting the finest billiard tables in the world. Founded with a vision to redefine premium cue sports furniture, we combine traditional craftsmanship with modern engineering to deliver tables that excel in performance, durability, and luxury aesthetics.
</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

<div>
<h2 className="text-2xl md:text-4xl font-semibold text-[#EDBC41] mb-5">
Masters of Precision Craft
</h2>

<p className="text-black leading-relaxed mb-4">
Every <strong>PM Billiards</strong> table is engineered for perfection—from home lounges to professional arenas. We use tournament-grade materials, precision slate beds, reinforced hardwood frames, and professional cloth to ensure <strong>flawless leveling, smooth ball roll, and consistent rebound for competitive gameplay.</strong>
Whether you are a serious competitor or a luxury enthusiast, our <strong>snooker tables</strong> are designed to exceed expectations in both aesthetics and performance.
</p>

<p className="text-black leading-relaxed mb-4">
Every table is built on precision slate beds, reinforced hardwood frames,
and professional cloth — ensuring flawless leveling, smooth ball roll,
and consistent rebound for competitive gameplay.
</p>

<div className="grid grid-cols-1 sm:grid-cols-3 mt-6 text-center md:text-left gap-4">
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

<div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px]">
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
className="w-full bg-center bg-cover relative py-10 sm:py-12 md:py-14 lg:bg-fixed"
>
<div className="absolute inset-0 bg-black/40 z-10" />

<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">

<div className="text-center max-w-3xl mx-auto mb-10">
<h2 className="text-2xl md:text-4xl font-semibold text-white">
Why Choose <span className="text-yellow-500">PM Billiards</span> as a Pool Table
</h2>
<p className="my-2 text-white text-sm leading-relaxed">
At PM Billiards, we pride ourselves on blending expert craftsmanship, precision engineering, and luxury design to create Billiard Tables that deliver flawless performance and elevate any space.
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

{["Tournament Quality","Luxury Craftsmanship","Custom Design","Expert Installation"].map((t,i)=>(
<div key={i} className="bg-[#0B1511] p-6 sm:p-8 rounded-xl border border-[#EDBC41]/30 hover:shadow-lg transition">
<h3 className="text-lg font-semibold text-[#EDBC41] mb-3">{t}</h3>
<p className="text-white/85 text-sm leading-relaxed">
Our Pool Tables are built to international competition standards, featuring precision slate, professional-grade cloth, and expert construction for consistent performance.
</p>
</div>
))}

</div>
</div>
</section>

{/* ===== OUR VISION ===== */}
<section className="relative bg-[#F6FBF9] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

<div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px]">
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
Our mission is to set the global benchmark for premium cue sports tables—blending tradition, precision, and modern design.
</p>

<p className="text-black leading-7 mb-4">
We aim to create game tables that are not just furniture, but centerpieces of entertainment, competition, and luxury living.
</p>

<p className="text-black leading-7">
With expert craftsmen and engineers, we continue to innovate and refine our designs — ensuring every PM Billiards table delivers world-class performance.
</p>
</div>

</div>
</section>

{/* ===== OUR MISSION ===== */}
<section className="relative bg-[#F6FBF9] py-12 sm:py-14 lg:py-16 px-4 sm:px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-[#EDBC41] mb-4">
Our Mission
</h2>

<p className="text-black leading-7 mb-4">
Our mission is to craft the finest cue sports tables that combine exceptional performance, exquisite craftsmanship, and sophisticated design.
</p>

<p className="text-black leading-7">
With expert craftsmen and engineers, we continue to innovate and refine our designs — ensuring every PM Billiards table delivers world-class performance.
</p>
</div>

<div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px]">
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
