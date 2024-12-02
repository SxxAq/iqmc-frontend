import React from "react";
import Hero from "../components/Hero";

const newsItems = [
  {
    year: 2024,
    title: "Milestone Achievement",
    content:
      "As part of our ongoing commitment to sustainability and regulatory compliance, IQMC INDIA Certification Private Limited is pleased to announce a significant milestone achieved in the beginning of 2024. Two more of our dedicated team members have successfully attained the prestigious Certified Social Compliance Auditor (CSCA) certification, further bolstering our internal expertise and capacity to drive sustainable initiatives within our organization.",
  },
  {
    year: 2020,
    title: "Expansion and Strategic Partnerships",
    content:
      "A decade later, in 2020, IQMC India Certification Pvt Ltd expanded its service portfolio by introducing social audits, which assess corporate social responsibility and community impact. Additionally, the company entered into a significant agreement with the International Certification Group (ICG), enhancing its service capabilities and aligning with global standards. These advancements reflect Iqmcindia's commitment to growth and excellence in the certification industry.",
  },
  {
    year: 2010,
    title: "Foundation and Initial Focus",
    content:
      "In 2010, IQMC India Certification Pvt Ltd was founded, specializing in management audits. The company's primary objective was to provide thorough evaluations and assessments aimed at improving organizational management and operational efficiency.",
  },
];

const News: React.FC = () => {
  return (
    <div>
      <Hero
        title="News"
        backgroundImage="/news-banner.jpg"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "News", href: "/news" },
        ]}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-red-600 pl-8 relative"
            >
              <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <h2 className="text-3xl font-bold mb-4">{item.year}</h2>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
