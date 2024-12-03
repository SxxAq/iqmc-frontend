import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "I am honored to extend a warm welcome to you on behalf of our team at IQMC INDIA Certification Pvt Ltd & IQMC Global Assessment. As the Managing Director of our social compliance auditing firm, I am proud of the work we do to promote ethical practices and uphold labor standards in the industry.",
    author: "Sundeep Tomar",
    position: "Managing Director",
  },
  {
    content:
      "I am pleased to welcome you to our company website of IQMC INDIA Certification Pvt Ltd & IQMC Global Assessment, where we strive to uphold the highest standards of social compliance auditing. At our firm, we are dedicated to promoting ethical practices and ensuring fair treatment of workers across industries.",
    author: "Bhupendra Kumar",
    position: "General Manager",
  },
  {
    content:
      "Social audits engage communities, ensuring transparency and accountability in projects. They help identify gaps, improve performance, and enhance governance by holding organizations and officials accountable. While challenges include training needs and resistance, social audits offer valuable insights that can shape policies and improve services.",
    author: "Rashi Raj",
    position: "Coordinator",
  },
];

const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-500 font-medium mb-2 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our clients consistently commend us for our exceptional social
            compliance auditing services.
          </p>
        </motion.div>

        <div className="relative flex justify-center items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-16"
            >
              <Quote className="text-yellow-500 w-12 h-12 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                {testimonials[current].content}
              </p>
              <div>
                <h4 className="font-bold text-lg text-gray-900">
                  {testimonials[current].author}
                </h4>
                <p className="text-gray-500">
                  {testimonials[current].position}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={handleNext}
            className="absolute right-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-yellow-500 w-6" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
