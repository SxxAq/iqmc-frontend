import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Globe, Clock } from "lucide-react";

const stats = [
  { value: "1000+", label: "Audits Conducted", icon: Award },
  { value: "98%", label: "Client Satisfaction", icon: Users },
  { value: "50+", label: "Countries Served", icon: Globe },
  { value: "15+", label: "Years of Experience", icon: Clock },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-100 mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
