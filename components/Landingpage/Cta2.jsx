export default function HighQualityBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto my-10 rounded-2xl overflow-hidden shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3">

        {/* LEFT IMAGE */}
        <div className="md:col-span-1">
          <img
            src="/try/count.jpg"
            alt="Tennis action"
            className="w-full h-full object-contain"
          />
        </div>

        {/* RIGHT GREEN PANEL */}
        <div className="md:col-span-2 bg-[#1FA67A] relative p-10 flex items-center">
          
          {/* Subtle pattern dots */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff15_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>

          <div className="relative w-full flex justify-between items-center gap-8">
            
            {/* TEXT CONTENT */}
            <div>
              <h2 className="text-3xl font-bold text-white">
                High Quality Standards
              </h2>

              <p className="text-white/80 mt-2 max-w-md">
                Innovative design services that bring your creative visions to life.
              </p>
            </div>

            {/* SLANTED CTA BUTTON */}
            <button
              className="
              relative
              px-10 py-3
              bg-[#F4A31A]
              text-white
              font-semibold
              tracking-wide
              uppercase
              text-sm
              [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]
              shadow-[0_6px_0_#C87F10]
              hover:translate-y-[2px]
              hover:shadow-[0_4px_0_#C87F10]
              transition-all
              "
            >
              GET STARTED
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
