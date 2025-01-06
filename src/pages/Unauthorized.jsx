
// src/pages/Unauthorized.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Home } from 'lucide-react';

function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="flex justify-center">
            <Lock className="h-16 w-16 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Access Denied</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sorry, you don't have permission to access this page.
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;