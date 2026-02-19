"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { categories } from "@/Data";

export default function Navbar() {

const [mobileOpen, setMobileOpen] = useState(false);
const [activeMenu, setActiveMenu] = useState(null);
const [activeMobileCat, setActiveMobileCat] = useState(null);

const closeMenu = () => {
setMobileOpen(false);
setActiveMobileCat(null);
};

return (
<>

{/* ================= NAVBAR ================= */}

<header className="fixed top-0 left-0 w-full z-50 bg-[#1a1a24]">

<div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between text-white">

<Link href="/">
<Image src="/logo.png" alt="Logo" width={60} height={30}/>
</Link>

{/* desktop nav */}
<div className="hidden lg:flex items-center gap-8">

<Link href="/">Home</Link>
<Link href="/about-us">About Us</Link>
<Link href="/blogs">Blogs</Link>
<Link href="/contact-us">Contact Us</Link>

{/* products mega */}
<div
className="relative"
onMouseLeave={() => setActiveMenu(null)}
>
<button
onMouseEnter={() => setActiveMenu("products")}
className="flex items-center gap-1"
>
Products
<ChevronDown size={16}/>
</button>

{activeMenu === "products" && (
<div className="absolute left-0 top-10 w-[700px] bg-white text-black shadow-lg rounded-md p-6 grid grid-cols-3 gap-5 z-50">

{categories.map(cat => (
<Link key={cat.id}
href={`/categories/${cat.id}`}
className="hover:text-amber-600"
>
{cat.name}
</Link>
))}

</div>
)}

</div>

</div>

{/* mobile button */}
<button
className="lg:hidden text-white"
onClick={() => setMobileOpen(true)}
>
<Menu size={26}/>
</button>

</div>

</header>

{/* ================= MOBILE MENU ================= */}

{mobileOpen && (
<div className="fixed inset-0 z-50 lg:hidden">

{/* overlay */}
<div
onClick={closeMenu}
className="absolute inset-0 bg-black/50"
/>

{/* drawer */}
<div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white text-black overflow-y-auto">

<div className="flex justify-between items-center px-5 py-4 border-b">
<Image src="/logo.png" alt="Logo" width={60} height={30}/>
<X size={24} onClick={closeMenu}/>
</div>

<div className="flex flex-col px-5 py-4 gap-4">

<Link href="/" onClick={closeMenu}>Home</Link>
<Link href="/about-us" onClick={closeMenu}>About Us</Link>
<Link href="/blogs" onClick={closeMenu}>Blogs</Link>
<Link href="/contact-us" onClick={closeMenu}>Contact Us</Link>

{/* mobile dropdown */}
<div>

<button
onClick={() =>
setActiveMobileCat(activeMobileCat ? null : "open")
}
className="flex justify-between items-center w-full"
>
Products
<ChevronDown
className={`transition ${
activeMobileCat ? "rotate-180" : ""
}`}
size={18}
/>
</button>

<div
className={`overflow-hidden ${
activeMobileCat ? "max-h-96 mt-3" : "max-h-0"
}`}
>

{categories.map(cat => (
<Link
key={cat.id}
href={`/categories/${cat.id}`}
onClick={closeMenu}
className="block py-2 pl-3 text-sm"
>
{cat.name}
</Link>
))}

</div>

</div>

</div>

</div>
</div>
)}

</>
);
}
