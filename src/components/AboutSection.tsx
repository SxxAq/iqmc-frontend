import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="text-yellow-500 font-medium mb-2 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Welcome to IQMC INDIA Certification Pvt Ltd & IQMC Global
              Assessment
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are pleased to welcome you to our company website, where we
              strive to uphold the highest standards of social compliance
              auditing. At our firm, we are dedicated to promoting ethical
              practices and ensuring fair treatment of workers across
              industries.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With a team of experienced professionals and a commitment to
              transparency and integrity, we work tirelessly to provide accurate
              and reliable audit services that meet the needs of our clients.
            </p>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full transition duration-300 group"
            >
              Learn More{" "}
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/about-image.jpg"
              alt="About IQMC Global Assessment"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-lg font-semibold">
                Committed to Excellence in Social Compliance Auditing
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
