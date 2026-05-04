import React from "react";
import Link from "next/link";

const Cta = ({ city }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">

        {/* LEFT IMAGE */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded w-full"
            alt="cta"
            src="/bannerHome3.webp"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-10 flex flex-col md:items-start items-center text-center md:text-left">
          
          <h1 className="font-bold text-3xl sm:text-4xl mb-4 text-gray-900">
            Looking for a high-quality billiard table in{" "}
            <span className="capitalize">{city}</span>?
          </h1>

          <p className="mb-8 leading-relaxed text-black/90 text-sm md:text-base lg:text-xl transition-all duration-300">
            PM Billiards is your trusted billiard table manufacturer in{" "}
            <span className="capitalize">{city}</span>, offering premium pool
            tables, snooker tables, and billiard tables at competitive prices.
            Our products are crafted with high-quality materials and precision
            engineering to ensure durability, smooth gameplay, and
            long-lasting performance. We cater to homes, clubs, and commercial
            spaces with customized table designs and sizes. With a strong
            focus on quality and customer satisfaction, we deliver reliable
            solutions tailored to your needs. Choose PM Billiards for
            unmatched craftsmanship, modern designs, and professional-grade
            gaming experience.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex text-white bg-[#2f8f6b] border-0 py-2 px-6 focus:outline-none transition-all duration-300 ease-in-out hover:scale-105 rounded text-lg"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Cta;