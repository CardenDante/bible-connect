// src/components/ui/card.jsx
export const Card = ({
    children,
    className = ''
  }) => {
    return (
      <div className={`
        bg-white shadow rounded-lg overflow-hidden
        ${className}
      `}>
        {children}
      </div>
    );
  };
  
  export const CardHeader = ({
    children,
    className = ''
  }) => {
    return (
      <div className={`px-4 py-5 border-b border-gray-200 ${className}`}>
        {children}
      </div>
    );
  };
  
  export const CardContent = ({
    children,
    className = ''
  }) => {
    return (
      <div className={`px-4 py-5 ${className}`}>
        {children}
      </div>
    );
  };