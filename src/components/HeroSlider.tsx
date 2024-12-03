import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import image from '../../public/heroImage.jpg'

const HeroSection: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative min-h-screen py-[14%] md:py-0 flex items-center justify-center bg-gray-50 px-[10%] overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            C-TPAT, COC, <br />
            <span className="text-yellow-500">Social Compliance Auditing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-600"
          >
            Ethical Auditing and System Certifications for your business success
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center md:justify-start flex-wrap gap-2"
          >
            <a
              href="#contact"
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full transition duration-300 group"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-full border border-gray-200 transition duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="flex items-center justify-center"
        >
          <img 
            src={image} 
            alt="Social Compliance Auditing" 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 bg-yellow-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;