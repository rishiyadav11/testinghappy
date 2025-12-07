import { TestimonialsColumn } from "./ui/Testimonials";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Very good experience with Happy Laptops. Staff behaviour is very nice and helpful.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Punit Kaushik",
    role: "Customer",
  },
  {
    text: "Best shop in Narnaul. Behaviour with customers is polite and good.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Rohit Yadav",
    role: "Customer",
  },
  {
    text: "Purchased a Dell curved monitor. Amazing experience and great interaction with the owner.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXebwgu0BrqJQxGCqRLraBVTaIuoZDeiPheyIS6YHt9diZ4ATW8=w90-h90-p-rp-mo-ba2-br100",
    name: "Pankaj Beriwal",
    role: "Customer",
  },
  {
    text: "I feel like a family member in this store. Always helpful and never refuses anything.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXuqWhYatid7mboybC-3ciFfLmwsrfsO14xMU9TA0NZxz9k--MoMg=w90-h90-p-rp-mo-ba2-br100",
    name: "Superstar Sikka",
    role: "Customer",
  },
  {
    text: "Amazing shop, mesmerizing experience. Best place for laptops in Narnaul.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWKoctqrdzeKrZtTg1ZSb7V5fjbFOoGUNciAEX5EzyiXTihMcDa8w=w90-h90-p-rp-mo-br100",
    name: "Deepika chauhan",
    role: "Customer",
  },
  {
    text: "Best place in Narnaul to build a gaming PC. Got an awesome deal and great service.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUryJvpqgU8VlqMjChG3j8yw1rfhDyBT5oq0WCH4UYk2isZ0Dw=w90-h90-p-rp-mo-br100",
    name: "SK Entertainment",
    role: "Gaming PC Buyer",
  },
  {
    text: "One of the best computer shops in the whole Narnaul area. Latest gadgets at great prices.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjW2Vn_k4d7WAwMj4nv78JXUS3MunPhVnViBt50wTA7ImgHh1mTF=w90-h90-p-rp-mo-ba2-br100",
    name: "Praveen Kumar Gurjar",
    role: "Local Guide",
  },
  {
    text: "Very nice experience. Helpful and well-experienced staff. Must visit for laptops or repairs.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXdDOaQpHu-dVFWMSkHI8IecRaiX-z8fkWa9DuEUIWcGQmTPi0H=w90-h90-p-rp-mo-br100",
    name: "Sandeep Kumar Saini",
    role: "Customer",
  },
  {
    text: "Such a good place with a variety of laptops and accessories. Best services and genuine products.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWbNttoxVUp9eDJODTFVLFHhA1KcLoDVatS0MU7wChOeT3jyBoa=w90-h90-p-rp-mo-br100",
    name: "Pankaj Gupta",
    role: "Customer",
  },
];



const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
<section className="bg-background my-20 relative">

  <div className="container z-10 mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
    >
      <div className="flex justify-center">
        <div className="border py-1 px-4 rounded-lg">Testimonials</div>
      </div>

      <h2 className="hiw-title sm:w-[50vw] mt-10 sm:mt-0 text-center">
        What our users say
      </h2>

      <p className="hiw-subtitle w-[50vw] sm:w-full text-center">
        See what our customers have to say about us.
      </p>

      {/* ⭐ Google Review Button */}
      <a
        href="https://search.google.com/local/writereview?placeid=ChIJhx_u2t-1EjkRn0Ej_4KGaOA
"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-blue-600 hover:bg-sky-700 bg-blue text-white font-medium px-6 py-3 rounded-xl shadow-lg transition-all"
      >
        ⭐ Write a Google Review
      </a>

    </motion.div>

    <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
      <TestimonialsColumn testimonials={firstColumn} duration={15} />
      <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
      <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
    </div>
  </div>

</section>

  );
};

export default Testimonials;