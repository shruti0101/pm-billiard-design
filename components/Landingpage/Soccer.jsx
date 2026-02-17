import React from 'react'

const Soccer = () => {
const iconItems = [
  {
    label: "CHOOSE YOUR TABLE",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
  {
    label: "PROFESSIONAL QUALITY",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
        <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z" />
      </svg>
    ),
  },
  {
    label: "TOURNAMENT STANDARD",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
        <path d="M8 4h8v8H8z" />
        <path d="M12 12v8" />
      </svg>
    ),
  },
];


  return (
    <div>
<section className="w-full h-[700px] flex overflow-hidden relative">

  {/* FULL BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{ backgroundImage: "url('/try/try2.jpg')" }}
  />

  {/* SOFT OVERLAY */}
  <div className="absolute inset-0 bg-black/10" />

  {/* CONTENT LAYER */}
  <div className="relative w-full h-full flex">

    {/* LEFT GLASS PANEL (TEXT SIDE) */}
    <div className="w-1/2 h-full relative backdrop-blur-md bg-[#008065]/45 text-white px-16 py-20 flex flex-col justify-center">

      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[url('/blue-texture.png')] opacity-20" />

      <div className="relative max-w-[600px]">

        {/* ICON ROW */}
        <div className="flex items-center gap-10 mb-10">
          {iconItems.map((item, i) => (
            <div key={i} className="flex flex-col items-start gap-2">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm">
                {item.icon}
              </div>
              <p className="text-xs tracking-widest font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* MAIN HEADING */}
        <h1 className="text-4xl font-bold leading-tight mb-6">
          PREMIUM CRAFTED  
          <br />
          BILLIARDS, POOL & SNOOKER  
          <br />
          TABLES FOR EVERY SPACE
        </h1>

        <div className="w-16 h-1 bg-white mb-6" />

        {/* DESCRIPTION */}
        <p className="text-base leading-relaxed mb-10 max-w-lg">
          PM Billiards is a leading manufacturer of premium Pool Tables,
          professional Snooker Tables, and classic Billiard Tables designed for
          homes, clubs, resorts, and competitive gaming arenas. Every table is
          engineered with precision, high-quality materials, and expert
          craftsmanship to deliver superior gameplay, perfect leveling, and
          long-term durability.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-6">
          <button className="border border-white px-8 py-3 text-sm font-semibold hover:bg-white hover:text-[#008065] transition">
            EXPLORE TABLES
          </button>

          <button className="border border-white px-8 py-3 text-sm font-semibold hover:bg-white hover:text-[#008065] transition">
            CONTACT US
          </button>
        </div>

      </div>
    </div>

  </div>
</section>


<section style={{backgroundImage:"url(/try/manu.png)"}} className='bg-center bg-cover h-[55vh] bg-fixed'></section>

</div>
  )
}

export default Soccer