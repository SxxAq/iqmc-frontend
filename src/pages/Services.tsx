import React from "react";
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Comprehensive Auditing Services
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            At IQMC Global Assessment, we offer a wide range of auditing
            services to help businesses ensure compliance, maintain ethical
            standards, and promote fair labor practices. Our experienced team is
            dedicated to providing thorough and impartial assessments across
            various industries.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
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

export default Services;
