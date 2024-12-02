import React from "react";
import HeroSlider from "../components/HeroSlider";
import Testimonial from "../components/Testimonial";
import { ArrowRight } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Welcome to IQMC INDIA Certification Pvt Ltd & IQMC Global
                Assessment
              </h2>
              <p className="text-gray-600 mb-6">
                We are pleased to welcome you to our company website of IQMC
                Global Assessment and IQMC INDIA Certification Private Limited,
                where we strive to uphold the highest standards of social
                compliance auditing. At our firm, we are dedicated to promoting
                ethical practices and ensuring fair treatment of workers across
                industries.
              </p>
              <p className="text-gray-600 mb-8">
                With a team of experienced professionals and a commitment to
                transparency and integrity, IQMC Global Assessment and IQMC
                INDIA Certification Private Limited works tirelessly to provide
                accurate and reliable audit services that meet the needs of our
                clients.
              </p>
              <a
                href="/about"
                className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300"
              >
                READ MORE <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <img
                src="/about-12.jpg"
                alt="About IQMC Global Assessment"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-lg font-semibold">
                  Committed to Excellence in Social Compliance Auditing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-gray-600">
              At the core of our audit services is the power of informed
              decision-making. Our independent and comprehensive audits empower
              your organization to navigate complexities with clarity and
              confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/service-image-2.png"
                  alt="C-TPAT Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">C-TPAT</h3>
                <p className="text-gray-600 mb-6">
                  We conduct C-TPAT (Customs-Trade Partnership Against
                  Terrorism) audits to ensure supply chain security and
                  compliance with international standards.
                </p>
                <a
                  href="/services/c-tpat"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                >
                  READ MORE <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/service-image-3.png"
                  alt="Code of Conduct Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Code of Conduct (CoC)
                </h3>
                <p className="text-gray-600 mb-6">
                  We conduct Code of Conduct (CoC) audits to ensure that our
                  clients maintain ethical standards and promote fair labor
                  practices throughout their operations.
                </p>
                <a
                  href="/services/code-of-conduct"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                >
                  READ MORE <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ensure Compliance?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how we can help your organization maintain
            ethical standards and fair labor practices. Our team is ready to
            support your compliance journey.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300"
          >
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
      <Testimonial />
    </div>
  );
};

export default Home;
