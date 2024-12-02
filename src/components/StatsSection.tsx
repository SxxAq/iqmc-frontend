import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Globe, Clock } from "lucide-react";

const stats = [
  {
    value: "1000+",
    label: "Audits Conducted",
    icon: Award,
    color: "from-red-500 to-red-600",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Users,
    color: "from-red-600 to-red-700",
  },
  {
    value: "50+",
    label: "Countries Served",
    icon: Globe,
    color: "from-red-700 to-red-800",
  },
  {
    value: "15+",
    label: "Years of Experience",
    icon: Clock,
    color: "from-red-800 to-red-900",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
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
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-red-500/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg shadow-red-500/25`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-300 text-lg">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
