"use client";
import { useState } from "react";

const items = [
  { id: 1, title: "MAIN DEMO", image: "/try/bg2.webp" },
  { id: 2, title: "SHOP", image: "/try/bg3.webp" },
  { id: 3, title: "BLOG", image: "/try/bg1.webp" },
  // { id: 4, title: "PORTFOLIO", image: "/bg4.jpg" },

];

export default function HoverAccordion() {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full bg-cover bg-center h-screen flex overflow-hidden bg-black">
      {items.map((item, index) => {
        const isActive = active === item.id;

        return (
          <div
            key={item.id}
            onMouseEnter={() => setActive(item.id)}
            className={`
              relative h-full cursor-pointer
              transition-all duration-500 ease-in-out
              ${isActive ? "w-[85%]" : "w-[15%]"}
              ${index !== 0 ? "-ml-8" : ""}
            `}
            style={{
              clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
           

          
            <div className="absolute inset-0 -skew-x-6 overflow-hidden">

              {/* Background */}
              <div
                className="absolute inset-0  bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500
                  ${isActive ? "bg-black/20" : "opacity-70"}
                `}
              />






              {/* Title */}
              {/* <div className="absolute inset-0 flex items-center justify-center z-20">
                <h2
                  className={`
                    text-white font-bold tracking-widest
                    transition-all duration-500
                    ${isActive ? "text-6xl" : "text-2xl rotate-90"}
                  `}
                >
                  {item.title}
                </h2>
              </div> */}

            </div>
          </div>
        );
      })}
    </div>
  );
}
