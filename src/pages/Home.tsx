import React from "react";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";

const Home: React.FC = () => {
  return (
    <div>
      <Hero
        title="IQMC Global Assessment"
        subtitle="Ensuring Ethical Practices and Fair Labor Standards"
        backgroundImage="/hero-bg.jpg"
        breadcrumbs={[{ name: "Home", href: "/" }]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Welcome to IQMC Global Assessment
              </h2>
              <p className="text-gray-600 mb-4">
                IQMC Global Assessment is a leading provider of social
                compliance auditing services. We are committed to promoting
                ethical practices and ensuring fair treatment of workers across
                various industries.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced professionals conducts thorough and
                impartial audits to help businesses create safe and fair working
                environments for their employees.
              </p>
              <a
                href="/about-us"
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Learn More About Us
              </a>
            </div>
            <div>
              <img
                src="/about-image.jpg"
                alt="IQMC Global Assessment Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">C-TPAT Audits</h3>
              <p className="text-gray-600">
                We provide comprehensive C-TPAT (Customs-Trade Partnership
                Against Terrorism) audits to ensure supply chain security.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Code of Conduct Audits
              </h3>
              <p className="text-gray-600">
                Our team conducts thorough audits to verify compliance with
                ethical standards and codes of conduct.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Social Compliance Audits
              </h3>
              <p className="text-gray-600">
                We assess and report on companies' adherence to social
                responsibility and labor standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Ensure Compliance?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us today to learn how we can help your organization maintain
            ethical standards and fair labor practices.
          </p>
          <a
            href="/contact-us"
            className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300 text-lg font-semibold"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
