"use client";

import React from "react";
import { motion } from "framer-motion";

const laptopCompanies = [
  { name: "Apple", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpBtA0ZVspT5R51_ANtAVpbKuy7JL9jt8aw&s" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png" },
  { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/2560px-Lenovo_Global_Corporate_Logo.png" },
  { name: "Asus", logo: "https://press.asus.com/assets/w_767,h_431/fa3cbcd7-e826-45f9-885e-1d3470be3952/20220801101712676.jpg" },
  { name: "Acer", logo: "https://logos-world.net/wp-content/uploads/2022/11/Acer-Logo.png" },
  { name: "MSI", logo: "https://cdn.dribbble.com/userupload/32582039/file/original-0e84db76fb44b5cbb82edeb60e4e3e16.png" },
  { name: "Razer", logo: "https://logos-world.net/wp-content/uploads/2020/11/Razer-Symbol.jpg" },
];

const accountingTools = [
  { name: "Tally", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0T9yBBwHIRj3TAAWtzF2CnCyitaTMtRkK8A&s" },
  { name: "Busy", logo: "https://cdn.prod.website-files.com/65aaa5932bd90c42f94a92d3/65b0b688d0803d1b486182b3_busy_logo%20(2).png" },
  { name: "Marg", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU-WAmhMKN2dcwAWUlA1kNgXp2AjNK2hac5A&s" },
  { name: "Zoho Books", logo: "https://download.logo.wine/logo/Zoho_Corporation/Zoho_Corporation-Logo.wine.png" },
  { name: "QuickBooks", logo: "https://icon2.cleanpng.com/20180817/jii/a399d134c519d12d1a080cbe2fbe4541.webp" },
  { name: "Xero", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjmaiJuhp5yx65JeX_g-VahQ6jrCbWK2Y6g&s" },
  { name: "FreshBooks", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqH10WBGPzpmZYBlqvC7KKTpjZqzMnkyFu7w&s" },
  { name: "Wave", logo: "https://cdn.dribbble.com/userupload/16919185/file/original-b4e44f3ca0de2c7396958b2c44173314.jpg?crop=262x197-1738x1303&format=webp&resize=400x300&vertical=center" },
];

const ImageMarquee = ({
  items,
  title,
  reverse = false,
  duration = 5,
}) => {
  const animation = reverse
    ? { x: ["-50%", "0%"] }
    : { x: ["0%", "-50%"] };

  return (
    <div className="my-20">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-10">{title}</h2>
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6 items-center whitespace-nowrap"
          animate={animation}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          }}
          whileHover={{ scale: 1.05 }}
        >
          {items.concat(items).map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-4 py-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl min-w-[120px] hover:shadow-2xl transition-all"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-12 h-12  sm:w-16 sm:h-16 object-contain mb-"
              />
              <span className="text-white hidden sm:flex pt-5 text-xs sm:text-sm font-semibold text-center">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function BeautifulMarquees() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <ImageMarquee
        items={laptopCompanies}
        title="Top Laptop Companies"
        reverse={false}
        duration={5}
      />
      <ImageMarquee
        items={accountingTools}
        title="Popular Accounting Software & Tools"
        reverse={true}
        duration={5}
      />
    </div>
  );
}
