import React from "react";
import { motion } from "framer-motion";
import { Shield, FileCheck, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "C-TPAT",
    description:
      "We conduct C-TPAT (Customs-Trade Partnership Against Terrorism) audits to ensure supply chain security and compliance with international standards.",
  },
  {
    icon: FileCheck,
    title: "Code of Conduct (CoC)",
    description:
      "We conduct Code of Conduct (CoC) audits to ensure that our clients maintain ethical standards and promote fair labor practices throughout their operations.",
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description:
      "Our comprehensive global compliance services help businesses navigate complex international regulations and maintain ethical practices worldwide.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-center inline-block px-4 py-1 rounded-full  bg-yellow-400 text-white mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Expertise for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At the core of our audit services is the power of informed
            decision-making. Our independent and comprehensive audits empower
            your organization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-gray-50 hover:bg-white hover:shadow-xl rounded-2xl p-8 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <service.icon className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium group/link"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
