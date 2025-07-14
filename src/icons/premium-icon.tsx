import type { SVGProps } from "react";

const PremiumIcon = ({ stroke = 'white', ...props }: SVGProps<SVGSVGElement>)=> {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      {...props}
    >
      <path
        d="M9.99997 6.42871H1.99997C1.36879 6.42871 0.857117 6.94039 0.857117 7.57157V11.5716C0.857117 12.2028 1.36879 12.7144 1.99997 12.7144H9.99997C10.6312 12.7144 11.1428 12.2028 11.1428 11.5716V7.57157C11.1428 6.94039 10.6312 6.42871 9.99997 6.42871Z"
        stroke={stroke}
        strokeWidth="1.11429"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.14288 6.42899V4.14328C3.14288 3.38551 3.4439 2.65879 3.97972 2.12297C4.51554 1.58715 5.24226 1.28613 6.00003 1.28613C6.75779 1.28613 7.48451 1.58715 8.02033 2.12297C8.55615 2.65879 8.85717 3.38551 8.85717 4.14328V6.42899"
        stroke={stroke}
        strokeWidth="1.11429"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PremiumIcon;
