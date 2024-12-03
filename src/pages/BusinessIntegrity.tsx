import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  Globe,
  ArrowRight,
  Target,
} from "lucide-react";

const BusinessIntegrity: React.FC = () => {
  const integrityFeatures = [
    {
      icon: ShieldCheck,
      title: "Ethical Foundation",
      description: "Establishing a robust framework of ethical standards and principles.",
      color: "text-blue-600",
      details: "Our approach ensures comprehensive ethical guidelines that protect worker rights and promote fair business practices."
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description: "Navigating complex regulatory landscapes with precision.",
      color: "text-green-600",
      details: "Proactive strategies to mitigate risks and ensure alignment with global labor standards and regulations."
    },
    {
      icon: Globe,
      title: "Global Responsibility",
      description: "Driving sustainable and socially responsible business practices.",
      color: "text-indigo-600",
      details: "Connecting local actions to global impact, creating value for businesses and communities alike."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-32">
      <div className="container mx-auto px-4 ">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0,y: 20 }}
            animate={{ opacity: 1,y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-yellow-200 inline-block px-4 py-2 rounded-full mb-6">
              <span className="text-yellow-900 font-semibold">Business Integrity</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 text-gray-900 max-w-3xl mx-auto leading-tight">
              Transforming Ethical Business Landscapes
            </h1>
            
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Pioneering comprehensive compliance solutions that elevate organizational integrity and social responsibility
            </p>
            
            <div className="flex justify-center space-x-4">
              <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg flex items-center hover:bg-yellow-600 transition">
                Explore Solutions <ArrowRight className="ml-2" />
              </button>
              <button className="bg-white border border-yellow-400 text-yellow-800 px-8 py-4 rounded-lg hover:bg-yellow-50 transition">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {integrityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3}}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group"
              >
                <div className={`mb-4 ${feature.color}`}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-3">{feature.description}</p>
                <p className="text-gray-500 text-sm">{feature.details}</p>
              </motion.div>
            ))}
          </div>

          {/* Approach Section */}
          <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-yellow-200 inline-block px-4 py-2 rounded-full mb-6">
                <span className="text-yellow-900 font-semibold">Our Approach</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Comprehensive Integrity Framework
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                We develop holistic strategies that go beyond compliance, embedding ethical practices into the core of organizational culture.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  "Strategic Ethical Assessments",
                  "Continuous Improvement Protocols",
                  "Stakeholder Engagement Models",
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-yellow-50 p-6 rounded-lg flex items-center justify-center"
                  >
                    <Target className="text-yellow-500 mr-3" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg hover:bg-yellow-600 transition">
                Discover Our Methodology
              </button>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-yellow-500 text-white rounded-xl p-16 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Transform Your Business Integrity
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Partner with us to build a robust ethical framework that drives organizational excellence and social responsibility.
            </p>
            <button className="bg-white text-yellow-800 px-10 py-4 rounded-lg hover:bg-yellow-50 transition duration-300 flex items-center mx-auto">
              Get Started <ArrowRight className="ml-3" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntegrity;