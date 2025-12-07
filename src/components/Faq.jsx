import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between text-left text-lg font-medium text-white hover:text-blue-400 transition-colors"
      >
        {question}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div
        className={`mt-2 overflow-hidden text-gray-100 transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "What services does Happy Laptops & Computers offer?",
    answer:
      "We provide laptop and computer repair, chip-level service, AMC, software installation, OS setup, networking solutions, CCTV installation, and business IT support.",
  },
  {
    question: "Do you offer home or onsite repair service?",
    answer:
      "Yes! We provide fast onsite repair for laptops, desktops, printers, and networking issues within your area.",
  },
  {
    question: "How long does a laptop repair usually take?",
    answer:
      "Most issues are fixed within 1–3 hours. Chip-level or part replacements may take 24–48 hours depending on availability.",
  },
  {
    question: "Are the replacement parts original?",
    answer:
      "Yes, we use 100% original and high-quality compatible parts with warranty. You can choose OEM or premium options as per your budget.",
  },
  {
    question: "Do you provide Annual Maintenance Contract (AMC)?",
    answer:
      "Yes, we offer affordable AMC plans for homes, offices, institutes, and businesses to keep systems running smoothly.",
  },
  {
    question: "Can you recover data from damaged laptops?",
    answer:
      "Absolutely. We offer professional data recovery for crashed systems, dead laptops, formatted drives, and corrupted hard disks.",
  },
  {
    question: "Do you fix slow or hanging computers?",
    answer:
      "Yes! We optimize your system, remove junk, upgrade RAM/SSD, and improve performance without losing data.",
  },
  {
    question: "Do you install licensed and genuine software?",
    answer:
      "Yes, we provide installation of genuine Windows, MS Office, antivirus software, accounting software, and more.",
  },
  {
    question: "What are your service charges?",
    answer:
      "Basic diagnostics are free. Repair charges depend on the issue, starting from very affordable rates. We always update you before proceeding.",
  },
  {
    question: "How do I book a service with Happy Laptops & Computers?",
    answer:
      "You can call, WhatsApp, or fill out the contact form on our website to book a quick repair or service appointment.",
  },
];

const FAQPage = () => {
  return (
    <section>
      <div className="min-h-screen bg-zinc py-20 px-5 flex item-center flex-col md:px-20 text-white">
        <h2 className="hiw-title mb-10">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto divide-y">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
