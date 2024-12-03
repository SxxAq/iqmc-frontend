import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.tsx";
import { useIntl } from "../i18n";
const navigation = [
  { name: "homeTitle", to: "/" },
  { name: "aboutUsTitle", to: "/about" },
  {
    name: "ourServicesTitle",
    to: "/services",
    dropdownItems: [
      { name: "cTpat", to: "/c-tpat" },
      { name: "codeOfConduct", to: "/code-of-conduct" },
    ],
  },
  { name: "businessIntegrityTitle", to: "/business-integrity" },
  { name: "ourPoliciesTitle", to: "/policies" },
  { name: "newsTitle", to: "/news" },
  { name: "contactUsTitle", to: "/contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { languages, language, setLanguage } = useLanguage();
  const intl = useIntl();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="IQMC GLOBAL ASSESSMENT"
              className="h-12"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.to}
                  className="text-gray-700 hover:text-yellow-500 py-2 flex items-center text-sm font-medium"
                >
                  {intl.formatMessage({ id: item.name })}{" "}
                  {item.dropdownItems && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </Link>

                {item.dropdownItems && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 bg-white py-2 min-w-[200px] rounded-md shadow-lg hidden group-hover:block"
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                      >
                        {intl.formatMessage({ id: dropdownItem.name })}{" "}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative group">
              <button className="text-gray-700 hover:text-yellow-500 p-2 flex items-center">
                <Globe className="w-5 h-5" />
                <span className="ml-2">{languages[language].flag}</span>
                <ChevronDown className="ml-2 w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 bg-white py-2 rounded-md shadow-lg hidden group-hover:block">
                {Object.keys(languages).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 flex items-center"
                  >
                    <span className="mr-2">{languages[lang].flag}</span>
                    {languages[lang].name}
                  </button>
                ))}
              </div>
            </div>{" "}
            <Link
              to="/application"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-full text-sm font-medium transition duration-300"
            >
              {intl.formatMessage({ id: "applicationForm" })}{" "}
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {intl.formatMessage({ id: item.name })}{" "}
                </Link>
              ))}
              <div className="p-4">
                <Link
                  to="/application"
                  className="block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-center font-medium transition duration-300"
                >
                  {intl.formatMessage({ id: "applicationForm" })}{" "}
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
