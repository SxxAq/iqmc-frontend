import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BusinessIntegrity: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gray-900 text-white py-32"
        >
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: 'url("/bussness-banner.jpg")',
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
              Business Integrity
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-2 text-sm"
            >
              <a
                href="/"
                className="hover:text-red-500 transition duration-300"
              >
                HOME
              </a>
              <span>/</span>
              <span>BUSINESS INTEGRITY</span>
            </motion.div>
          </div>
        </motion.div>

        <section className="py-24 bg-gradient-to-b from-gray-100 to-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold text-center mb-12"
            >
              The Importance of Business Integrity
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 mb-12 text-center max-w-3xl mx-auto text-lg"
            >
              Business integrity is crucial in social compliance for several
              reasons:
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <img
                  src="/about-12.jpg"
                  alt="Team collaboration"
                  className="rounded-lg shadow-2xl mb-8 w-full h-auto"
                />
                <h3 className="text-2xl font-semibold mb-4">
                  Upholding Ethical Standards:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Business integrity ensures that companies adhere to ethical
                  principles and values, including fairness, honesty, and
                  respect for human rights. This commitment is essential for
                  promoting fair labor practices, protecting workers' rights,
                  and fostering a positive work environment.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Building Trust and Credibility:
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Demonstrating integrity in social compliance builds trust
                    and credibility with stakeholders, including employees,
                    customers, investors, and communities. When companies
                    operate with integrity, stakeholders are more likely to have
                    confidence in their commitment to social responsibility and
                    ethical conduct.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Preventing Legal and Reputational Risks:
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Businesses that prioritize integrity in social compliance
                    are less likely to face legal liabilities, regulatory fines,
                    and reputational damage. By complying with labor laws and
                    industry standards, companies can mitigate the risk of
                    violations and associated penalties.
                  </p>
                </div>
                <img
                  src="/about-8.jpg"
                  alt="Business meeting"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 space-y-8"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Enhancing Brand Reputation:
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A reputation for integrity in social compliance can be a
                valuable asset for businesses. It enhances brand reputation,
                differentiation, and competitiveness in the marketplace.
                Consumers are increasingly prioritizing ethical considerations
                when making purchasing decisions, and businesses with strong
                social compliance practices can attract and retain customers who
                value responsible business conduct.
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                Promoting Sustainable Business Practices:
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Business integrity in social compliance contributes to long-term
                sustainability by fostering a culture of responsibility and
                accountability. Companies that prioritize social compliance are
                better equipped to address social and environmental challenges,
                mitigate risks, and create value for society while maintaining
                profitability.
              </p>
            </motion.div>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 text-gray-600 text-lg text-center max-w-3xl mx-auto"
            >
              Overall, business integrity is essential in social compliance
              because it establishes a foundation of trust, credibility, and
              accountability that enables businesses to operate ethically,
              sustainably, and responsibly in today's complex and interconnected
              global economy.
            </motion.p>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-gray-900 text-white py-20"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Ensure Compliance?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Contact us today to learn how we can help your organization
              maintain ethical standards and fair labor practices.
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
      </main>
    </div>
  );
};

export default BusinessIntegrity;
