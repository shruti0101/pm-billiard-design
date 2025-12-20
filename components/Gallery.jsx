"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// -----------------------------
// Premium Gallery Component
// Features:
// - Next/Image with lazy loading & responsive sizes
// - Animated category tabs with underline
// - Search + sort
// - Staggered animated grid (framer-motion)
// - Hover overlay with CTA
// - Lightbox modal (fullscreen) with prev/next keyboard nav
// - "All" shows first 8 images with Load more button
// -----------------------------

const categories = [
  "All",
  "Modular Office Workstation",
  "Office Workstation",
  "Meeting And Conference Room Table",
  "Computer Table",
  "Wooden Storage Unit",
  "Office Chair"
];

const items = [
  { id: 1, title: "Modular Office Workstation 1", category: "Modular Office Workstation", image: "/gallery/modular1.webp" },
  { id: 2, title: "Modular Office Workstation 2", category: "Modular Office Workstation", image: "/gallery/modular2.webp" },
  { id: 3, title: "Modular Office Workstation 3", category: "Modular Office Workstation", image: "/gallery/modular3.webp" },
  { id: 4, title: "Modular Office Workstation 4", category: "Modular Office Workstation", image: "/gallery/modular4.webp" },

  { id: 5, title: "Office Workstation 1", category: "Office Workstation", image: "/gallery/workstation1.webp" },
  { id: 6, title: "Office Workstation 2", category: "Office Workstation", image: "/gallery/workstation2.webp" },
  { id: 7, title: "Office Workstation 3", category: "Office Workstation", image: "/gallery/workstation.webp" },

  { id: 8, title: "Meeting Table 1", category: "Meeting And Conference Room Table", image: "/gallery/meeting1.webp" },
  { id: 9, title: "Meeting Table 2", category: "Meeting And Conference Room Table", image: "/gallery/meeting3.webp" },
  { id: 10, title: "Meeting Table 3", category: "Meeting And Conference Room Table", image: "/gallery/meeting4.webp" },
  { id: 11, title: "Meeting Table 4", category: "Meeting And Conference Room Table", image: "/gallery/meeting5.webp" },

  { id: 12, title: "Computer Table 1", category: "Computer Table", image: "/gallery/comptable1.webp" },
  { id: 13, title: "Computer Table 2", category: "Computer Table", image: "/gallery/comptable2.webp" },
  { id: 14, title: "Computer Table 3", category: "Computer Table", image: "/gallery/comptable4.webp" },
  { id: 15, title: "Computer Table 4", category: "Computer Table", image: "/gallery/comptable3.webp" },

   { id: 16, title: "Wooden Storage Unit", category: "Wooden Storage Unit", image: "/gallery/wooden1.webp" },

    { id: 17, title: "Wooden Storage Unit", category: "Wooden Storage Unit", image: "/gallery/wooden2.webp" },
     { id: 18, title: "Wooden Storage Unit", category: "Wooden Storage Unit", image: "/gallery/wooden3.webp" },
        { id: 19, title: "Wooden Storage Unit", category: "Wooden Storage Unit", image: "/gallery/wooden4.webp" },

            { id: 19, title: "Office Chair", category: "Office Chair", image: "/gallery/chair.webp" },

                { id: 20, title: "Office Chair", category: "Office Chair", image: "/gallery/chair2.webp" },

                    { id: 21, title: "Office Chair", category: "Office Chair", image: "/gallery/chair3.webp" },

                        { id: 22, title: "Office Chair", category: "Office Chair", image: "/gallery/chair4.webp" },
];

// animation variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export default function GalleryPremium() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [showAll, setShowAll] = useState(false);

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  // filter + search + sort
  const filtered = useMemo(() => {
    const base = active === "All" ? items : items.filter((i) => i.category === active);
    const searched = query
      ? base.filter((i) => (i.title + " " + i.category).toLowerCase().includes(query.toLowerCase()))
      : base;

    if (sort === "alpha") return searched.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "oldest") return searched.slice().reverse(); // simple toggled order
    return searched; // newest (as-is)
  }, [active, query, sort]);

  // which items to show in grid (all view limited to 8 unless showAll true)
  const gridItems = useMemo(() => {
    if (active === "All" && !showAll) return filtered.slice(0, 8);
    return filtered;
  }, [active, filtered, showAll]);

  useEffect(() => {
    // reset showAll when switching category
    setShowAll(false);
    // reset search on category change? optional
    // setQuery("");
  }, [active]);

  // keyboard nav for lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, currentIdx]);

  const openLightbox = (index) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };
  const next = () => setCurrentIdx((p) => (p + 1) % filtered.length);
  const prev = () => setCurrentIdx((p) => (p - 1 + filtered.length) % filtered.length);

  return (
    <section className="hidden md:block py-13 bg-[#e6dcd7]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-black">Our Gallery</h2>
    
        </header>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center  flex-wrap">
            <div className="bg-white rounded-full shadow px-4 py-1 flex items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative px-2 py-2 text-sm font-serif rounded-full transition-all ${
                    active === cat
                      ? "bg-amber-50 text-amber-600 font-semibold shadow-inner"
                      : "text-black hover:bg-gray-50"
                  }`}
                >
                  {cat}
                  {active === cat && (
                    <motion.span layoutId="underline" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-amber-400 rounded" />
                  )}
                </button>
              ))}
            </div>

       
          </div>

          <div className="flex items-center gap-3">
           
            <button
              onClick={() => { setActive("all"); setQuery(""); setSort("newest"); }}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg shadow hover:bg-amber-600 text-sm"
            >
              15 Result
            </button>
          </div>
        </div>

        {/* Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {gridItems.map((item, idx) => (
              <motion.article
                layout
                key={item.id}
                variants={itemVariants}
                className="relative rounded-xl overflow-hidden bg-white shadow-lg"
              >
                <div className="relative w-full h-56 bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority={idx < 4}
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <div className="w-full p-4 flex items-center justify-between text-white">
                      <div>
                        <div className="text-sm font-medium">{item.category}</div>
                        <div className="text-lg font-semibold">{item.title}</div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <button onClick={() => openLightbox(idx)} className="bg-white/10 backdrop-blur px-3 py-2 rounded-lg text-sm hover:bg-white/20">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                  
                      <div className="text-base font-medium text-gray-800">{item.title}</div>
                    </div>
             
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load more */}
        {active === "all" && filtered.length > 8 && (
          <div className="mt-6 flex justify-center">
            {!showAll ? (
              <button onClick={() => setShowAll(true)} className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:brightness-110">
                Load more
              </button>
            ) : (
              <button onClick={() => setShowAll(false)} className="px-6 py-3 bg-white border rounded-lg shadow">
                Show less
              </button>
            )}
          </div>
        )}

        {/* footer note */}
        <div className="text-center text-sm text-gray-500 mt-6">{active === "all" ? `Showing ${gridItems.length} of ${items.length}` : `${filtered.length} items in “${active}”`}</div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className="max-w-5xl w-full mx-4 rounded-xl overflow-hidden bg-white">
              <div className="relative bg-black/80 h-[70vh] md:h-[75vh]">
                <Image src={filtered[currentIdx].image} alt={filtered[currentIdx].title} fill className="object-contain" sizes="100vw" />

                <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 bg-white/10 text-white rounded-full p-2 hover:bg-white/20">✕</button>

                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 text-white rounded-full p-3">‹</button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 text-white rounded-full p-3">›</button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 px-3 py-1 rounded">{filtered[currentIdx].title}</div>
              </div>

              <div className="p-4 flex justify-between items-center">
                <div className="text-sm text-gray-600">{filtered[currentIdx].category}</div>
                <div className="text-sm text-gray-500">{currentIdx + 1} / {filtered.length}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
