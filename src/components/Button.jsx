import React from 'react';

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'font-bold py-4 px-8 rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 focus:ring-pink-500',
    secondary: 'bg-gray-400 text-white hover:bg-gray-500 focus:ring-gray-400',
    option: 'w-full bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 text-gray-700 shadow-sm hover:shadow-md focus:ring-pink-200'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}