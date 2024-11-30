import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
];

const navigation = {
  main: [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  top: [
    { name: "Careers", href: "/careers" },
    { name: "News", href: "/news" },
  ],
};

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">IQMC India</span>
          <img
            className="h-12 w-auto"
            src="/iqmc-logo.png"
            alt="IQMC India Logo"
          />
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navigation.main.map((item) => (
            <Link
              to={item.href}
              key={item.href}
              className="text-gray-600 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-sm font-semibold leading-6 text-gray-900 bg-transparent border-none"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navigation.main.map((item) => (
            <Link
              to={item.href}
              key={item.href}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
