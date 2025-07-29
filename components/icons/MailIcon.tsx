
import React from 'react';

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625V6.375zM21 8.25V6.375A.375.375 0 0020.625 6h-1.25l-7.375 5.5-7.375-5.5H3.375A.375.375 0 003 6.375V8.25l7.97 5.978a.75.75 0 00.92-.001L21 8.25z" />
  </svg>
);

export default MailIcon;
