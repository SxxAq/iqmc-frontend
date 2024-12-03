import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LeadershipSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-500 font-medium mb-2 block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries leading our commitment to excellence in global
            compliance and certification.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Managing Director
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am honored to extend a warm welcome to you on behalf of our
                team at IQMC Global Assessment and IQMC INDIA Certification
                Private Limited. As the Managing Director of our social
                compliance auditing firm, I am proud of the work we do to
                promote ethical practices and uphold labor standards in the
                industry.
              </p>
              <motion.a
                href="/about"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Director
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                As the Director of IQMC INDIA Certification Pvt Ltd & IQMC
                Global Assessment, I am honoured to guide a team committed to
                enhancing transparency, accountability, and responsible growth.
                Our goal is to empower organizations through thorough social
                audits, helping them maintain ethical practices, optimize
                operations, and create meaningful impact for their stakeholders.
              </p>
              <motion.a
                href="/about"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
