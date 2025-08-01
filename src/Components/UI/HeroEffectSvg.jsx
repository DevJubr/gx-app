import React from "react";

const HeroEffectSvg = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 1708"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3" filter="url(#filter0_f_44_12)">
        <circle cx="694" cy="854" r="454" fill="#63FD88" />
      </g>
      <defs>
        <filter
          id="filter0_f_44_12"
          x="-160"
          y="0"
          width="1708"
          height="1708"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="200"
            result="effect1_foregroundBlur_44_12"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HeroEffectSvg;
