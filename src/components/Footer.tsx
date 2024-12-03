import React from "react";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/logo.png"
              alt="IQMC GLOBAL ASSESSMENT"
              className="h-12 mb-4"
            />
            <p className="text-gray-500">
              Providing ethical auditing and system certifications for your
              business success.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  C-TPAT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  Global Compliance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-600 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-600 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-600 transition-colors"
              >
                <LinkedIn className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} IQMC GLOBAL ASSESSMENT. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
