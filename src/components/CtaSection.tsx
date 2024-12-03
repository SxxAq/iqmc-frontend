import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-yellow-50 rounded-2xl p-12 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-100 to-transparent opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Ensure Compliance?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Contact us today to learn how we can help your organization
              maintain ethical standards and fair labor practices. Our team is
              ready to support your compliance journey.
            </p>
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full transition-all duration-300 font-medium group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
