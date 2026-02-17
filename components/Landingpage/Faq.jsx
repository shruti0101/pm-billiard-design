"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of tables does PM Billiards manufacture and sell?",
    a: "PM Billiards specializes in premium Pool Tables, Snooker Tables, and Billiard Tables for homes, clubs, resorts, commercial gaming centers, and professional tournament venues. Our collection includes modern, classic, luxury, and fully custom-built tables crafted for performance, durability, and refined aesthetics."
  },
  {
    q: "Are your Pool Tables suitable for professional play?",
    a: "Yes. Our Pool Tables are built to professional standards with precision slate beds, tournament-grade cloth, high-quality cushions, and solid hardwood frames — ensuring smooth ball roll, accurate rebound, perfect leveling, and long-term reliability."
  },
  {
    q: "Do your Snooker Tables meet tournament standards?",
    a: "Absolutely. Our Snooker Tables are engineered to meet international tournament specifications, featuring premium slate, professional cloth, precision leveling systems, and competition-grade construction for elite gameplay."
  },
  {
    q: "Can I customize my table?",
    a: "Yes. You can customize table size, design, wood finish, cloth color, pocket style, branding, and accessories to match your space, interior design, and playing preferences."
  },
  {
    q: "What materials are used in your tables?",
    a: "We use high-grade natural slate beds, solid hardwood frames, professional-grade cloth, precision rubber cushions, and premium finishing materials to ensure superior durability and flawless gameplay."
  },
  {
    q: "Do you provide delivery and installation?",
    a: "Yes. Our expert technicians handle complete delivery, professional installation, precise leveling, cloth fitting, and final quality checks to guarantee optimal performance."
  },
  {
    q: "Do you offer maintenance and repairs?",
    a: "Yes. We provide re-clothing, leveling, cushion replacement, structural repairs, polishing, and ongoing maintenance to keep your table in pristine condition."
  },
  {
    q: "Are your tables suitable for home and commercial use?",
    a: "Yes. Our tables are ideal for home game rooms, sports clubs, resorts, hotels, gaming lounges, snooker academies, and professional arenas."
  }
];

export default function PMBilliardsFAQ() {
  const [open, setOpen] = useState(null);

return (
  <section className="relative w-full py-10 px-6 overflow-hidden">

    {/* ===== VIDEO BACKGROUND ===== */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/ctavideo.mp4" type="video/mp4" />
    </video>

    {/* ===== DARK + BRAND OVERLAY (so text is readable) ===== */}
    <div
      className="absolute inset-0"
   
    />

    {/* Soft gold glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#EDBC41] blur-[220px] opacity-5"></div>

    {/* ===== CONTENT (must stay above video) ===== */}
    <div className="max-w-5xl mx-auto relative z-10">

      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="tracking-[0.3em] text-xs text-[#EDBC41] uppercase mb-3">
          KNOW MORE • PLAY BETTER
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <div className="w-24 h-1 bg-[#EDBC41] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* FAQ Accordion */}
    {/* FAQ Accordion — TWO COLUMNS */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {faqs.map((item, i) => (
    <div
      key={i}
      className="bg-white/90 backdrop-blur-md border border-[#EDBC41]/15 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(open === i ? null : i)}
        className="w-full flex justify-between items-center text-left px-6 py-5"
      >
        <span className="text-black font-semibold">
          {item.q}
        </span>

        <ChevronDown
          className={`text-[#EDBC41] w-5 h-5 transition-transform ${
            open === i ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 px-6 ${
          open === i ? "pb-5 max-h-60" : "max-h-0 overflow-hidden"
        }`}
      >
        <p className="text-black leading-relaxed">
          {item.a}
        </p>
      </div>
    </div>
  ))}
</div>


    </div>
  </section>
);

}
