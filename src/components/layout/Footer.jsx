// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center">
              <Book className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">BibleConnect</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Empowering spiritual growth through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-base text-gray-500 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-500 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:info@chachatech.com" className="flex items-center text-gray-500 hover:text-gray-900">
                  <Mail className="h-5 w-5 mr-2" />
                  info@chachatech.com
                </a>
              </li>
              <li>
                <a href="tel:+254700000000" className="flex items-center text-gray-500 hover:text-gray-900">
                  <Phone className="h-5 w-5 mr-2" />
                  +254 700 000 000
                </a>
              </li>
              <li>
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-5 w-5 mr-2" />
                  Nairobi, Kenya
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/chachatech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/chachatech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-base text-gray-400">
              © {currentYear} BibleConnect. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-gray-500">
                Powered and maintained by{' '}
                <a
                  href="https://chachatech.com"
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