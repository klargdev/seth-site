// svgs.jsx
import React from 'react';

// FlowerCorner SVG: Used for corner decorations
export const FlowerCornerSvg = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="100%"
    height="100%"
    fill="currentColor"
    className={`opacity-20 ${className}`}
  >
    <path d="M10,10 C20,5 30,15 25,25 C20,35 30,45 40,40 C50,35 60,45 55,55 C50,65 60,75 70,70 C80,65 90,75 85,85 C80,95 70,85 75,75 C80,65 70,55 60,60 C50,65 40,55 45,45 C50,35 40,25 30,30 C20,35 10,25 15,15 C20,5 10,5 10,10 Z" />
  </svg>
);

// FlowerDivider SVG: Used as a divider element
export const FlowerDividerSvg = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="24"
    height="24"
    fill="currentColor"
    className={className}
  >
    <path d="M50,20 C55,30 65,30 70,20 C75,10 85,10 90,20 C95,30 85,40 75,40 C65,40 55,30 50,40 C45,30 35,40 25,40 C15,40 5,30 10,20 C15,10 25,10 30,20 C35,30 45,30 50,20 Z" />
    <circle cx="50" cy="50" r="8" />
  </svg>
);
