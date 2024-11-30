import React from "react";

const services = [
  // Sample service data
  {
    id: 1,
    image: "/images/service1.jpg",
    title: "ISO 9001 Certification",
    description:
      "Get certified to the internationally recognized standard for quality management systems.",
    category: "Certification",
    link: "/services/iso-9001",
  },
  {
    id: 2,
    image: "/images/service2.jpg",
    title: "Internal Audits",
    description:
      "Conduct regular internal audits to identify areas for improvement and ensure compliance.",
    category: "Auditing",
    link: "/services/internal-audits",
  },
  {
    id: 3,
    image: "/images/service3.jpg",
    title: "Gap Analysis",
    description:
      "Identify the gaps between your current quality management system and the requirements of ISO 9001.",
    category: "Consulting",
    link: "/services/gap-analysis",
  },
  // Add more services here...
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-yellow-600">
          Our Services
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Comprehensive Quality Management Solutions
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          IQMC India offers a wide range of services to help businesses achieve
          excellence in quality management and compliance.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-yellow-600">
                    <a href={service.link} className="hover:underline">
                      {service.category}
                    </a>
                  </p>
                  <a href={service.link} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {service.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    href={service.link}
                    className="text-base font-semibold text-yellow-600 hover:text-yellow-500"
                  >
                    Learn more about this service
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
