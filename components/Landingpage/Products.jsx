"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Premium "Featured + Thumbs" product layout
 * - Left: large featured product (image + details)
 * - Right: vertical thumbnail list to pick a product
 * - Category pills + search at top
 *
 * Place images in: public/gallery/ (filenames below)
 */

const categories = [
"All",
  "Modular Office Workstation",
  "Office Workstation",
  "Conference Tables",
  "Computer Tables",
  "Office Chairs",
  "Wooden Storage Units",
];

const products = [
  /* ===================== MODULAR WORKSTATIONS ===================== */
  {
    id: 1,
    title: "Modular Office Workstation",
    category: "Modular Office Workstation",
    desc:
      "Premium modular office workstations engineered to create organised, efficient, and modern workspaces. Ideal for corporate offices, IT companies, startups, and large commercial environments.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766228880/0993f5_9f89cc419f0b4d46a0eb22d6c94330df_mv2_icqzns.avif",
    bullets: [
      "High-quality pre-laminated boards with long-lasting finish",
      "Concealed cable management for clutter-free desks",
      "Flexible modular configuration for team expansion",
      "Designed for daily commercial usage",
    ],
    tags: ["Bestseller"],
  },
  {
    id: 2,
    title: "L-Shaped Modular Workstation",
    category: "Modular Office Workstation",
    desc:
      "L-shaped modular workstation designed to maximise workspace efficiency while offering a modern and professional look for offices and managerial cabins.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766052989/GallaryImg_273_0_1682752254_pgkzw6.webp",
    bullets: [
      "Ideal for corner and cabin spaces",
      "Large working surface for multitasking",
      "Ergonomic layout for improved productivity",
      "Premium laminate finish options available",
    ],
    tags: ["Popular"],
  },
  {
    id: 3,
    title: "Linear Modular Office Workstation",
    category: "Modular Office Workstation",
    desc:
      "Linear workstation layout suitable for teams working side-by-side. Perfect for IT offices, BPOs, call centers, and co-working spaces.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766055680/linear_3_person.png_yj9n1o.webp",
    bullets: [
      "Team-based seating arrangement",
      "Optimised floor space utilisation",
      "Uniform design for large office layouts",
      "Easy integration of power & data points",
    ],
    tags: ["Corporate"],
  },
  {
    id: 4,
    title: "Modern L Shape Office Workstation",
    category: "Modular Office Workstation",
    desc:
      "Modern L-shaped workstation ideal for managerial cabins and professionals requiring extended desk space and organised storage.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766056316/linear-modular-office-workstation-1000x1000_birhsm.webp",
    bullets: [
      "Spacious desktop for multiple screens",
      "Professional and modern aesthetics",
      "Strong structure with premium finish",
      "Designed for executive work environments",
    ],
    tags: ["New"],
  },

  /* ===================== OFFICE WORKSTATION ===================== */
  {
    id: 5,
    title: "2 Seater Corporate Office Workstation",
    category: "Office Workstation",
    desc:
      "Compact 2-seater workstation designed to improve collaboration while maintaining comfort and productivity in corporate offices.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766122945/67cfd5ee0dbc9903cf06c5dc-office-in-an-hour-2-person-cubicle-desk_m1tned.webp",
    bullets: [
      "Space-efficient dual seating design",
      "Durable panels suitable for daily office use",
      "Provision for power and data routing",
      "Ideal for startups and corporate teams",
    ],
    tags: ["Workstation"],
  },
  {
    id: 6,
    title: "Office Cubicle Workstation",
    category: "Office Workstation",
    desc:
      "Cubicle workstation system offering privacy and focus for employees in open-plan corporate offices.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766123852/c_call_center_workstation_qbb70r.webp",
    bullets: [
      "Privacy panels for distraction-free work",
      "Efficient wiring and cable management",
      "Customisable panel heights and finishes",
      "Suitable for call centers and IT offices",
    ],
    tags: ["Workstation"],
  },
  {
    id: 7,
    title: "L Shape Director Table",
    category: "Office Workstation",
    desc:
      "Premium L-shaped director table designed for executive cabins, offering ample workspace and a commanding presence.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766125796/12730f37dff2c3ec4d00268c02e32f78_ixd7dv.webp",
    bullets: [
      "Executive L-shaped design",
      "Large working and storage area",
      "Premium finish for leadership spaces",
      "Ideal for directors and senior managers",
    ],
    tags: ["Workstation"],
  },

  /* ===================== OFFICE CHAIRS ===================== */
  {
    id: 8,
    title: "Executive Office Chair",
    category: "Office Chairs",
    desc:
      "Ergonomic executive chair designed for long working hours with superior comfort and posture support.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766128110/Executive_Office_Chair_nlfdw1.webp",
    bullets: [
      "Adjustable lumbar support",
      "Multi-tilt reclining mechanism",
      "Breathable backrest for comfort",
      "Strong base with smooth castors",
    ],
    tags: ["Ergonomic"],
  },
  {
    id: 9,
    title: "Low Back Office Chair",
    category: "Office Chairs",
    desc:
      "Compact and comfortable low-back office chair suitable for workstations and meeting rooms.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766128610/Low_Back_Office_Chair_1_kqkk42.avif",
    bullets: [
      "Compact ergonomic design",
      "Breathable mesh back",
      "Easy height adjustment",
      "Ideal for daily office use",
    ],
    tags: ["Ergonomic"],
  },
  {
    id: 10,
    title: "Office Director Chair",
    category: "Office Chairs",
    desc:
      "High-back director chair crafted for senior professionals seeking comfort and authority.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766128866/Office_Director_Chair_eo7tnz.webp",
    bullets: [
      "High-back support for posture",
      "Premium cushioning for comfort",
      "Strong and durable construction",
      "Designed for executive cabins",
    ],
    tags: ["Ergonomic"],
  },

  /* ===================== CONFERENCE TABLES ===================== */
  {
    id: 11,
    title: "14 Seater Meeting Table",
    category: "Conference Tables",
    desc:
      "Large conference table designed for boardrooms and professional meeting spaces.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766135368/14_Seater_Meeting_Table_1_omsthn.avif",
    bullets: [
      "Spacious tabletop for large teams",
      "Premium finish suitable for boardrooms",
      "Provision for power & data access",
      "Strong structure for long-term use",
    ],
    tags: ["Premium"],
  },
  {
    id: 12,
    title: "Round Meeting Table",
    category: "Conference Tables",
    desc:
      "Round meeting table designed to encourage collaboration and open discussions.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766136449/Round_Meeting_Table_eqygwr.webp",
    bullets: [
      "Encourages collaborative meetings",
      "Modern and minimal design",
      "Strong base with stable support",
      "Ideal for small conference rooms",
    ],
    tags: ["Premium"],
  },

  /* ===================== COMPUTER TABLES ===================== */
  {
    id: 13,
    title: "Modular Wooden Computer Table",
    category: "Computer Tables",
    desc:
      "Sturdy modular computer table designed for office and home-office environments.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766126187/Modular_Wooden_Computer_Table_ntdszw.avif",
    bullets: [
      "Strong wooden construction",
      "Clean and functional design",
      "Space for CPU and accessories",
      "Suitable for daily work use",
    ],
    tags: ["Premium"],
  },
  {
    id: 14,
    title: "Wooden Computer Table",
    category: "Computer Tables",
    desc:
      "Compact wooden computer table ideal for workstations and study areas.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766126593/Wooden_Computer_Table_pqn2ir.webp",
    bullets: [
      "Minimal and space-saving design",
      "Durable laminated finish",
      "Easy to maintain",
      "Perfect for small office spaces",
    ],
    tags: ["Premium"],
  },

  /* ===================== WOODEN STORAGE ===================== */
  {
    id: 15,
    title: "Smart Wooden Cabinet",
    category: "Wooden Storage Units",
    desc:
      "Smart wooden storage cabinet designed to keep office documents and essentials organised.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766129680/Smart_Wooden_Cabinet_z130aj.webp",
    bullets: [
      "Ample internal storage",
      "Premium laminated finish",
      "Suitable for offices and cabins",
      "Strong and durable build",
    ],
    tags: ["Premium"],
  },
  {
    id: 16,
    title: "Home Wooden Storage Cupboard",
    category: "Wooden Storage Units",
    desc:
      "Spacious wooden storage cupboard suitable for office and home use.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766129278/Home_Wooden_Storage_Cupboard_mgnofw.webp",
    bullets: [
      "Large storage capacity",
      "Durable wooden construction",
      "Clean and elegant appearance",
      "Easy organisation of files",
    ],
    tags: ["Premium"],
  },
  {
    id: 17,
    title: "Wooden Storage Unit",
    category: "Wooden Storage Units",
    desc:
      "Office-grade wooden storage unit designed for professional environments.",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766129409/Office_Storage_Cabinets_1_soei4e.webp",
    bullets: [
      "Office-grade quality materials",
      "Neat and professional finish",
      "Ideal for files and documents",
      "Complements modern office interiors",
    ],
    tags: ["Premium"],
  },
];



const fadeSlide = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.42 } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.28 } },
};

export default function OurProducts() {
  const [activeCat, setActiveCat] = useState("All");
  const [q, setQ] = useState("");
  const [featuredId, setFeaturedId] = useState(products[0].id);

  // filtered list for the right column
  const filtered = useMemo(() => {
    const base =
      activeCat === "All"
        ? products
        : products.filter((p) => p.category === activeCat);
    if (!q) return base;
    return base.filter((p) =>
      (p.title + " " + p.desc).toLowerCase().includes(q.toLowerCase())
    );
  }, [activeCat, q]);

  // ensure featured stays in filtered set
  useEffect(() => {
    if (!filtered.find((p) => p.id === featuredId)) {
      setFeaturedId(filtered[0]?.id ?? null);
    }
  }, [filtered, featuredId]);

  const featured = products.find((p) => p.id === featuredId) || filtered[0];

  // keyboard: navigate thumbnails Up/Down
  useEffect(() => {
    const handler = (e) => {
      if (["ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        const list = filtered;
        const idx = list.findIndex((p) => p.id === featuredId);
        if (idx === -1) return;
        const next =
          e.key === "ArrowDown"
            ? Math.min(list.length - 1, idx + 1)
            : Math.max(0, idx - 1);
        setFeaturedId(list[next].id);
        // scroll thumbnail into view
        const el = document.getElementById(`thumb-${list[next].id}`);
        el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [featuredId, filtered]);

  return (
    <section className="py-15 bg-[#F6F4F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* heading + controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Our Products
            </h2>
            <p className="text-black text-sm mt-2 max-w-xl">
              Curated, durable and beautifully crafted office furniture for
              modern workplaces.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${activeCat === c ? "bg-gray-900 text-white shadow-md" : "bg-white text-black border border-gray-200 hover:shadow-sm"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured (left) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {featured ? (
                <motion.article
                  key={featured.id}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={fadeSlide}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* big image */}
                    <div className="relative w-full h-60 md:h-[470px] bg-gray-100">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* details */}
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          {featured.tags.map((t) => (
                            <span
                              key={t}
                              className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900">
                          {featured.title}
                        </h3>
                        <p className="text-black text-sm mt-3">{featured.desc}</p>

                        <ul className="mt-4 space-y-2 text-sm text-black">
                          {featured.bullets?.map((b) => (
                            <li key={b} className="flex items-start gap-3">
                              <span className="inline-block mt-1 w-2 h-2 rounded-full bg-gray-900/80" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 mx-auto flex items-center justify-between gap-4">
                        <div className="flex gap-3">
                          {/* <a
                            href="/products"
                            className="px-5 py-2 rounded-md bg-gray-900 text-white  hover:brightness-95"
                          >
                            View Product
                          </a> */}
                          <a
                            href="/products"
                            className="px-5 py-2 rounded-md border bg-amber-600 text-white hover:bg-amber-500 hover:text-white transition"
                          >
                          All Products
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-8 bg-white rounded-2xl shadow"
                >
                  No product
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Thumbs + list (right) */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm sticky top-24 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <div className="text-sm text-gray-500">Showing</div>
                <div className="font-semibold text-gray-900">
                  {filtered.length} product{filtered.length !== 1 ? "s" : ""}
                </div>
              </div>

              <div className="max-h-[400px] overflow-auto">
                <ul className="divide-y">
                  {filtered.map((p) => {
                    const active = p.id === featured?.id;
                    return (
                      <li
                        key={p.id}
                        id={`thumb-${p.id}`}
                        className={`p-4 flex gap-4 items-center cursor-pointer transition ${active ? "bg-gray-50" : "hover:bg-gray-50"}`}
                        onClick={() => setFeaturedId(p.id)}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") setFeaturedId(p.id);
                        }}
                      >
                        <div className="relative w-20 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div
                                className={`text-sm font-semibold ${active ? "text-gray-900" : "text-gray-800"}`}
                              >
                                {p.title}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {p.category}
                              </div>
                            </div>
                           
                          </div>

                          <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                            {p.desc}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 hover:text-gray-800">
                <a
                  href="/products"
                  className="block text-center text-sm font-medium text-gray-900 "
                >
                  View all products
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
