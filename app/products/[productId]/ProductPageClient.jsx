"use client";
import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
import Enquiry from "@/components/Enquiry";
import { ArrowUpRight } from "lucide-react";

export default function ProductPage({ params }) {
  const { productId } = React.use(params);
  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);
  const [activeImage, setActiveImage] = useState(product?.image[0]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );
  }

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>
        <meta
          name="description"
          content={product.metaDescription || product.name}
        />
      </Head>

    

      {/* MAIN WRAPPER */}
      <section className="w-full bg-[#06090D] pt-35 mx-auto py-16 space-y-24">

        {/* TOP: IMAGE + CONFIG PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start  mx-auto px-6">

          {/* PRODUCT IMAGE – PREMIUM CARD */}
          <div className="p-2">
            <div className="rounded-3xl overflow-hidden border border-gray-800 bg-[#0A0F14] shadow-2xl">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={1000}
                height={700}
                className="object-cover "
                
              />
            </div>
          </div>

          {/* CONFIG PANEL */}
          <div className="bg-[#070B0F] text-white rounded-3xl p-8 space-y-7 border border-gray-900 shadow-xl">

            <h2 className="text-2xl font-semibold tracking-wide">
           {product.name}
            </h2>

            <p className="text-gray-400 text-sm">
              Configure your professional-grade table
            </p>

            {/* COLOR GRID */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="w-full h-28 rounded-xl bg-green-800 border border-green-900"></div>

              <div className="w-full h-28 rounded-xl bg-blue-600 border-2 border-cyan-400 flex items-center justify-center">
                <span className="text-white text-xl">✔</span>
              </div>

              <div className="w-full h-28 rounded-xl bg-red-800 border border-red-900"></div>
            </div>

            <div className="grid grid-cols-3 text-center text-sm text-gray-400">
              <span>Green</span>
              <span className="text-cyan-400">Elec Blue</span>
              <span>Burgundy</span>
            </div>

            <h3 className="text-green-400 font-semibold tracking-wide mt-6">
              LEG STYLES
            </h3>

            <div className="flex items-center justify-between border border-gray-700 rounded-xl p-4">
              <div>
                <p className="text-white font-medium">MODERN TAPERED</p>
                <p className="text-gray-400 text-sm">
                  Minimalist geometric profile
                </p>
              </div>
              <div className="bg-gray-800 p-2 rounded-lg">⬇</div>
            </div>

            <div className="flex items-center justify-between border border-green-500 rounded-xl p-4 bg-[#0B1410]">
              <div>
                <p className="text-white font-medium">ARTISAN CARVED</p>
                <p className="text-gray-400 text-sm">
                  Traditional hand-finished details
                </p>
              </div>
              <div className="bg-green-600 text-white p-2 rounded-lg">✔</div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
              >
                Enquire Now
              </button>

              <a
                href={`https://wa.me/+919999402424?text=Hello, I am interested in ${encodeURIComponent(
                  product.name
                )}`}
                target="_blank"
                className="px-6 py-3 rounded-xl bg-green-500 text-white font-medium hover:bg-green-400 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* PREMIUM DESCRIPTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#0B170E] rounded-3xl overflow-hidden border border-gray-900 shadow-2xl  mx-auto">

          {/* LEFT – STORY */}
          <div className="p-12 md:p-16 space-y-8 text-white relative">
            <div className="absolute top-12 left-12 w-20 h-[2px] bg-yellow-400"></div>

            <p className="text-yellow-400 tracking-[0.35em] text-xs font-semibold uppercase mt-6">
              The Craft
            </p>

            <h2 className="text-4xl md:text-5xl text-yellow-500 font-bold leading-tight">
              Masterfully Built for <br />
              Professional Excellence
            </h2>

            <div className="text-white space-y-6 leading-relaxed max-w-xl">
              {product.description
                .filter(b => b.type === "p")
                .slice(0, 3)
                .map((block, i) => (
                  <p key={i} className="text-lg opacity-90">
                    {block.text}
                  </p>
                ))}
            </div>

            <div className="w-32 h-[1px] bg-gray-700 mt-6"></div>
          </div>

          {/* RIGHT – SPECS */}
          <div className="bg-[#141A15] p-12 md:p-16 space-y-8 border-l border-gray-800">
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
                  <span className="text-white uppercase text-xs tracking-wider">
                    {spec.label}
                  </span>
                  <span className="text-white text-right text-base font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

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
                <a
                  key={item.id}
                  href={`/products/${item.id}`}
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
                </a>
              ))}
          </div>
        </div>

        {isFormOpen && (
          <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        )}
      </section>
    </>
  );
}
