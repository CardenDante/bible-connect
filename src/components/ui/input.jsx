// src/components/ui/input.jsx
export const Input = ({ 
    label,
    error,
    className = '',
    ...props 
  }) => {
    return (
      <div>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          className={`
            block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
            placeholder-gray-400
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
            disabled:bg-gray-50 disabled:text-gray-500
            ${error ? 'border-red-300 text-red-900 placeholder-red-300' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  };
  