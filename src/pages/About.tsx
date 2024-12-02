import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import Testimonial from "../components/Testimonial";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gray-900 text-white py-32"
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/about-header-default.jpg")',
            filter: "brightness(0.3)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-center mb-4"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-2 text-sm"
          >
            <Link to="/" className="hover:text-red-500 transition duration-300">
              HOME
            </Link>
            <span>/</span>
            <span>ABOUT US</span>
          </motion.div>
        </div>
      </motion.div>

      <section className="py-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">
                Welcome to IQMC INDIA Certification Pvt Ltd & IQMC Global
                Assessment
              </h2>
              <p className="text-gray-600 leading-relaxed">
                IQMC INDIA Certification Pvt Ltd was founded in 2010 and has
                become a trusted provider of integrated and professionally
                managed training, development, service of training & development
                on management and social auditing and ISO services. The company
                was established with a mission to pioneer the field of
                certification and inspection, bringing new values of integrity
                and ethics.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, IQMC INDIA, IQMC Global Assessment has built a
                successful global business based on its long-standing reputation
                and expertise in providing high-quality auditing, training,
                inspection, and certification services.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/project-detail-img-2.jpg"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
              <img
                src="/about-5.jpg"
                alt="Professional meeting"
                className="rounded-lg shadow-2xl mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-900 text-white py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-red-500 font-medium mb-4">Need Some Help?</h3>
          <h2 className="text-4xl font-bold mb-8">
            We are committed to upholding the most rigorous standards in social
            compliance auditing.
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            Our experienced team ensures that your business meets global ethical
            and regulatory requirements, fostering transparency, accountability,
            and trust. With us, you gain the confidence to navigate complex
            compliance challenges and maintain the integrity of your operations.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.a
              href="tel:+919339337237"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-md inline-flex items-center gap-2 transition duration-300"
            >
              <Phone className="w-5 h-5" />
              CALL US
            </motion.a>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Contact</p>
                <p className="font-semibold">info@iqmcindia.com</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mb-16"
          >
            <h3 className="text-red-500 text-lg font-semibold mb-4">
              Dedicated Team
            </h3>
            <h2 className="text-4xl font-bold mb-8">
              Professional Individuals
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              The company has a team of experienced auditors who are qualified
              to conduct various types of social compliance and management
              system audits, including Sedex, BSCI, WRAP, SA8000, SLCP and ISO.
              IQMC Global Assessment mission is to empower supply chains to
              achieve and maintain the highest standards of social
              responsibility across their operations. The company approaches
              each audit with meticulous attention to detail, integrity, and
              impartiality, striving to provide accurate assessments and
              actionable insights to drive meaningful progress.
            </p>
          </motion.div>
        </div>
      </section>

      <Testimonial />
    </div>
  );
};

export default AboutUs;
