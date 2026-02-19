"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const desktopImages = [ "/hero2.webp","/hero1.png"];

export default function Hero() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 8000); // ultra slow slide change
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
      relative w-full overflow-hidden bg-black
      h-[190px] sm:h-[370px] md:h-[80vh] xl:h-[110vh]
      mt-20 md:mt-0
      "
    >

      <AnimatePresence >
        <motion.div
          key={index}

          /* 🎬 START */
          initial={{
            opacity: 0,
            scale: 1.35,
            y: 80
          }}

          /* 🎬 DRAMATIC MOTION */
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}

          exit={{
            opacity: 0
          }}

          /* 🎬 LUXURY CURVE */
          transition={{
            opacity: {
              duration: 1.8,
              ease: "easeInOut"
            },
            scale: {
              duration: 8,
              ease: [0.16, 1, 0.3, 1]   // cinematic ease curve
            },
            y: {
              duration: 8,
              ease: [0.16, 1, 0.3, 1]
            }
          }}

          className="absolute inset-0"
        >
          <Image
            src={desktopImages[index % desktopImages.length]}
            alt="Hero banner"
            width={2000}
            height={800}
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>


    </section>
  );
}
