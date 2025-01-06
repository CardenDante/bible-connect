// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Grid for Footer Content */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Book className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">BibleConnect</span>
            </div>
            <p className="text-sm text-gray-500">
              Empowering spiritual growth through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-base text-gray-600 hover:text-indigo-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-base text-gray-600 hover:text-indigo-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-600 hover:text-indigo-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-600 hover:text-indigo-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:info@chachatech.com"
                  className="flex items-center text-gray-600 hover:text-indigo-600"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  info@chachatech.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254796280700"
                  className="flex items-center text-gray-600 hover:text-indigo-600"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +254 796280700
                </a>
              </li>
              <li>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  Nairobi, Kenya
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Connect With Us
            </h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/chachatech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/chachatech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-500">
              © {currentYear} BibleConnect. All rights reserved.
            </div>
            <div>
              <span className="text-sm text-gray-500">
                Powered and maintained by{' '}
                <a
                  href="https://chachatech.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Chacha Technologies
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
