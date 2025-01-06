// src/components/layout/Section.jsx
export const Section = ({ 
    children,
    title,
    description,
    className = '' 
  }) => {
    return (
      <section className={`py-8 ${className}`}>
        {(title || description) && (
          <div className="mb-6">
            {title && (
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            )}
            {description && (
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            )}
          </div>
        )}
        {children}
      </section>
    );
  };