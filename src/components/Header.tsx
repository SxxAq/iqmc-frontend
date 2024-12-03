import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.tsx";
import { useIntl } from "../i18n";

const navigation = [
  { name: "homeTitle", href: "#" },
  { name: "aboutUsTitle", href: "#" },
  {
    name: "ourServicesTitle",
    href: "#",
    dropdownItems: [
      { name: "cTpat", href: "#c-tpat" },
      { name: "codeOfConduct", href: "#code-of-conduct" },
    ],
  },
  { name: "businessIntegrityTitle", href: "#" },
  { name: "ourPoliciesTitle", href: "#" },
  { name: "newsTitle", href: "#" },
  { name: "contactUsTitle", href: "#" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="IQMC GLOBAL ASSESSMENT"
              className="h-12"
            />
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-yellow-500 py-2 flex items-center text-sm font-medium"
                >
                  {intl.formatMessage({ id: item.name })}
                  {item.dropdownItems && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </a>

                {item.dropdownItems && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 bg-white py-2 min-w-[200px] rounded-md shadow-lg hidden group-hover:block"
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                      >
                        {intl.formatMessage({ id: dropdownItem.name })}
                      </a>
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
            </div>
            <a
              href="#application"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-full text-sm font-medium transition duration-300"
            >
              {intl.formatMessage({ id: "applicationForm" })}
            </a>
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
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-md p-4"
            >
              <div className="container mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder={intl.formatMessage({ id: "search" })}
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {intl.formatMessage({ id: item.name })}
                </a>
              ))}
              <div className="p-4">
                <a
                  href="#application"
                  className="block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-center font-medium transition duration-300"
                >
                  {intl.formatMessage({ id: "applicationForm" })}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
