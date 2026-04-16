"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = ({city}) => {
  const [open, setOpen] = useState(null);
  
  const formattedCity =
  city?.charAt(0).toUpperCase() + city?.slice(1);
 const faqs = [
  {
    q: `What is the price of a billiard table in ${formattedCity}?`,
    a: `The price of a billiard table in ${formattedCity} can vary depending on several factors such as table size, type of wood used, quality of slate, cloth material, and level of customization. Professional-grade tables typically cost more due to their precision engineering and premium components. At PM Billiards, we offer a wide range of options to suit different budgets while ensuring top-quality craftsmanship and long-lasting performance.`,
  },
  {
    q: `Who is the best billiard table manufacturer in ${formattedCity}?`,
    a: `Choosing the right manufacturer is important for durability and gameplay quality. PM Billiards is widely recognized as a reliable billiard table manufacturer in ${city}, known for its expertise, use of premium materials, and attention to detail. Our tables are designed to meet both professional and recreational standards, making us a preferred choice for homes, clubs, and commercial spaces.`,
  },
  {
    q: `Do you provide delivery and installation services in ${formattedCity}?`,
    a: `Yes, we provide complete end-to-end services including safe delivery and professional installation across ${city}. Our experienced team ensures proper table assembly, accurate leveling, and readiness for play. Whether you purchase a billiard table, pool table, or snooker table, we make sure the installation process is smooth and hassle-free.`,
  },
  {
    q: "What is the difference between a pool table and a snooker table?",
    a: "A pool table is generally smaller in size with larger pockets and is commonly used for casual and fast-paced gameplay. In contrast, a snooker table is larger, has smaller pockets, and is designed for more technical and strategic play. The balls and rules also differ between the two games. Choosing the right table depends on your space, skill level, and intended use.",
  },
  {
    q: "Can I customize my billiard, pool, or snooker table?",
    a: "Yes, customization is one of our key offerings. As a leading pool table manufacturer and snooker table manufacturer, we provide options to customize table size, wood finish, cloth color, leg design, and branding. This allows you to match the table perfectly with your interior or commercial setup.",
  },
  {
    q: "How much space is required for installing a pool or billiard table?",
    a: "The space requirement depends on the size of the table and cue length. Ideally, you should have enough clearance around all sides of the table to allow comfortable cue movement. Our team can guide you in selecting the right table size based on your available space to ensure the best playing experience.",
  },
  {
    q: "Do you provide maintenance and after-sales support?",
    a: "Yes, we offer complete after-sales support including table maintenance, re-clothing, leveling adjustments, and repairs. Our goal is to ensure that your billiard table, pool table, or snooker table remains in excellent condition and delivers consistent performance for years.",
  },
  {
    q: `Which areas do you serve in ${formattedCity}?`,
    a: `We provide our services across all major locations in ${formattedCity} including residential, commercial, and recreational spaces. Whether you are setting up a gaming zone at home or installing tables in a club or hotel, we ensure timely delivery and professional service.`,
  },
];

  // Split into two columns manually
  const leftCol = faqs.filter((_, i) => i % 2 === 0);
  const rightCol = faqs.filter((_, i) => i % 2 !== 0);

  const FaqItem = ({ item, index }) => {
    const isOpen = open === index;
    return (
      <div className="bg-white/90 backdrop-blur-md border border-[#EDBC41]/20 rounded-2xl overflow-hidden">
        <button
          onClick={() => setOpen(isOpen ? null : index)}
          className="w-full flex justify-between items-center text-left px-6 py-5 gap-4"
        >
          <span className="text-black font-semibold">{item.q}</span>
          <ChevronDown
            className={`text-[#EDBC41] w-5 h-5 flex-shrink-0 transition-all duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-6 pb-5 text-gray-700 leading-relaxed">{item.a}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full py-10 px-6 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/ctavideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="tracking-[0.3em] text-xs text-[#EDBC41] uppercase mb-3">
            KNOW MORE • GETS BETTER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#EDBC41] mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-column layout, each column is its own accordion stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {/* Left column — even indexed faqs (0,2,4,6) */}
          <div className="flex flex-col gap-3">
            {leftCol.map((item, i) => (
              <FaqItem key={i} item={item} index={i * 2} />
            ))}
          </div>

          {/* Right column — odd indexed faqs (1,3,5,7) */}
          <div className="flex flex-col gap-3">
            {rightCol.map((item, i) => (
              <FaqItem key={i} item={item} index={i * 2 + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;