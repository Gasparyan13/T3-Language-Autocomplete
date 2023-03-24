import React from "react";

export const RusFlagIcon: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="#F5F5F5" />
      <mask
        id="mask0_1555_158"
        maskUnits="userSpaceOnUse"
        x="1"
        y="4"
        width="22"
        height="16"
      >
        <rect
          x="1.75"
          y="4.75"
          width="20.5"
          height="14.5"
          rx="1.75"
          fill="white"
          stroke="white"
          strokeWidth="0.5"
        />
      </mask>
      <g mask="url(#mask0_1555_158)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 14.5H22.5V9.5H1.5V14.5Z"
          fill="#0C47B7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 19.5H22.5V14.5H1.5V19.5Z"
          fill="#E53B35"
        />
      </g>
    </svg>
  );
};
