import React from "react";
import ElectricBorder from "@/components/ElectricBorder";

const About = () => {
  return (
    <div>
      <>
        {/* about */}

        <section
          style={{ backgroundImage: "url(/zigzag.webp)" }}
          className="relative w-full bg-center bg-cover text-white overflow-hidden"
        >
          <div className="relative max-w-[1400px] mx-auto px-5 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* ================= LEFT ================= */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#111] border border-[#222] text-xs sm:text-sm">
                  ✨ Premium craftsmanship
                </span>

                <span className="px-3 py-1 rounded-full bg-[#111] border border-[#222] text-xs sm:text-sm">
                  Expert installation
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-5">
                PM Billiards – <br />
                <span className="text-[#f5c243]">
                  Premium Pool Tables, Snooker Tables & Billiard Tables.
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg mb-8 leading-relaxed">
                Welcome to PM Billiards, your trusted destination for premium
                Pool Tables, Snooker Tables, and Billiard Tables designed for
                homes, clubs, resorts, and professional gaming arenas.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button className="bg-[#2f8f6b] px-5 py-3 rounded-full text-white text-sm">
                  Explore our journey →
                </button>

                <button className="border border-[#E0AE2E] px-5 py-3 rounded-full text-white text-sm">
                  Contact us
                </button>
              </div>
            </div>

            {/* ================= RIGHT CARD ================= */}

            <ElectricBorder>
              <div
                className="relative w-full rounded-[24px] p-5 sm:p-6"
                style={{
                  backgroundImage: "url(/pm-billiard-about.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-b from-[#3c6a4f]/40 to-black/70" />

                <div className="relative">
                  <div className="rounded-[20px] border border-[#8ea97a]/40 bg-gradient-to-b from-[#1f3a2f] to-[#0f1f18] p-4 sm:p-6">
                    <p className="text-xs text-gray-300 mb-2">
                      Our Flagship Product
                    </p>

                    <h3 className="text-lg sm:text-xl text-white mb-3">
                      Professional Tournament Snooker Table
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                      Built to international tournament standards with precision
                      slate and reinforced hardwood frame.
                    </p>

                    <div className="h-px bg-white/10 mb-4" />

                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                      <p className="text-base sm:text-lg text-white">
                        From <span className="text-[#f5c243]">₹2,90,000</span>
                      </p>

                      <button className="bg-[#f5c243] text-black px-5 py-2 rounded-full text-xs sm:text-sm">
                        Explore Tables
                      </button>
                    </div>
                  </div>

                  {/* STATS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                    <div className="rounded-xl bg-gradient-to-b from-[#13251e] to-[#0b1611] p-4">
                      <p className="text-xs text-gray-400 mb-1">
                        Manufacturing Lead Time
                      </p>
                      <p className="text-lg text-white">7–14 days</p>
                    </div>

                    <div className="rounded-xl bg-gradient-to-b from-[#13251e] to-[#0b1611] p-4">
                      <p className="text-xs text-gray-400 mb-1">
                        Professional Setup
                      </p>
                      <p className="text-lg text-white">4–6 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </ElectricBorder>
          </div>
        </section>
      </>
    </div>
  );
};

export default About;
