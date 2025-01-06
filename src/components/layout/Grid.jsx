// src/components/layout/Grid.jsx
export const Grid = ({ 
    children, 
    cols = 1,
    gap = 4,
    className = '' 
  }) => {
    const colsMap = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    };
  
    const gapMap = {
      2: 'gap-2',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-8',
    };
  
    return (
      <div className={`grid ${colsMap[cols]} ${gapMap[gap]} ${className}`}>
        {children}
      </div>
    );
  };
  