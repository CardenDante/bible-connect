// src/components/layout/Stack.jsx
export const Stack = ({ 
    children, 
    direction = 'vertical',
    spacing = 4,
    className = '' 
  }) => {
    const directionMap = {
      vertical: 'flex-col space-y',
      horizontal: 'flex-row space-x'
    };
  
    return (
      <div className={`flex ${directionMap[direction]}-${spacing} ${className}`}>
        {children}
      </div>
    );
  };
  