"use client";
import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
// import Enquiry from "@/components/Enquiry";
import { ArrowUpRight } from "lucide-react";
import { Shield, Droplet , Dumbbell , Recycle  } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductPage({ params }) {
  const { productId } = React.use(params);
  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);
  const [activeImage, setActiveImage] = useState(product?.image[0]);
  const [isFormOpen, setIsFormOpen] = useState(false);
const [selectedColor, setSelectedColor] = useState(
  product?.colors?.[0] || null
);

  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );
  }

const features = [
  {
    icon: <Shield size={38} />,
    title: "PREMIUM HARDWOOD FRAME",
    desc: "Crafted using seasoned hardwood for maximum durability, structural strength, and long-term stability.",
  },
  {
    icon: <Droplet size={38} />,
    title: "PRECISION LEVELED SLATE",
    desc: "Tournament-grade natural slate ensures perfectly smooth ball roll and professional gameplay accuracy.",
  },
  {
    icon: <Dumbbell size={38} />,
    title: "HEAVY-DUTY CONSTRUCTION",
    desc: "Engineered with reinforced legs and frame support to handle intensive commercial and club usage.",
  },
  {
    icon: <Recycle size={38} />,
    title: "CUSTOM FINISH & DESIGN",
    desc: "Available in multiple finishes, cloth colors, and custom sizes to match luxury interiors and club standards.",
  },
];

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>
        <meta
          name="description"
          content={product.metaDescription || product.name}
        />
      </Head>

      <section className="w-full bg-[#06090D]  mx-auto py-16 space-y-20 overflow-x-hidden">

        {/* TOP: IMAGE + CONFIG PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] px-20 mt-26 items-start  mx-auto ">

          {/* PRODUCT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-2"
          >
            <div className="rounded-3xl overflow-hidden border border-gray-800 bg-[#0A0F14] shadow-2xl">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={1000}
                height={500}
                className="object-fill h-140"
              />
            </div>
          </motion.div>

          {/* CONFIG PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="bg-[#070B0F] text-white rounded-3xl p-8 space-y-7 border border-gray-900 shadow-xl "
          >
            <h2 className="text-2xl md:text-3xl font-bold capitalize  tracking-wide">
              {product.name}
            </h2>

            <p className="text-white text-md">
            {product.excerpt}
            </p>

            <div className="">
             {/* COLOR OPTIONS */}
{/* COLOR OPTIONS */}
{product.colors && product.colors.length > 0 && (
  <div className="mt-14">
    <p className="text-lg  text-gray-400 tracking-[0.3em] uppercase mb-6">
      Available Finishes
    </p>

    <div className="grid grid-cols-3  gap-8 ">
      {product.colors.map((color, index) => (
        <button
          key={index}
          onClick={() => setSelectedColor(color)}
          className="flex flex-col items-center group"
        >
          {/* Circle Swatch */}
          <div
            className={`
              relative w-22 h-22 rounded-md transition-all duration-300
              ${color.class}
              ${
                selectedColor?.name === color.name
                  ? "ring-2 ring-yellow-400 ring-offset-4 ring-offset-[rgb(7,11,15)] scale-110 shadow-[0_0_25px_rgba(255,215,0,0.4)]"
                  : "opacity-70 group-hover:opacity-100 group-hover:scale-105"
              }
            `}
          >
            {selectedColor?.name === color.name && (
              <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                ✓
              </div>
            )}
          </div>

          {/* Label */}
          <span
            className={`mt-3 text-sm tracking-wide transition-all duration-300
              ${
                selectedColor?.name === color.name
                  ? "text-yellow-400"
                  : "text-gray-400 group-hover:text-white"
              }`}
          >
            {color.name}
          </span>
        </button>
      ))}
    </div>
  </div>
)}


            </div>

         

         

           

         

            <div className="flex items-center justify-center gap-10 mt-14 ">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFormOpen(true)}
                className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
              >
                Enquire Now
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/+919999402424?text=Hello, I am interested in ${encodeURIComponent(product.name)}`}
                target="_blank"
                className="px-6 py-3 rounded-xl bg-green-500 text-white font-medium hover:bg-green-400 transition"
              >
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 lg:grid-cols-2 bg-[#0B170E] rounded-3xl overflow-hidden border border-gray-900 shadow-2xl  mx-auto"
        >
          <div className="p-12 md:p-16 space-y-8 text-white relative">
            <div className="absolute top-12 left-12 w-20 h-[2px] bg-yellow-400"></div>
            <p className="text-yellow-400 tracking-[0.35em] text-xs font-semibold uppercase mt-6">
              The Craft
            </p>
            <h2 className="text-4xl md:text-5xl text-yellow-500 font-bold leading-tight">
              Masterfully Built for <br />
              Professional Excellence
            </h2>
          <div className="text-white space-y-6 leading-relaxed max-w-2xl">
  {product.description?.map((block, i) => {
    if (block.type === "p") {
      return (
        <p key={i} className="text-xl text-white">
          {block.text}
        </p>
      );
    }

    if (block.type === "h2") {
      return (
        <h3 key={i} className="text-2xl font-semibold text-yellow-500 pt-4">
          {block.text}
        </h3>
      );
    }

    if (block.type === "ul") {
      return (
        <ul key={i} className="list-disc  ml-5 space-y-2 text-white">
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    return null;
  })}
</div>



            <div className="w-32 h-[1px] bg-gray-500 mt-6"></div>
          </div>

          <div className="bg-[#141A15] h-240 p-12 md:p-16 space-y-8 border-l border-gray-800">
            <div>
              <h3 className="text-white text-2xl font-semibold tracking-wide">
                Technical Specifications
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Heritage Pro Series Details
              </p>
            </div>

            <div className="space-y-6">
              {product.specs?.map((spec, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 items-center border-t border-yellow-500/30 pt-5"
                >
                  <span className="text-white uppercase text-base tracking-wider">
                    {spec.label}
                  </span>
                  <span className="text-white text-right text-lg font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FEATURES */}
        <section className="relative w-full overflow-hidden bg-[#07382D] py-18 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,200,0,0.08)_1px,transparent_1px)] [background-size:30px_30px] opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,0,0.08),transparent_70%)]"></div>

          <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full border border-yellow-500/40 text-yellow-400 bg-yellow-500/5 shadow-[0_0_25px_rgba(255,200,0,0.1)]">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl tracking-[2px] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-md text-white max-w-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RELATED PRODUCTS */}
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-10">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories
              .find((c) => c.products.some((p) => p.id === product.id))
              ?.products.filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <motion.a
                  key={item.id}
                  href={`/products/${item.id}`}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="group bg-[#070B0F] border border-gray-900 rounded-3xl p-6 hover:shadow-2xl transition"
                >
                  <div className="relative h-48 mb-4">
                    <Image
                      src={item.image[0]?.src}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {item.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-yellow-500 mt-2">
                    View Details <ArrowUpRight size={14} />
                  </span>
                </motion.a>
              ))}
          </div>
        </div>

        {/* {isFormOpen && (
          <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        )} */}
      </section>
    </>
  );
}
