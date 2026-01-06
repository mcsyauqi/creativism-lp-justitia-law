import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}>
      {badge && (
        <span className="inline-block px-4 py-2 bg-navy-900/10 text-navy-900 text-sm font-semibold rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="heading-2 mb-4">{title}</h2>
      {subtitle && (
        <p className={`subheading ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  );
}
