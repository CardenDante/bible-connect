//src/components/ui/alert.jsx
export const Alert = ({
  children,
  variant = 'info',
  className = ''
}) => {
  const variants = {
    info: 'bg-blue-50 text-blue-800',
    success: 'bg-green-50 text-green-800',
    warning: 'bg-yellow-50 text-yellow-800',
    error: 'bg-red-50 text-red-800'
  };

  return (
    <div className={`
      p-4 rounded-md
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </div>
  );
};
