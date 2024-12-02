import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialItem {
  content: string;
  author: string;
  position: string;
}

const testimonials: TestimonialItem[] = [
  {
    content:
      "I am honored to extend a warm welcome to you on behalf of our team at IQMC INDIA Certification Pvt Ltd & IQMC Global Assessment. As the Managing Director of our social compliance auditing firm, I am proud of the work we do to promote ethical practices and uphold labor standards in the industry. At IQMC INDIA Certification Pvt Ltd & IQMC Global Assessment, we are committed to conducting thorough and impartial audits that help businesses create safe and fair working environments for their employees. Our team of dedicated professionals brings a wealth of experience and expertise to every audit, ensuring that our clients receive accurate and actionable insights. I invite you to explore our website to learn more about our services and how we can support your organization in meeting social compliance requirements. Thank you for considering IQMC INDIA Certification Pvt Ltd & IQMC Global Assessment as your partner in promoting ethical practices and social responsibility.",
    author: "Sundeep Tomar",
    position: "Managing Director",
  },
  {
    content:
      "I am pleased to welcome you to our company website of IQMC INDIA Certification Pvt Ltd & IQMC Global Assessment, where we strive to uphold the highest standards of social compliance auditing. At our firm, we are dedicated to promoting ethical practices and ensuring fair treatment of workers across industries. With a team of experienced professionals and a commitment to transparency and integrity, IQMC INDIA Certification Pvt Ltd & IQMC Global Assessment works tirelessly to provide accurate and reliable audit services that meet the needs of our clients. Our goal is to support businesses in creating safe and respectful workplaces that adhere to international labor standards. Thank you for choosing us as your partner in social compliance auditing. We look forward to working together to promote ethical practices and drive positive change in the industry.",
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

const Testimonial: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-red-600 text-lg font-semibold mb-2">
            Our Clients
          </h3>
          <h2 className="text-3xl font-bold mb-4">Customers Experience</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Our clients consistently commend IQMC INDIA Certification Pvt Ltd &
            IQMC Global Assessment for our exceptional social compliance
            auditing services. They value our dedication to understanding their
            unique needs and delivering tailored solutions that help them ensure
            ethical practices and fair labor standards. Our commitment to
            excellence ensures a seamless and rewarding partnership, fostering
            long-term success for both our clients and the industries we serve.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 p-2 text-gray-500 hover:text-red-600"
          >
            <ChevronLeft size={32} />
          </button>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg max-w-lg"
          >
            <div className="text-red-600 text-4xl mb-4">
              <Quote />
            </div>
            <p className="text-gray-600 mb-6">
              {testimonials[current].content}
            </p>
            <div>
              <h4 className="font-bold text-lg">
                {testimonials[current].author}
              </h4>
              <p className="text-gray-500">{testimonials[current].position}</p>
            </div>
          </motion.div>
          <button
            onClick={handleNext}
            className="absolute right-0 p-2 text-gray-500 hover:text-red-600"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`mx-1 w-2 h-2 rounded-full ${index === current ? "bg-red-600" : "bg-gray-300"}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
