// components/SrOnly.tsx
/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';

interface SrOnlyProps {
  children: React.ReactNode;
}

const SrOnly: React.FC<SrOnlyProps> = ({ children }) => {
  return (
    <span
      style={{
        clip: 'rect(1px, 1px, 1px, 1px)',
        clipPath: 'inset(50%)',
        height: '1px',
        width: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        whiteSpace: 'nowrap',
        border: '0',
      }}
    >
      {children}
    </span>
  );
};

export default SrOnly;