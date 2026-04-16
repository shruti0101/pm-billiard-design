import React from "react";
import Link from "next/link";

const Cta = ({city}) => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className=" font-bold text-3xl sm:text-4xl text-3xl mb-4  text-gray-900">Looking for a high-quality billiard table in <span className="capitalize">{city}</span>?</h1>
      <p className="mb-8 leading-relaxed text-black/90 lg:text-xl text-base/6">PM Billiards is your trusted billiard table manufacturer in <span className="capitalize">{city}</span>, offering premium pool tables, snooker tables, and billiard tables at competitive prices.</p>
      
      <Link href={"/contact-us"} className="inline-flex text-white bg-[#2f8f6b] border-0 py-2 px-6 focus:outline-none transition-all duration-300 ease-in-out hover:scale-105 rounded text-lg">Contact Us</Link>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="cta" src="/bannerHome3.webp"/>
    </div>
  </div>
</section>
    </>
  );
};

export default Cta;