import React from 'react';

const BackIcon = ({ size = 24, color = "#F5F5F5", className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11Z" />
    </svg>
  );
};

export default BackIcon;