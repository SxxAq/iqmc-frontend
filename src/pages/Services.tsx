import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";

const services = [
  {
    title: "C-TPAT Audits",
    description:
      "We provide comprehensive C-TPAT (Customs-Trade Partnership Against Terrorism) audits to ensure supply chain security and compliance with international trade regulations.",
    icon: "🛡️",
  },
  {
    title: "Code of Conduct Audits",
    description:
      "Our team conducts thorough audits to verify compliance with ethical standards and codes of conduct, helping businesses maintain integrity and social responsibility.",
    icon: "📜",
  },
  {
    title: "Social Compliance Audits",
    description:
      "We assess and report on companies' adherence to social responsibility and labor standards, ensuring fair and ethical treatment of workers throughout the supply chain.",
    icon: "🤝",
  },
  {
    title: "Environmental Compliance Audits",
    description:
      "Our environmental compliance audits help organizations assess their impact on the environment and ensure adherence to relevant environmental regulations and standards.",
    icon: "🌿",
  },
  {
    title: "Health and Safety Audits",
    description:
      "We conduct comprehensive health and safety audits to identify potential hazards, assess risk management practices, and ensure compliance with occupational health and safety standards.",
    icon: "🦺",
  },
  {
    title: "Supply Chain Audits",
    description:
      "Our supply chain audits help businesses evaluate and improve their supply chain processes, ensuring efficiency, transparency, and compliance throughout the entire chain.",
    icon: "🔗",
  },
];

const Services: React.FC = () => {
  return (
    <div>
      <Hero
        title="Our Services"
        backgroundImage="/services-hero-bg.jpg"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <section className="py-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-center mb-8"
          >
            Comprehensive Auditing Services
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-center mb-16 max-w-3xl mx-auto text-lg"
          >
            At IQMC Global Assessment, we offer a wide range of auditing
            services to help businesses ensure compliance, maintain ethical
            standards, and promote fair labor practices. Our experienced team is
            dedicated to providing thorough and impartial assessments across
            various industries.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-gray-900 text-white py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Ensure Compliance?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Contact us today to learn how we can help your organization maintain
            ethical standards and fair labor practices.
          </p>
          <motion.a
            href="/contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300 text-lg font-semibold"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
