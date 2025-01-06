// src/pages/Unauthorized.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Home } from 'lucide-react';

export const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="flex justify-center">
              <Lock className="h-16 w-16 text-indigo-600" />
            </div>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Access Denied</h2>
            <p className="mt-2 text-base text-gray-500">
              Sorry, you don't have permission to access this page.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Home className="h-4 w-4 mr-2" />
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};