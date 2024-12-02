import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LeaderShipTeam: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the visionaries leading our commitment to excellence in global
            compliance and certification.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Managing Director Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm border border-red-500/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Managing Director
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I am honored to extend a warm welcome to you on behalf of our
                team at IQMC Global Assessment and IQMC INDIA Certification
                Private Limited. As the Managing Director of our social
                compliance auditing firm, I am proud of the work we do to
                promote ethical practices and uphold labor standards in the
                industry.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                At IQMC Global Assessment and IQMC INDIA Certification Private
                Limited, we are committed to conducting thorough and impartial
                audits that help businesses create safe and fair working
                environments for their employees.
              </p>
              <motion.a
                href="/about"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-300"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
            </div>
            <div className="relative h-64">
              <img
                src="/about-3.jpg"
                alt="Professional meeting room"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            </div>
          </motion.div>

          {/* Director Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm border border-red-500/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300"
          >
            <div className="relative h-64">
              <img
                src="/about-2.jpg"
                alt="Video conference"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-transparent"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Director</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                As the Director of IQMC INDIA Certification Pvt Ltd & IQMC
                Global Assessment, I am honoured to guide a team committed to
                enhancing transparency, accountability, and responsible growth.
                Our goal is to empower organizations through thorough social
                audits, helping them maintain ethical practices, optimize
                operations, and create meaningful impact for their stakeholders.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                We are driven by a passion for fostering trust and integrity,
                ensuring that businesses not only comply with regulations but
                also make a positive contribution to the communities they touch.
              </p>
              <motion.a
                href="/about"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-300"
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

export default LeaderShipTeam;
