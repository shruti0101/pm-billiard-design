import React from "react";

const Letter = () => {
  return (
    <div>
 
  

      {/* Main container */}
      <div className="hidden lg:flex w-full   overflow-hidden justify-center items-center gap-10   relative">

        {/* IMAGE NEXT TO "PM" */}
        <img
          src="/try/3.png"
          alt="icon-left"
          className="
            w-44 h-44 object-contain 
            transition-all duration-500 ease-out
            hover:scale-125 hover:-translate-y-2 hover:rotate-6
          "
        />

        {/* TEXT WITH IMAGE FILL */}
        <div
          className="
            text-[96px] md:text-[130px] font-extrabold tracking-tight leading-none
            bg-cover bg-center bg-no-repeat
            text-transparent bg-clip-text 
            transition-transform duration-500 hover:scale-[1.02]
          "
          style={{
            backgroundImage: "url('/try/try2.jpg')",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          PM BILLIARDS
        </div>

        {/* IMAGE ON THE RIGHT SIDE */}
        <img
          src="/try/gif.webp"
          alt="icon-right"
          className="
            w-52 h-52 object-contain 
            transition-all duration-500 ease-out
            hover:scale-125 hover:translate-y-2 hover:-rotate-6
          "
        />
      </div>
    </div>
  );
};

export default Letter;
