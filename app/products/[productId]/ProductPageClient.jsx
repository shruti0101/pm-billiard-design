"use client";
import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
import { ArrowUpRight, Shield, Droplet, Dumbbell, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import ElectricBorder from '@/components/ElectricBorder'

export default function ProductPage({ params }) {

  const { productId } = React.use(params);
  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);

  const [activeImage, setActiveImage] = useState(product?.image[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;
  }

  const features = [
    {
      icon: <Shield size={38} />,
      title: "PREMIUM HARDWOOD FRAME",
      desc: "Crafted using seasoned hardwood for durability.",
    },
    {
      icon: <Droplet size={38} />,
      title: "PRECISION LEVELED SLATE",
      desc: "Tournament-grade natural slate ensures smooth ball roll.",
    },
    {
      icon: <Dumbbell size={38} />,
      title: "HEAVY-DUTY CONSTRUCTION",
      desc: "Reinforced legs and frame support.",
    },
    {
      icon: <Recycle size={38} />,
      title: "CUSTOM FINISH & DESIGN",
      desc: "Available in multiple finishes.",
    },
  ];

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>
        <meta name="description" content={product.metaDescription || product.name}/>
      </Head>

<section className="w-full bg-[#06090D] mx-auto py-12 md:py-16 space-y-16 md:space-y-20 overflow-x-hidden">

{/* IMAGE + CONFIG */}
<div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] px-4 sm:px-6 md:px-10 lg:px-20 mt-16 md:mt-26 items-start gap-10 mx-auto">

<motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>

<div className="rounded-3xl overflow-hidden border border-gray-800 bg-[#0A0F14] shadow-2xl">

<Image
src={activeImage.src}
alt={activeImage.alt}
width={1000}
height={500}
className="object-fill w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-[560px]"
/>

</div>
</motion.div>

<motion.div initial={{opacity:0,x:60}} animate={{opacity:1,x:0}} transition={{duration:0.9,delay:0.2}}
className="bg-[#070B0F] text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-gray-900 shadow-xl">

<h2 className="text-2xl md:text-3xl font-bold capitalize tracking-wide">
{product.name}
</h2>

<p className="text-white text-md">
{product.excerpt}
</p>

{product.colors && (
<div className="mt-10 md:mt-14">
<p className="text-lg text-gray-400 tracking-[0.3em] uppercase mb-6">
Available Finishes
</p>

<div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
{product.colors.map((color, index) => (
<button key={index} onClick={()=>setSelectedColor(color)}
className="flex flex-col items-center group">

<div
className={`
relative w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 rounded-md transition-all duration-300
${color.class}
${selectedColor?.name===color.name
?"ring-2 ring-yellow-400 ring-offset-4 ring-offset-[rgb(7,11,15)] scale-110 shadow-[0_0_25px_rgba(255,215,0,0.4)]"
:"opacity-70 group-hover:opacity-100 group-hover:scale-105"
}`}
>
{selectedColor?.name===color.name && (
<div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">✓</div>
)}
</div>

<span className={`mt-2 sm:mt-3 text-xs sm:text-sm tracking-wide
${selectedColor?.name===color.name?"text-yellow-400":"text-gray-400 group-hover:text-white"}`}>
{color.name}
</span>

</button>
))}
</div>
</div>
)}

<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 md:mt-14">

  {/* ================= ENQUIRE ================= */}
  <ElectricBorder>
    <motion.button
      whileHover={{ scale: 1.06, y: -3 }}
      whileTap={{ scale: 0.96 }}
      className="
      relative overflow-hidden
      px-8 py-3
      rounded-full
      text-white
      font-semibold
      tracking-wide
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      shadow-[0_0_25px_rgba(255,255,255,0.08)]
      hover:shadow-[0_0_35px_rgba(255,215,0,0.35)]
      transition-all duration-500
      w-full sm:w-auto
      group
      "
    >
      <span className="relative z-10">
        Enquire Now
      </span>

      {/* Glow layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-400/20 via-white/10 to-yellow-400/20 blur-xl"/>
    </motion.button>
  </ElectricBorder>


  {/* ================= WHATSAPP ================= */}
<motion.a
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.96 }}
  href={`https://wa.me/+919999402424?text=Hello, I am interested in ${encodeURIComponent(product.name)}`}
  target="_blank"
  className="
  relative
  overflow-hidden
  px-8 py-3
  rounded-full
  text-white
  font-semibold
  tracking-wide
  bg-gradient-to-r from-[#10d28b] to-[#1bb67d]
  shadow-[0_8px_25px_rgba(47,143,107,0.35)]
  transition-all duration-500
  w-full sm:w-auto
  text-center
  group
  "
>
  {/* Shine Sweep */}
  <span className="
    absolute top-0 left-[-120%] 
    w-[120%] h-full 
    bg-gradient-to-r 
    from-transparent 
    via-white/30 
    to-transparent 
    skew-x-12
    group-hover:left-[120%] 
    transition-all duration-700
  "/>

  {/* Inner Glass Layer */}
  <span className="
    absolute inset-[1px] 
    rounded-full 
    bg-gradient-to-b 
    from-white/20 
    to-transparent 
    opacity-30
  "/>

  {/* Text */}
  <span className="relative z-10 flex items-center justify-center gap-2">
    WhatsApp
  </span>
</motion.a>


</div>


</motion.div>


</div>

{/* DESCRIPTION */}
<motion.div initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}}
viewport={{once:true}} transition={{duration:0.9}}
className="grid grid-cols-1 lg:grid-cols-2 bg-[#0B170E] rounded-3xl overflow-hidden border border-gray-900 shadow-2xl mx-4 sm:mx-6 md:mx-10 lg:mx-auto">

<div className="p-6 sm:p-8 md:p-12 lg:p-16 space-y-6 md:space-y-8 text-white relative">

<h2 className="text-3xl md:text-5xl text-yellow-500 font-bold leading-tight">
Masterfully Built for Professional Excellence
</h2>

<div className="text-white space-y-4 md:space-y-6 leading-relaxed">
{product.description?.map((block,i)=>(
block.type==="p"?<p key={i}>{block.text}</p>:
block.type==="h2"?<h3 key={i} className="text-2xl text-yellow-500 pt-4">{block.text}</h3>:
block.type==="ul"?<ul key={i} className="list-disc ml-5 space-y-2">
{block.items.map((item,index)=><li key={index}>{item}</li>)}
</ul>:null
))}
</div>
</div>

<div className="bg-[#141A15] min-h-[420px] md:min-h-[600px] lg:h-[960px] p-6 sm:p-8 md:p-12 lg:p-16 space-y-6 md:space-y-8 border-l border-gray-800">

<h3 className="text-white text-2xl font-semibold tracking-wide">
Technical Specifications
</h3>

{product.specs?.map((spec,i)=>(
<div key={i} className="grid grid-cols-2 items-center border-t border-yellow-500/30 pt-5">
<span className="text-white uppercase text-base">{spec.label}</span>
<span className="text-white text-right text-lg font-medium">{spec.value}</span>
</div>
))}

</div>
</motion.div>

{/* FEATURES */}
<section className="relative w-full overflow-hidden bg-[#07382D] py-12 sm:py-14 md:py-18 px-4 sm:px-6">

<div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 text-center">
{features.map((item,index)=>(
<motion.div key={index} whileHover={{y:-8}} className="flex flex-col items-center">
<div className="w-20 h-20 flex items-center justify-center rounded-full border border-yellow-500/40 text-yellow-400 bg-yellow-500/5">
{item.icon}
</div>
<h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
<p className="mt-4 text-sm text-white max-w-xs">{item.desc}</p>
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
</section>
</>
);
}
