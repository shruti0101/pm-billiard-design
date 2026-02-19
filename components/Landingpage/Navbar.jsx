"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { categories } from "@/Data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileCat, setActiveMobileCat] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
    <>
      {/* FLOAT NAVBAR */}
      {!scrolled && (
        <header className="fixed top-0 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">
          <div className="backdrop-blur-xl bg-white/40 border border-white/20 shadow-xl rounded-2xl px-8 h-17 flex items-center">
            <Link href="/" className="bg-white rounded-md px-2 shrink-0">
              <Image src="/logo.png" alt="Logo" width={60} height={30} />
            </Link>

            <div className="hidden lg:flex uppercase flex-1 justify-center gap-10 text-white text-lg font-medium">
              <Link href="/" className="hover:text-[#F6BB31]">
                Home
              </Link>
              <Link href="/about-us" className="hover:text-[#F6BB31]">
                About Us
              </Link>
              <Link href="/blogs" className="hover:text-[#F6BB31]">
                Blogs
              </Link>
              <Link href="/contact-us" className="hover:text-[#F6BB31]">
                Contact Us
              </Link>
            </div>

            <div className="hidden lg:flex items-center">
              <Link
                href="/contact-us"
                className="bg-[#2F8F6B] text-white px-4 py-3 rounded-md text-md font-semibold"
              >
                Enquire Now
              </Link>
            </div>

            <button
              className="lg:hidden text-white ml-auto"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>

          <div
            className="relative hidden lg:flex justify-center gap-8 mt-4 text-white text-md font-medium"
            onMouseLeave={() => setActiveMenu(null)}
          >
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                onMouseEnter={() => setActiveMenu(cat.id)}
                className="flex uppercase font-bold text-[17px] items-center hover:text-[#F6BB31]"
              >
                {cat.name}
                <ChevronDown size={14} />
              </Link>
            ))}

            {activeMenu && (
              <div className="fixed left-0 right-0 top-[115px] bg-white h-130 overflow-y-auto text-black shadow-xl py-12 z-[60]">
                <div className="w-full mx-auto px-8">
                  <p className="mb-8 text-xs capitalize tracking-[0.3em]">
                    {categories.find((c) => c.id === activeMenu)?.name}
                  </p>

                  <div className="grid grid-cols-5 gap-10">
                    {categories
                      .find((c) => c.id === activeMenu)
                      ?.products.map((prod) => (
                        <Link
                          key={prod.id}
                          href={`/products/${prod.id}`}
                          onClick={closeMenu}
                        >
                          <div className="relative h-50 bg-gray-100 overflow-hidden rounded-md">
                            <Image
                              src={prod.image?.[0]?.src}
                              alt={prod.name}
                              fill
                              className="object-contain hover:scale-110 transition"
                            />
                          </div>
                          <p className="mt-4 text-sm text-center font-medium hover:text-amber-600">
                            {prod.name}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
      )}

      {/* SCROLL NAVBAR */}
      {scrolled && (
        <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#1a1a24]/70 border-b border-white/10 shadow-xl">
          <div className="px-6 h-16 flex items-center justify-between">
            <Link href="/" className="bg-white rounded-md px-2 shrink-0">
              <Image src="/logo.png" alt="Logo" width={60} height={30} />
            </Link>

            <div className="hidden lg:flex gap-12 text-white text-sm font-semibold">
              <Link href="/">Home</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>

            <button
              className="lg:hidden text-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </header>
      )}

      {/* MOBILE MENU GLOBAL PORTAL */}
      {mounted &&
        mobileOpen &&
        createPortal(
          <>
            <div
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999999]"
            />

            <div className="fixed right-0 top-0 h-screen w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto z-[1000000]">
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <Image src="/logo.png" alt="Logo" width={60} height={30} />
                <X size={26} className="cursor-pointer" onClick={closeMenu} />
              </div>

              <div className="flex flex-col px-5 py-4 gap-4 text-[15px] font-medium">
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
                <Link href="/about-us" onClick={closeMenu}>
                  About Us
                </Link>
                <Link href="/blogs" onClick={closeMenu}>
                  Blogs
                </Link>
                <Link href="/contact-us" onClick={closeMenu}>
                  Contact Us
                </Link>
              </div>

              <div className="border-t px-5 py-4">
                <p className="text-xs mb-4 tracking-widest uppercase text-gray-500">
                  Categories
                </p>

                {categories.map((cat) => (
                  <div key={cat.id} className="border-b py-2">
                    <button
                      onClick={() =>
                        setActiveMobileCat(
                          activeMobileCat === cat.id ? null : cat.id,
                        )
                      }
                      className="flex justify-between items-center w-full text-left font-semibold"
                    >
                      {cat.name}
                      <ChevronDown
                        size={18}
                        className={`transition ${
                          activeMobileCat === cat.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-500 overflow-hidden ${
                        activeMobileCat === cat.id
                          ? "max-h-[500px] mt-3"
                          : "max-h-0"
                      }`}
                    >
                      {cat.products.map((prod) => (
                        <Link
                          key={prod.id}
                          href={`/products/${prod.id}`}
                          onClick={closeMenu}
                          className="py-2 pl-3 text-sm text-gray-600 hover:text-black"
                        >
                          {prod.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5">
                <Link
                  href="/contact-us"
                  onClick={closeMenu}
                  className="block text-center bg-[#2F8F6B] text-white py-3 rounded-md font-semibold"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </>,
          document.body,
        )}

      <a
        href="https://wa.me/9999402424"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl"
      >
        <FaWhatsapp size={22} />
      </a>
    </>
  );
}
