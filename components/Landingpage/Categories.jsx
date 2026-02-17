const categories = [
  {
    title: "snooker ball",
    imagebg: "/try/1-1.avif",
    icon: "/try/1.png",
  },
  {
    title: "snooker table",
    imagebg: "/try/2-2.jpg",
    icon: "/try/2.webp",
  },
  {
    title: "Snooker cue",
  imagebg: "/try/4-4.jpg",
    icon: "/try/3.png",
  },
  {
    title: "accessories",
    imagebg: "/try/2-2.jpg",
    icon: "/try/accessories.png",
  },
  {
    title: "snooker table cloth",
    imagebg: "/try/4-4.jpg",
    icon: "/try/5.png",
  },
  {
    title: "cue cases",
    imagebg: "/try/2-2.jpg",
    icon: "/try/6.png",
  },

    {
    title: "cue cases",
    imagebg: "/try/2-2.jpg",
    icon: "/try/soccer.png",
  },
];

export default function CategorySection() {
  return (
    <section className="w-full">


  <div className="text-center my-10 px-6">
    <h2 className="text-black text-4xl md:text-5xl font-bold tracking-tight">
      Explore Our Collection
    </h2>
    <p className="text-black mt-4 max-w-2xl mx-auto text-lg">
      Professional-grade equipment and handcraf ted tables designed for players,
      clubs, and luxury game rooms.
    </p>
  </div>

      <div className="flex w-full h-[320px] overflow-hidden">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="relative flex-1 group overflow-hidden perspective-[1000px]"
            style={{
              backgroundImage: `url(${cat.imagebg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition duration-300" />

            {/* FRONT IMAGE (3D scale-out effect) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={cat.icon}
                alt={cat.title}
                className="
                  w-60 h-60 object-contain drop-shadow-lg
                  transition-all duration-500 ease-out
                  transform-gpu
                  group-hover:scale-125
                  group-hover:translate-z-[80px]
                  group-hover:-translate-y-2
                "
              />
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p
                className="
                  text-white font-bold  text-lg uppercase
                  transition-all duration-300
                  group-hover:tracking-[0.2em]
                "
              >
                {cat.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

