"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Target } from "lucide-react";

const AboutSection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-yellow-400 text-white font-medium mb-4">
              About Us
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Elevating Social Compliance Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming workplace ethics through comprehensive and reliable
              auditing
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <Target className="w-6 h-6 text-yellow-400 mr-3" />
                Our Organization
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                IQMC INDIA Certification Pvt Ltd & IQMC Global Assessment stands
                at the forefront of social compliance auditing, dedicated to
                promoting ethical practices and ensuring fair treatment of
                workers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our experienced team combines expertise, transparency, and
                integrity to deliver precise and reliable audit services
                tailored to our clients' unique needs.
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                <h4 className="text-xl font-semibold mb-3 text-yellow-800">
                  Our Mission
                </h4>
                <p className="text-gray-700">
                  To empower organizations by promoting ethical business
                  practices and ensuring comprehensive worker protection through
                  meticulous social compliance auditing.
                </p>
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href="/about"
                  className="flex-1 text-center inline-flex items-center justify-center bg-yellow-400 text-white px-6 py-3 rounded-md transition duration-300 text-sm font-semibold hover:bg-yellow-500"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/contact"
                  className="flex-1 text-center inline-flex items-center justify-center border border-yellow-400 text-yellow-500 px-6 py-3 rounded-md transition duration-300 text-sm font-semibold hover:bg-yellow-50"
                >
                  Contact Us
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-3" />
                Our Commitment
              </h4>
              <p className="text-gray-700">
                We are dedicated to driving excellence in social compliance
                auditing. Our expert team ensures organizations maintain the
                highest standards of social responsibility and ethical
                practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-3" />
                Our Impact
              </h4>
              <p className="text-gray-700">
                By providing comprehensive auditing services, we create
                meaningful change. Our work directly contributes to improving
                workers' lives and fostering a more ethical, sustainable global
                business ecosystem.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
