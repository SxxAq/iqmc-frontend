import React from "react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumbs: { name: string; href: string }[];
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}) => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl mb-8">{subtitle}</p>}
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            {breadcrumbs.map((item, index) => (
              <li key={item.name} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-300">{item.name}</span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-white hover:text-gray-300"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
