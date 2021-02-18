import React from "react";

const DirectMessage: React.FC = () => {
  return (
    <svg
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V10.5C0 10.8978 0.158035 11.2794 0.43934 11.5607C0.720644 11.842 1.10218 12 1.5 12H13.5C13.8978 12 14.2794 11.842 14.5607 11.5607C14.842 11.2794 15 10.8978 15 10.5V1.5C15 1.10218 14.842 0.720644 14.5607 0.43934C14.2794 0.158035 13.8978 0 13.5 0ZM13.5 3.525L7.5 7.5255L1.5 3.525V1.72275L7.5 5.7225L13.5 1.72275V3.525Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-4.09091"
          y1="6"
          x2="18.0682"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FCC7" />
          <stop offset="1" stopColor="#005FED" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DirectMessage;
