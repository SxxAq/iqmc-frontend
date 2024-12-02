import { useState } from "react";
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  href: string;
  dropdownItems?: { name: string; href: string }[];
}

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Services",
    href: "/services",
    dropdownItems: [
      { name: "C-TPAT", href: "/services/c-tpat" },
      { name: "Code Of Conduct", href: "/services/code-of-conduct" },
    ],
  },
  { name: "Business Integrity", href: "/business-integrity" },
  { name: "Our Policies", href: "/policies" },
  { name: "News", href: "/news" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="IQMC GLOBAL ASSESSMENT"
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="text-white hover:text-red-500 py-2"
                >
                  {item.name}
                </Link>

                {item.dropdownItems && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-black py-2 min-w-[200px] shadow-lg">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-4 py-2 text-white hover:text-red-500 hover:bg-gray-900"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/application"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md transition duration-300"
            >
              Application Form
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className="block py-2 text-white hover:text-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdownItems && (
                  <div className="pl-4">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block py-2 text-gray-300 hover:text-red-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/application"
              className="block mt-4 bg-red-600 hover:bg-red-700 px-6 py-2 text-center rounded-md transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Application Form
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
