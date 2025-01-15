// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Book } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'Community', href: '#community' },
    { name: 'About', href: '/about' }
  ];

  return (
    <nav className="bg-white fixed w-full z-50 shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Book className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">BibleConnect</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-gray-200 pt-4 pb-3">
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};