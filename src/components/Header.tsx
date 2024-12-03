import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  {
    name: "Our Services",
    to: "/services",
    dropdownItems: [
      { name: "C-TPAT", to: "/c-tpat" },
      { name: "Code Of Conduct", to: "/code-of-conduct" },
    ],
  },
  { name: "Business Integrity", to: "/business-integrity" },
  { name: "Our Policies", to: "/policies" },
  { name: "News", to: "/news" },
  { name: "Contact Us", to: "/contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
                  {item.name}
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
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-yellow-500 p-2">
              <Globe className="w-5 h-5" />
            </button>
            <Link
              to="/application"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-full text-sm font-medium transition duration-300"
            >
              Application Form
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
                  to={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="p-4">
                <Link
                  to="/application"
                  className="block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-center font-medium transition duration-300"
                >
                  Application Form
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
