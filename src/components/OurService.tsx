import { ClipboardCheck, Shield, AlertTriangle, Settings } from "lucide-react";
import { motion } from "framer-motion";
export default function ServiceOverview() {
  const services = [
    {
      title: "Compliance Management",
      icon: ClipboardCheck,
      description:
        "Helping you adhere to global standards like C-TPAT and ethical codes of conduct, ensuring regulatory compliance and business integrity.",
      bgColor: "bg-yellow-400",
    },
    {
      title: "Quality Assurance",
      icon: Shield,
      description:
        "Delivering thorough assessments to safeguard the quality of your supply chains and operational processes.",
      bgColor: "bg-gray-600",
    },
    {
      title: "Risk Mitigation",
      icon: AlertTriangle,
      description:
        "Identifying and mitigating risks to protect your organization from potential threats and vulnerabilities.",
      bgColor: "bg-sky-400",
    },
    {
      title: "Operational Excellence",
      icon: Settings,
      description:
        "Providing actionable insights and strategies to optimize your processes and drive sustainable growth.",
      bgColor: "bg-white border",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center inline-block px-4 py-1 rounded-full  bg-yellow-400 text-white mb-4">
            How We Work
          </div>
          <h2 className="text-2xl md:text-3xl font-bold  mb-4">
            What we do for our customers
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide a fully integrated portfolio of Assurance, Testing,
            Inspection and Certification (ATIC) Services that deliver complete
            peace of mind across all products, services and operating systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`w-24 h-24 rounded-full ${service.bgColor} flex items-center justify-center mb-4`}
              >
                <service.icon
                  className={`w-12 h-12 ${
                    service.bgColor === "bg-white"
                      ? "text-gray-900"
                      : "text-gray-900"
                  }`}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
