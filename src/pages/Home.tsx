import React from "react";
import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import StatsSection from "../components/StatsSection";
import CtaSection from "../components/CtaSection";

import LeaderShipTeam from "../components/LeaderShipTeam.tsx";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black"
    >
      {" "}
      <HeroSlider />
      <AboutSection />
      <StatsSection />
      <LeaderShipTeam />
      <ServicesSection />
      <TestimonialSection />
      <CtaSection />
    </motion.div>
  );
};

export default Home;
