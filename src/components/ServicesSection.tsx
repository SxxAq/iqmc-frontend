import React from "react";
import { motion } from "framer-motion";
import { Shield, FileCheck, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "C-TPAT",
    description:
      "We conduct C-TPAT (Customs-Trade Partnership Against Terrorism) audits to ensure supply chain security and compliance with international standards.",
    link: "/services/c-tpat",
  },
  {
    icon: FileCheck,
    title: "Code of Conduct (CoC)",
    description:
      "We conduct Code of Conduct (CoC) audits to ensure that our clients maintain ethical standards and promote fair labor practices throughout their operations.",
    link: "/services/code-of-conduct",
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description:
      "Our comprehensive global compliance services help businesses navigate complex international regulations and maintain ethical practices worldwide.",
    link: "/services/global-compliance",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-700/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-red-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At the core of our audit services is the power of informed
            decision-making. Our independent and comprehensive audits empower
            your organization to navigate complexities with clarity and
            confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-red-500/10 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl p-3 inline-block mb-6">
                <service.icon className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-300"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
