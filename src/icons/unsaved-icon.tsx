import type { SVGProps } from "react";


const UnsavedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      {...props}
    >
      <path
        d="M18.5211 16.4619L1.47888 2.11572M3.00002 14.3237V7.70509C3.00002 4.79839 3.00002 3.34505 4.02514 2.44205C5.05027 1.53906 6.70018 1.53906 10 1.53906C13.2998 1.53906 14.9498 1.53906 15.9749 2.44205C17 3.34505 17 4.79839 17 7.70509V14.3237C17 16.1684 17 17.0907 16.3238 17.4209C15.0142 18.0602 12.5578 15.9272 11.3913 15.285C10.7147 14.9125 10.3764 14.7263 10 14.7263C9.62359 14.7263 9.28532 14.9125 8.60877 15.285C7.44222 15.9272 4.9858 18.0602 3.67626 17.4209C3.00002 17.0907 3.00002 16.1684 3.00002 14.3237Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UnsavedIcon;
