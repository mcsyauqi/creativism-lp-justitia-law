import React from 'react';

export default function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  return (
    <div
      className={`card ${hover ? 'card-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
