import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ColorChangeCards = ({ title, description }) => {
  return (
    <div className="p-4 py-12 md:p-8">
      <div className="text-center mb-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hiw-title"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hiw-subtitle"
        >
          {description}
        </motion.p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <Card
          heading="Tally ERP"
          description="Advanced GST billing, inventory & accounting for every business."
          imgSrc="https://i.pinimg.com/736x/e5/2b/5b/e52b5b7a4f57798dda1afb0ebb402856.jpg"
        />
        <Card
          heading="Busy Accounting"
          description="Powerful accounting software tailored for SMEs with GST features."
          imgSrc="https://i.pinimg.com/1200x/90/8c/0c/908c0c67d89daf385fbeff8ca6241e27.jpg"
        />
        <Card
          heading="Marg ERP"
          description="Complete inventory, billing & ERP solution for retail & pharmacy."
          imgSrc="https://i.pinimg.com/736x/89/78/f4/8978f4574614465f262f871ca3fc96d5.jpg "
        />
        <Card
          heading="Support & Installation"
          description="Expert setup, training, updates & troubleshooting assistance."
          imgSrc="https://i.pinimg.com/736x/ba/af/74/baaf747f7baefcf6f57477ba511d4966.jpg"
        />
      </div>
    </div>
  );
};


const Card = ({ heading, description, imgSrc }) => {
  return (
    <motion.div
      transition={{ staggerChildren: 0.035 }}
      whileHover="hover"
      className="group relative h-64 w-full cursor-pointer overflow-hidden bg-slate-300"
    >
      <div
        className="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-20 flex h-full flex-col justify-between p-4 text-black transition-colors duration-500 group-hover:text-gray-900">
        <FiArrowRight className="ml-auto text-3xl transition-transform duration-500 group-hover:-rotate-45" />
        <div>
          <h4>
            {heading.split("").map((letter, index) => (
              <AnimatedLetter letter={letter} key={index} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedLetter = ({ letter }) => {
  return (
    <div className="inline-block h-[36px] overflow-hidden font-semibold text-3xl">
      <motion.span
        className="flex min-w-[4px] flex-col"
        style={{ y: "0%" }}
        transition={{ duration: 0.5 }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCards;
