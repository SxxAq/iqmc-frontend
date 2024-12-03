import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  CheckCircle, 
  Globe, 
  Award, 
  ArrowRight, 
  Play 
} from "lucide-react";
import contentimg from '../../public/contact-banner.jpg'
import serviceimg from '../../public/service-image-3.png'
import calaction from '../../public/service-image-2.png'
const AboutUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: Target,
      title: "Our Organization",
      content: "IQMC INDIA Certification Pvt Ltd & IQMC Global Assessment stands at the forefront of social compliance auditing, dedicated to promoting ethical practices and ensuring fair treatment of workers."
    },
    {
      icon: CheckCircle,
      title: "Our Commitment",
      content: "We are dedicated to driving excellence in social compliance auditing. Our expert team ensures organizations maintain the highest standards of social responsibility and ethical practices."
    },
    {
      icon: Globe,
      title: "Our Impact",
      content: "By providing comprehensive auditing services, we create meaningful change. Our work directly contributes to improving workers' lives and fostering a more ethical, sustainable global business ecosystem."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-yellow-100 inline-block px-4 py-2 rounded-full mb-6">
                <span className="text-yellow-800 font-medium">About IQMC</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Elevating Social Compliance Standards
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transforming workplace ethics through comprehensive and reliable auditing
              </p>
              <div className="flex space-x-4">
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg flex items-center hover:bg-yellow-600 transition">
                  Explore Services <ArrowRight className="ml-2" />
                </button>
                <button className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg flex items-center hover:bg-gray-100 transition">
                  <Play className="mr-2 text-yellow-500" /> Watch Video
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white shadow-xl rounded-2xl p-6 transform -rotate-6 hover:rotate-0 transition-transform">
                  <Award className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="font-bold text-xl mb-2">Certified Excellence</h3>
                  <p className="text-gray-600">Recognized leader in social compliance auditing</p>
                  <img 
                     src="/project-detail-img-2.jpg"
                    alt="Certified Excellence" 
                    className="mt-4 rounded-lg shadow-md"
                  />
                </div>
                <div className="bg-white shadow-xl rounded-2xl p-6 transform rotate-6 hover:rotate-0 transition-transform translate-y-12">
                  <Globe className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="font-bold text-xl mb-2">Global Reach</h3>
                  <p className="text-gray-600">Serving organizations worldwide</p>
                  <img 
                    src="/about-5.jpg" 
                    alt="Global Reach" 
                    className="mt-4 rounded-lg shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tabbed Information Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex border-b">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-4 px-6 flex items-center justify-center space-x-2 transition ${
                  activeTab === index 
                    ? 'bg-yellow-500 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.title}</span>
              </button>
            ))}
          </div>
          <div className="p-12 text-center">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              {tabs[activeTab].content}
            </motion.p>
            <img 
              src={contentimg}
              alt="IQMC Impact" 
              className="mt-8 rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-yellow-100 inline-block px-4 py-2 rounded-full mb-6">
              <span className="text-yellow-800 font-medium">Our Mission</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Empowering Ethical Business Practices
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              To promote comprehensive worker protection through meticulous social compliance auditing, ensuring organizations maintain the highest standards of social responsibility.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Comprehensive Social Compliance Audits",
                "Ethical Business Practices",
                "Worker Protection Strategies"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-yellow-500 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
              Learn More About Our Mission
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow-xl rounded-2xl p-6 transform -translate-y-12">
              <Target className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">Strategic Approach</h3>
              <p className="text-gray-600">Precise and reliable audit methodologies</p>
              <img 
                src={serviceimg} 
                alt="Strategic Approach" 
                className="mt-4 rounded-lg shadow-md"
              />
            </div>
            <div className="bg-white shadow-xl rounded-2xl p-6">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">Continuous Improvement</h3>
              <p className="text-gray-600">Ongoing support for ethical practices</p>
              <img 
                src={calaction} 
                alt="Continuous Improvement" 
                className="mt-4 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;