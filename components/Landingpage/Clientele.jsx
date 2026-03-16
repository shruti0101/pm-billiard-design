"use client";

import Image from "next/image";

const clientsele = [
  { name: "Royal Snooker Club", logo: "/clients/15.png" },
  { name: "Elite Billiards", logo: "/clients/16.png" },
  { name: "Cue Masters", logo: "/clients/1.png" },
  { name: "Pro Table Arena", logo: "/clients/2.png" },
  { name: "Champion Cue Club", logo: "/clients/3.png" },
  { name: "Ace Snooker Lounge", logo: "/clients/4.png" },
  { name: "Premium Cue House", logo: "/clients/5.png" },
  { name: "Grand Billiards", logo: "/clients/6.png" },
  { name: "Snooker Palace", logo: "/clients/7.png" },
  { name: "Cue Sports Hub", logo: "/clients/8.png" },
  { name: "Victory Tables", logo: "/clients/9.png" },
  { name: "Legend Snooker Club", logo: "/clients/11.png" },
  { name: "Cue Craft Arena", logo: "/clients/12.png" },
  { name: "Supreme Billiards", logo: "/clients/13.png" },

];

export default function Ourclientsele() {
  return (
    <section className="py-14 bg-yellow-50">
      <div className="w-full mx-auto px-10">

        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-amber-500">Clients</span>
          </h2>

          <p className="mt-3 text-gray-700 leading-relaxed">
            Trusted by clubs, academies, and professional players for manufacturing
            premium-quality snooker tables crafted with precision, durability,
            and superior playing performance.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-10">
          {clientsele.map((client, i) => (
            <div key={i} className="flex flex-col items-center text-center group">

              {/* Logo Card */}
              <div className="w-full h-24 flex items-center justify-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Name Below Card */}
              <p className="mt-6 text-md font-medium text-gray-700">
                {client.name}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}